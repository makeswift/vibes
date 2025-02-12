'use client';

import { getFormProps, getInputProps, SubmissionResult, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

import { FieldError } from '@/vibes/soul/form/field-error';
import { Input } from '@/vibes/soul/form/input';
import { Button } from '@/vibes/soul/primitives/button';
import { Chip } from '@/vibes/soul/primitives/chip';

import { couponCodeActionFormDataSchema } from './schema';

type Action<State, Payload> = (state: Awaited<State>, payload: Payload) => State | Promise<State>;

export interface CouponCodeFormState {
  couponCodes: string[];
  lastResult: SubmissionResult | null;
}

interface Props {
  action: Action<CouponCodeFormState, FormData>;
  couponCodes?: string[];
  ctaLabel?: string;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  removeLabel?: string;
}

export function CouponCodeForm({
  action,
  couponCodes,
  ctaLabel = 'Apply',
  disabled = false,
  label = 'Promo code',
  placeholder,
  removeLabel = 'Remove promo code',
}: Props) {
  const [{ couponCodes: actionStateCouponCodes, lastResult }, formAction] = useActionState(action, {
    couponCodes: couponCodes ?? [],
    lastResult: null,
  });

  const [form, fields] = useForm({
    lastResult,
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: couponCodeActionFormDataSchema });
    },
  });

  return (
    <div className="border-t border-contrast-100 py-6">
      <form {...getFormProps(form)} action={formAction} className="space-y-2">
        <label htmlFor={fields.couponCode.id}>{label}</label>
        <div className="flex gap-1.5">
          <Input
            {...getInputProps(fields.couponCode, {
              required: true,
              type: 'text',
            })}
            disabled={disabled}
            errors={fields.couponCode.errors}
            id={fields.couponCode.id}
            key={fields.couponCode.id}
            placeholder={placeholder}
          />
          <SubmitButton disabled={disabled}>{ctaLabel}</SubmitButton>
        </div>
        {form.errors?.map((error, index) => <FieldError key={index}>{error}</FieldError>)}
      </form>
      <div className="flex flex-wrap gap-1.5 pt-3">
        {actionStateCouponCodes.map((couponCode) => (
          <form action={formAction} key={couponCode}>
            <input name="couponCode" type="hidden" value={couponCode} />
            <Chip key={couponCode} name="intent" removeLabel={removeLabel} value="delete">
              {couponCode.toUpperCase()}
            </Chip>
          </form>
        ))}
      </div>
    </div>
  );
}

function SubmitButton({ disabled, ...props }: React.ComponentPropsWithoutRef<typeof Button>) {
  const { pending } = useFormStatus();

  return (
    <Button
      {...props}
      disabled={disabled ?? pending}
      loading={pending}
      name="intent"
      size="small"
      type="submit"
      value="apply"
      variant="secondary"
    />
  );
}
