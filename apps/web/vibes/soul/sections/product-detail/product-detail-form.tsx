'use client'

import { useActionState, useCallback } from 'react'

import {
  FieldMetadata,
  FormProvider,
  SubmissionResult,
  getFormProps,
  useForm,
  useInputControl,
} from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { ArrowRight } from 'lucide-react'
import { parseAsString, useQueryState, useQueryStates } from 'nuqs'
import { z } from 'zod'

import { ButtonRadioGroup } from '@/vibes/soul/form/button-radio-group'
import { CardRadioGroup } from '@/vibes/soul/form/card-radio-group'
import { Checkbox } from '@/vibes/soul/form/checkbox'
import { Input } from '@/vibes/soul/form/input'
import { NumberInput } from '@/vibes/soul/form/number-input'
import { RadioGroup } from '@/vibes/soul/form/radio-group'
import { Select } from '@/vibes/soul/form/select'
import { SwatchRadioGroup } from '@/vibes/soul/form/swatch-radio-group'
import { Button } from '@/vibes/soul/primitives/button'

import { Field, SchemaRawShape, schema } from './schema'

type Action<State, Payload> = (state: Awaited<State>, payload: Payload) => State | Promise<State>

export type ProductDetailFormAction = Action<SubmissionResult | null, FormData>

type Props = {
  fields: Field[]
  action: ProductDetailFormAction
  productId: string
  ctaLabel?: string
}

export function ProductDetailForm({ action, fields, productId, ctaLabel = 'Add to cart' }: Props) {
  const [params] = useQueryStates(
    fields.reduce(
      (acc, field) => {
        return { ...acc, [field.name]: parseAsString }
      },
      { quantity: parseAsString } as Record<string, typeof parseAsString>
    ),
    { shallow: false }
  )
  const defaultValue = fields.reduce(
    (acc, field) => ({
      ...acc,
      [field.name]: params[field.name] ?? field.defaultValue ?? '',
    }),
    { quantity: 1 } as { [Key in keyof SchemaRawShape]?: z.infer<SchemaRawShape[Key]> }
  )
  const [lastResult, formAction] = useActionState(action, null)
  const [form, formFields] = useForm({
    lastResult,
    constraint: getZodConstraint(schema(fields)),
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: schema(fields) })
    },
    // @ts-expect-error: `defaultValue` types are conflicting with `onValidate`.
    defaultValue,
    shouldValidate: 'onSubmit',
    shouldRevalidate: 'onInput',
  })
  const quantityControl = useInputControl(formFields.quantity)

  return (
    <FormProvider context={form.context}>
      <form {...getFormProps(form)} action={formAction}>
        <input type="hidden" value={productId} name="id" />
        <div className="space-y-6">
          {fields.map(field => {
            return (
              <FormField
                key={formFields[field.name]!.id}
                field={field}
                formField={formFields[field.name]!}
              />
            )
          })}
          <div className="flex gap-x-3 pt-3">
            <NumberInput
              id={formFields.quantity.id}
              name={formFields.quantity.name}
              value={quantityControl.value}
              onChange={e => quantityControl.change(e.currentTarget.value)}
              onFocus={quantityControl.focus}
              onBlur={quantityControl.blur}
              label=""
              min={1}
              required
            />
            <Button size="medium" type="submit" className="w-auto @xl:w-56">
              {ctaLabel}
              <ArrowRight strokeWidth={1} size={20} />
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

function FormField({
  field,
  formField,
}: {
  field: Field
  formField: FieldMetadata<string | number | boolean | Date | undefined>
}) {
  const controls = useInputControl(formField)
  const [, setParam] = useQueryState(field.name, parseAsString.withOptions({ shallow: false }))

  const handleChange = useCallback(
    (value: string) => {
      setParam(value)
      controls.change(value)
    },
    [controls.change, setParam]
  )

  switch (field.type) {
    case 'number':
      return (
        <NumberInput
          key={formField.id}
          id={formField.id}
          errors={formField.errors}
          value={controls.value}
          onChange={e => handleChange(e.currentTarget.value)}
          onFocus={controls.focus}
          onBlur={controls.blur}
          name={formField.name}
          required={formField.required}
          label={field.label}
        />
      )
    case 'text':
      return (
        <Input
          key={formField.id}
          id={formField.id}
          errors={formField.errors}
          value={controls.value}
          onChange={e => handleChange(e.currentTarget.value)}
          onFocus={controls.focus}
          onBlur={controls.blur}
          name={formField.name}
          required={formField.required}
          label={field.label}
        />
      )
    case 'checkbox':
      return (
        <Checkbox
          key={formField.id}
          id={formField.id}
          name={formField.name}
          value={controls.value}
          onCheckedChange={value => handleChange(String(value))}
          onFocus={controls.focus}
          onBlur={controls.blur}
          label={field.label}
          required={formField.required}
          errors={formField.errors}
        />
      )
    case 'select':
      return (
        <Select
          key={formField.id}
          id={formField.id}
          name={formField.name}
          label={field.label}
          options={field.options}
          errors={formField.errors}
          required={formField.required}
          value={controls.value}
          onValueChange={handleChange}
          onFocus={controls.focus}
          onBlur={controls.blur}
        />
      )
    case 'radio-group':
      return (
        <RadioGroup
          key={formField.id}
          id={formField.id}
          name={formField.name}
          label={field.label}
          options={field.options}
          errors={formField.errors}
          required={formField.required}
          value={controls.value}
          onValueChange={handleChange}
          onFocus={controls.focus}
          onBlur={controls.blur}
        />
      )
    case 'swatch-radio-group':
      return (
        <SwatchRadioGroup
          key={formField.id}
          id={formField.id}
          name={formField.name}
          errors={formField.errors}
          required={formField.required}
          label={field.label}
          options={field.options}
          value={controls.value}
          onValueChange={handleChange}
          onFocus={controls.focus}
          onBlur={controls.blur}
        />
      )
    case 'card-radio-group':
      return (
        <CardRadioGroup
          key={formField.id}
          id={formField.id}
          name={formField.name}
          errors={formField.errors}
          required={formField.required}
          label={field.label}
          options={field.options}
          value={controls.value}
          onValueChange={handleChange}
          onFocus={controls.focus}
          onBlur={controls.blur}
        />
      )
    case 'button-radio-group':
      return (
        <ButtonRadioGroup
          key={formField.id}
          id={formField.id}
          name={formField.name}
          errors={formField.errors}
          required={formField.required}
          label={field.label}
          options={field.options}
          value={controls.value}
          onValueChange={handleChange}
          onFocus={controls.focus}
          onBlur={controls.blur}
        />
      )
  }
}
