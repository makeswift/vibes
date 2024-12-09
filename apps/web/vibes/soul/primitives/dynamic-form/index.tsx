'use client';

import {
  FieldMetadata,
  FormProvider,
  getFormProps,
  getInputProps,
  SubmissionResult,
  useForm,
  useInputControl,
} from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { z } from 'zod';

import { ButtonRadioGroup } from '@/vibes/soul/form/button-radio-group';
import { CardRadioGroup } from '@/vibes/soul/form/card-radio-group';
import { Checkbox } from '@/vibes/soul/form/checkbox';
import { Input } from '@/vibes/soul/form/input';
import { NumberInput } from '@/vibes/soul/form/number-input';
import { RadioGroup } from '@/vibes/soul/form/radio-group';
import { Select } from '@/vibes/soul/form/select';
import { SwatchRadioGroup } from '@/vibes/soul/form/swatch-radio-group';
import { Button } from '@/vibes/soul/primitives/button';

import { Field, FieldGroup, schema } from './schema';

type Action<S, P> = (state: Awaited<S>, payload: P) => S | Promise<S>;

interface State<F extends Field> {
  fields: (F | FieldGroup<F>)[];
  lastResult: SubmissionResult | null;
}

export type DynamicFormAction<F extends Field> = Action<State<F>, FormData>;

interface Props<F extends Field> {
  fields: (F | FieldGroup<F>)[];
  action: DynamicFormAction<F>;
  submitLabel?: string;
}

export function DynamicForm<F extends Field>({
  action,
  fields: defaultFields,
  submitLabel = 'Submit',
}: Props<F>) {
  const [{ lastResult, fields }, formAction] = useActionState(action, {
    fields: defaultFields,
    lastResult: null,
  });
  const dynamicSchema = schema(fields);
  const defaultValue = fields
    .flatMap((f) => (Array.isArray(f) ? f : [f]))
    .reduce<z.infer<typeof dynamicSchema>>(
      (acc, field) => ({
        ...acc,
        [field.name]: 'defaultValue' in field ? field.defaultValue : '',
      }),
      { quantity: 1 },
    );
  const [form, formFields] = useForm({
    lastResult,
    constraint: getZodConstraint(dynamicSchema),
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: schema(fields) });
    },
    defaultValue,
    shouldValidate: 'onSubmit',
    shouldRevalidate: 'onInput',
  });

  return (
    <FormProvider context={form.context}>
      <form {...getFormProps(form)} action={formAction}>
        <div className="space-y-6">
          {fields.map((field, index) => {
            if (Array.isArray(field)) {
              return (
                <div className="flex gap-4" key={index}>
                  {field.map((f) => {
                    const groupFormField = formFields[f.name];

                    if (!groupFormField) return null;

                    return (
                      <DynamicFormField
                        field={f}
                        formField={groupFormField}
                        key={groupFormField.id}
                      />
                    );
                  })}
                </div>
              );
            }

            const formField = formFields[field.name];

            if (formField == null) return null;

            return <DynamicFormField field={field} formField={formField} key={formField.id} />;
          })}
          <div className="flex gap-x-3 pt-3">
            <SubmitButton>{submitLabel}</SubmitButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <Button className="w-auto @xl:w-56" loading={pending} size="medium" type="submit">
      {children}
    </Button>
  );
}

function DynamicFormField({
  field,
  formField,
}: {
  field: Field;
  formField: FieldMetadata<string | number | boolean | Date | undefined>;
  syncQueryParams?: boolean;
}) {
  const controls = useInputControl(formField);

  switch (field.type) {
    case 'number':
      return (
        <NumberInput
          {...getInputProps(formField, { type: 'number' })}
          errors={formField.errors}
          label={field.label}
        />
      );

    case 'text':
      return (
        <Input
          {...getInputProps(formField, { type: 'text' })}
          errors={formField.errors}
          label={field.label}
        />
      );

    case 'password':
    case 'confirm-password':
      return (
        <Input
          {...getInputProps(formField, { type: 'password' })}
          errors={formField.errors}
          label={field.label}
        />
      );

    case 'email':
      return (
        <Input
          {...getInputProps(formField, { type: 'email' })}
          errors={formField.errors}
          label={field.label}
        />
      );

    case 'checkbox':
      return (
        <Checkbox
          errors={formField.errors}
          id={formField.id}
          key={formField.id}
          label={field.label}
          name={formField.name}
          onBlur={controls.blur}
          onCheckedChange={(value) => controls.change(String(value))}
          onFocus={controls.focus}
          required={formField.required}
          value={controls.value}
        />
      );

    case 'select':
      return (
        <Select
          errors={formField.errors}
          id={formField.id}
          key={formField.id}
          label={field.label}
          name={formField.name}
          onBlur={controls.blur}
          onFocus={controls.focus}
          onValueChange={controls.change}
          options={field.options}
          required={formField.required}
          value={controls.value}
        />
      );

    case 'radio-group':
      return (
        <RadioGroup
          errors={formField.errors}
          id={formField.id}
          key={formField.id}
          label={field.label}
          name={formField.name}
          onBlur={controls.blur}
          onFocus={controls.focus}
          onValueChange={controls.change}
          options={field.options}
          required={formField.required}
          value={controls.value}
        />
      );

    case 'swatch-radio-group':
      return (
        <SwatchRadioGroup
          errors={formField.errors}
          id={formField.id}
          key={formField.id}
          label={field.label}
          name={formField.name}
          onBlur={controls.blur}
          onFocus={controls.focus}
          onValueChange={controls.change}
          options={field.options}
          required={formField.required}
          value={controls.value}
        />
      );

    case 'card-radio-group':
      return (
        <CardRadioGroup
          errors={formField.errors}
          id={formField.id}
          key={formField.id}
          label={field.label}
          name={formField.name}
          onBlur={controls.blur}
          onFocus={controls.focus}
          onValueChange={controls.change}
          options={field.options}
          required={formField.required}
          value={controls.value}
        />
      );

    case 'button-radio-group':
      return (
        <ButtonRadioGroup
          errors={formField.errors}
          id={formField.id}
          key={formField.id}
          label={field.label}
          name={formField.name}
          onBlur={controls.blur}
          onFocus={controls.focus}
          onValueChange={controls.change}
          options={field.options}
          required={formField.required}
          value={controls.value}
        />
      );
  }
}
