'use client'

import { useActionState, useEffect } from 'react'

import { SubmissionResult, getFormProps, getInputProps, useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'

import { Input } from '@/vibes/soul/form/input'
import { Button } from '@/vibes/soul/primitives/button'

import { schema } from './schema'

type Action<State, Payload> = (state: Awaited<State>, payload: Payload) => State | Promise<State>

export type SignInAction = Action<SubmissionResult | null, FormData>

type Props = {
  action: SignInAction
  emailLabel?: string
  passwordLabel?: string
  submitLabel?: string
}

export function SignInForm({
  action,
  emailLabel = 'Email',
  passwordLabel = 'Password',
  submitLabel = 'Sign in',
}: Props) {
  const [lastResult, formAction, isPending] = useActionState(action, null)
  const [form, fields] = useForm({
    defaultValue: { email: '', password: '' },
    constraint: getZodConstraint(schema),
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    onValidate({ formData }) {
      return parseWithZod(formData, { schema })
    },
  })

  useEffect(() => {
    if (lastResult?.error) console.log(lastResult.error)
  }, [lastResult])

  return (
    <form {...getFormProps(form)} className="flex flex-grow flex-col gap-5" action={formAction}>
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
        className="mb-6"
        label={passwordLabel}
      />
      <Button type="submit" variant="secondary" className="mt-auto w-full" loading={isPending}>
        {submitLabel}
      </Button>
    </form>
  )
}
