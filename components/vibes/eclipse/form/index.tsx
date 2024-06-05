'use client'

import { Ref, forwardRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import clsx from 'clsx'

import Toast from '../toast'

type HiddenFields = {
  name: string
  value: string
}

type Props = {
  className?: string
  redirectURL?: { href: string; target?: '_blank' | '_self' }
  fields: React.ReactNode
  actionURL?: string
  toastTitle?: string
  toastDescription?: string
  hiddenFields?: HiddenFields[]
}

export const Form = forwardRef(function Form(
  {
    className,
    fields,
    actionURL = '',
    hiddenFields,
    toastTitle = 'Thank you for reaching out',
    toastDescription = 'We will be in touch shortly.',
  }: Props,
  ref: Ref<HTMLFormElement>
) {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const methods = useForm()

  return (
    <>
      <FormProvider {...methods}>
        <form
          ref={ref}
          className={clsx(className, 'space-y-8 text-center')}
          onSubmit={methods.handleSubmit(async data => {
            try {
              await fetch(actionURL, {
                method: 'POST',
                body: JSON.stringify(data),
              })

              setSuccess(true)
              methods.reset()
            } catch (e) {
              setError(true)
            }
          })}
        >
          {fields}
          {hiddenFields?.map(field => (
            <input
              key={field.name}
              type="hidden"
              {...methods.register(field.name || 'Source')}
              value={field.value}
            />
          ))}
        </form>
      </FormProvider>
      <Toast
        title={toastTitle}
        description={toastDescription}
        open={success}
        onOpenChange={setSuccess}
        duration={5000}
      />
      <Toast
        title="An error occurred"
        description="Please try again"
        open={error}
        onOpenChange={setError}
        duration={5000}
      />
    </>
  )
})

export default Form
