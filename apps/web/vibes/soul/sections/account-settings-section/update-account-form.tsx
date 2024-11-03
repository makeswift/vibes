'use client'

import { useActionState, useEffect } from 'react'

import { SubmissionResult, getFormProps, getInputProps, useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'

import { Input } from '@/vibes/soul/form/input'
import { Button } from '@/vibes/soul/primitives/button'

import { updateAccountSchema } from './schema'

type Action<State, Payload> = (state: Awaited<State>, payload: Payload) => State | Promise<State>

export type UpdateAccountAction = Action<SubmissionResult | null, FormData>

type Props = {
  action: UpdateAccountAction
  submitLabel?: string
}

export function UpdateAccountForm({ action, submitLabel = 'Update' }: Props) {
  const [lastResult, formAction, isPending] = useActionState(action, null)
  const [form, fields] = useForm({
    constraint: getZodConstraint(updateAccountSchema),
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: updateAccountSchema })
    },
  })

  useEffect(() => {
    if (lastResult?.error) return console.log(lastResult.error)
  }, [lastResult])

  return (
    <form {...getFormProps(form)} className="space-y-5" action={formAction}>
      <div className="flex gap-5">
        <Input
          {...getInputProps(fields.firstName, { type: 'text' })}
          key={fields.firstName.id}
          errors={fields.firstName.errors}
          label="First name"
        />
        <Input
          {...getInputProps(fields.lastName, { type: 'text' })}
          key={fields.lastName.id}
          errors={fields.lastName.errors}
          label="Last name"
        />
      </div>
      <Input
        {...getInputProps(fields.email, { type: 'text' })}
        key={fields.email.id}
        errors={fields.email.errors}
        label="Email"
      />
      <Button type="submit" variant="secondary" size="small" loading={isPending}>
        {submitLabel}
      </Button>
    </form>
  )
}
