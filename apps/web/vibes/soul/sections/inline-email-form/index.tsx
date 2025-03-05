'use client';

import { getFormProps, getInputProps, SubmissionResult, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';
import { useActionState } from 'react';

import { FormStatus } from '@/vibes/soul/form/form-status';
import { Button } from '@/vibes/soul/primitives/button';

import { schema } from './schema';

type Action<State, Payload> = (
  prevState: Awaited<State>,
  formData: Payload,
) => State | Promise<State>;

export interface InlineEmailFormProps {
  className?: string;
  placeholder?: string;
  submitLabel?: string;
  action: Action<{ lastResult: SubmissionResult | null; successMessage?: string }, FormData>;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --inline-email-form-focus: hsl(var(--primary));
 *   --inline-email-form-background: hsl(var(--background));
 *   --inline-email-form-placeholder: hsl(var(--contrast-gray-500));
 *   --inline-email-form-text: hsl(var(--foreground));
 *   --inline-email-form-border: hsl(var(--black));
 *   --inline-email-form-error: hsl(var(--error));
 * }
 * ```
 */
export function InlineEmailForm({
  className,
  action,
  submitLabel = 'Submit',
  placeholder = 'Enter your email',
}: InlineEmailFormProps) {
  const [{ lastResult, successMessage }, formAction, isPending] = useActionState(action, {
    lastResult: null,
  });

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
    shouldValidate: 'onSubmit',
    shouldRevalidate: 'onInput',
  });

  const { errors = [] } = fields.email;

  return (
    <form {...getFormProps(form)} action={formAction} className={clsx('space-y-2', className)}>
      <div
        className={clsx(
          'relative rounded-xl border bg-[var(--inline-email-form-background,hsl(var(--background)))] text-base transition-colors duration-200 focus-within:border-[var(--inline-email-form-focus,hsl(var(--primary)))] focus:outline-none',
          errors.length
            ? 'border-[var(--inline-email-form-error,hsl(var(--error)))]'
            : 'border-[var(--inline-email-form-border,hsl(var(--black)))]',
        )}
      >
        <input
          {...getInputProps(fields.email, { type: 'email' })}
          className="h-14 w-full bg-transparent pl-5 pr-16 text-[var(--inline-email-form-text,hsl(var(--foreground)))] placeholder-[var(--inline-email-form-placeholder,hsl(var(--contrast-gray-500)))] placeholder:font-normal focus:outline-none"
          data-1p-ignore
          key={fields.email.id}
          placeholder={placeholder}
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
          <Button
            aria-label={submitLabel}
            loading={isPending}
            shape="circle"
            size="small"
            type="submit"
            variant="secondary"
          >
            <ArrowRight size={20} strokeWidth={1.5} />
          </Button>
        </div>
      </div>
      <div className="mt-2">
        {errors.map((error, index) => (
          <FormStatus key={index} type="error">
            {error}
          </FormStatus>
        ))}
        {form.status === 'success' && successMessage != null && (
          <FormStatus>{successMessage}</FormStatus>
        )}
      </div>
    </form>
  );
}
