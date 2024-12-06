'use client';

import { SubmissionResult, getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';
import { useActionState, useEffect } from 'react';

import { FieldError } from '@/vibes/soul/form/field-error';
import { Button } from '@/vibes/soul/primitives/button';
import { toast } from '@/vibes/soul/primitives/toaster';


import { schema } from './schema';

type Action<State, Payload> = (
  prevState: Awaited<State>,
  formData: Payload,
) => State | Promise<State>;

export function InlineEmailForm({
  className,
  action,
  submitLabel = 'Submit',
  placeholder = 'Enter your email',
  dismissLabel,
}: {
  className?: string;
  placeholder?: string;
  submitLabel?: string;
  dismissLabel?: string;
  action: Action<SubmissionResult & {successMessage?: string} | null, FormData>;
}) {
  const [lastResult, formAction, isPending] = useActionState(action, null);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
    shouldValidate: 'onSubmit',
    shouldRevalidate: 'onBlur',
  });

  useEffect(() => {
    if (typeof lastResult?.successMessage === 'string') {
      toast.success(lastResult.successMessage, { dismissLabel });
      return;
    }
  }, [dismissLabel, lastResult]);

  const { errors = [] } = fields.email;

  return (
    <form {...getFormProps(form)} action={formAction} className={clsx('space-y-2', className)}>
      <div
        className={clsx(
          'relative rounded-xl border bg-background text-base transition-colors duration-200 focus-within:border-primary focus:outline-none',
          errors.length ? 'border-error' : 'border-black',
        )}
      >
        <input
          {...getInputProps(fields.email, { type: 'email' })}
          className="placeholder-contrast-gray-500 h-14 w-full bg-transparent pl-5 pr-16 text-foreground placeholder:font-normal focus:outline-none"
          key={fields.email.id}
          placeholder={placeholder}
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
          <Button
            aria-label={submitLabel}
            loading={isPending}
            size="icon"
            type="submit"
            variant="secondary"
          >
            <ArrowRight size={20} strokeWidth={1.5} />
          </Button>
        </div>
      </div>
      {errors.map((error, index) => (
        <FieldError key={index}>{error}</FieldError>
      ))}
    </form>
  );
}
