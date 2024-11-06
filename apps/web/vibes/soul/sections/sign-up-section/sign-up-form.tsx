'use client'

import { useActionState, useEffect } from 'react'

import { SubmissionResult, getFormProps, getInputProps, useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'

import { Input } from '@/vibes/soul/form/input'
import { Button } from '@/vibes/soul/primitives/button'

import { schema } from './schema'

type Action<State, Payload> = (state: Awaited<State>, payload: Payload) => State | Promise<State>

export type SignUpAction = Action<SubmissionResult | null, FormData>

type Props = {
  action: SignUpAction
  firstNameLabel?: string
  lastNameLabel?: string
  emailLabel?: string
  passwordLabel?: string
  confirmPasswordLabel?: string
  submitLabel?: string
}

export function SignUpForm({
  action,
  firstNameLabel = 'First name',
  lastNameLabel = 'Last name',
  emailLabel = 'Email',
  passwordLabel = 'Password',
  confirmPasswordLabel = 'Confirm password',
  submitLabel = 'Sign up',
}: Props) {
  const [lastResult, formAction, isPending] = useActionState(action, null)
  const [form, fields] = useForm({
    constraint: getZodConstraint(schema),
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    onValidate({ formData }) {
      return parseWithZod(formData, { schema })
    },
  })

  useEffect(() => {
    if (lastResult?.error) return console.log(lastResult.error)
  }, [lastResult])

  return (
    <form {...getFormProps(form)} className="flex flex-grow flex-col gap-5" action={formAction}>
      <div className="flex gap-5">
        <Input
          {...getInputProps(fields.firstName, { type: 'text' })}
          key={fields.firstName.id}
          errors={fields.firstName.errors}
          label={firstNameLabel}
        />
        <Input
          {...getInputProps(fields.lastName, { type: 'text' })}
          key={fields.lastName.id}
          errors={fields.lastName.errors}
          label={lastNameLabel}
        />
      </div>
      <Input
        {...getInputProps(fields.email, { type: 'text' })}
        key={fields.email.id}
        errors={fields.email.errors}
        label={emailLabel}
      />
      <Input
        {...getInputProps(fields.password, { type: 'password' })}
        key={fields.password.id}
        errors={fields.password.errors}
        label={passwordLabel}
      />
      <Input
        {...getInputProps(fields.confirmPassword, { type: 'password' })}
        key={fields.confirmPassword.id}
        errors={fields.confirmPassword.errors}
        className="mb-6"
        label={confirmPasswordLabel}
      />
      <Button type="submit" variant="secondary" className="mt-auto w-full" loading={isPending}>
        {submitLabel}
      </Button>
    </form>
  )
}
