'use client'

import { useActionState, useEffect } from 'react'

import { SubmissionResult, getFormProps, getInputProps, useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'

import { Input } from '@/vibes/soul/form/input'
import { Button } from '@/vibes/soul/primitives/button'

import { changePasswordSchema } from './schema'

type Action<State, Payload> = (state: Awaited<State>, payload: Payload) => State | Promise<State>

export type ChangePasswordAction = Action<SubmissionResult | null, FormData>

type Props = {
  action: ChangePasswordAction
  currentPasswordLabel?: string
  newPasswordLabel?: string
  confirmPasswordLabel?: string
  submitLabel?: string
}

export function ChangePasswordForm({
  action,
  currentPasswordLabel = 'Current password',
  newPasswordLabel = 'New password',
  confirmPasswordLabel = 'Confirm password',
  submitLabel = 'Update',
}: Props) {
  const [lastResult, formAction, isPending] = useActionState(action, null)
  const [form, fields] = useForm({
    constraint: getZodConstraint(changePasswordSchema),
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: changePasswordSchema })
    },
  })

  useEffect(() => {
    if (lastResult?.error) return console.log(lastResult.error)
  }, [lastResult])

  return (
    <form {...getFormProps(form)} className="space-y-5" action={formAction}>
      <Input
        {...getInputProps(fields.currentPassword, { type: 'password' })}
        key={fields.currentPassword.id}
        errors={fields.currentPassword.errors}
        label={currentPasswordLabel}
      />
      <Input
        {...getInputProps(fields.password, { type: 'password' })}
        key={fields.password.id}
        errors={fields.password.errors}
        label={newPasswordLabel}
      />
      <Input
        {...getInputProps(fields.confirmPassword, { type: 'password' })}
        key={fields.confirmPassword.id}
        errors={fields.confirmPassword.errors}
        className="mb-6"
        label={confirmPasswordLabel}
      />
      <Button type="submit" variant="secondary" size="small" loading={isPending}>
        {submitLabel}
      </Button>
    </form>
  )
}
