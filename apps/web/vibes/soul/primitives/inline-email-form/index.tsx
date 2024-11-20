'use client'

import { SubmissionResult, getFormProps, getInputProps, useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import clsx from 'clsx'
import { ArrowRight, CircleAlert } from 'lucide-react'
import { useActionState, useEffect } from 'react'

import { ErrorMessage } from '../../form/error-message'
import { Button } from '../button'

import { schema } from './schema'

type Action<State, Payload> = (
  prevState: Awaited<State>,
  formData: Payload
) => State | Promise<State>

export function InlineEmailForm({
  className,
  action,
  submitLabel = 'Submit',
  placeholder = 'Enter your email',
}: {
  className?: string
  placeholder?: string
  submitLabel?: string
  action: Action<SubmissionResult | null, FormData>
}) {
  const [lastResult, formAction, isPending] = useActionState(action, null)

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema })
    },
    shouldValidate: 'onSubmit',
    shouldRevalidate: 'onInput',
  })

  useEffect(() => {
    if (lastResult?.error) {
      console.log(lastResult.error)
      return
    }
  }, [lastResult])

  const { errors } = fields.email

  return (
    <form {...getFormProps(form)} className={className} action={formAction}>
      <div
        className={clsx(
          'relative rounded-xl border bg-background text-base transition-colors duration-200 focus-within:border-primary focus:outline-none',
          errors?.length ? 'border-error' : 'border-black'
        )}
      >
        <input
          {...getInputProps(fields.email, { type: 'email' })}
          key={fields.email.id}
          placeholder={placeholder}
          className="placeholder-contrast-gray-500 h-14 w-full bg-transparent pl-5 pr-16 text-foreground placeholder:font-normal focus:outline-none"
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
          <Button
            type="submit"
            variant="secondary"
            size="icon"
            aria-label={submitLabel}
            loading={isPending}
          >
            <ArrowRight strokeWidth={1.5} size={20} />
          </Button>
        </div>
      </div>
      {errors &&
        errors.length > 0 &&
        errors.map((error, index) => <ErrorMessage key={index}>{error}</ErrorMessage>)}
    </form>
  )
}
