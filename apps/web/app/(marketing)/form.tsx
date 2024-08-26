'use client'

import { useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

import { getFormProps, getInputProps, useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import clsx from 'clsx'

import { submitLead } from '@/actions/submit-lead'
import Transition from '@/components/ui/transition'
import { Arrow, Check, Loader } from '@/icons/generated'
import { submitLeadSchema } from '@/lib/schema'

export function Form({ intent }: { intent?: string }) {
  const [shake, setShake] = useState(false)
  const [lastResult, action] = useFormState(submitLead, undefined)
  const [form, fields] = useForm({
    lastResult,
    defaultValue: { email: '', intent },
    shouldValidate: 'onSubmit',
    shouldRevalidate: 'onInput',
    constraint: getZodConstraint(submitLeadSchema),
    onValidate({ formData }) {
      const submission = parseWithZod(formData, { schema: submitLeadSchema })

      if (submission.status === 'error') {
        setShake(true)
        setTimeout(() => setShake(false), 1000)
      }

      return submission
    },
  })
  const success = form.status === 'success'

  return (
    <form
      {...getFormProps(form)}
      action={action}
      className="pattern-shadow pattern-shadow-md relative flex h-14 w-full gap-2 gap-x-3 rounded-full border-[1.5px] border-black bg-white sm:w-auto md:h-16 lg:h-[72px]"
    >
      <div className="relative z-0 flex h-full w-full flex-1 overflow-hidden pl-4 pr-14 md:w-auto lg:pl-6 lg:pr-16">
        <label htmlFor={fields.email.id} className="sr-only">
          Add your email to be notified
        </label>
        <input
          {...getInputProps(fields.email, { type: 'email' })}
          placeholder="Add your email to be notified"
          className={clsx(
            'w-full bg-transparent font-sans text-lg text-black outline-none transition-all duration-300 [transition-timing-function:cubic-bezier(.5,0,.25,1)] placeholder:text-black/50 focus:!w-[540px] focus:outline-none sm:w-[540px] sm:placeholder-shown:w-[300px] md:text-xl lg:text-[24px] lg:placeholder-shown:w-[350px]',
            success ? '-translate-y-full' : 'translate-y-0'
          )}
          data-1p-ignore
        />
        <input {...getInputProps(fields.intent, { type: 'hidden' })} />
        <div
          id={fields.email.descriptionId}
          hidden={!success}
          className={clsx(
            'absolute inset-0 flex items-center pl-5 text-black transition-transform duration-300 [transition-timing-function:cubic-bezier(.5,0,.25,1)] md:text-xl lg:pl-8 lg:text-[24px]',
            success ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          Success! Check your email.
        </div>
      </div>

      <Submit success={success} />

      <div
        id={fields.email.errorId}
        className="absolute left-1/2 top-full mt-5 -translate-x-1/2 rounded-xl bg-[#EA3BA7] px-4 py-2 text-center text-lg text-white"
        hidden={!fields.email.errors}
      >
        {fields.email.errors}
      </div>

      <div
        id={form.errorId}
        className="absolute left-1/2 top-full mt-5 -translate-x-1/2 rounded-xl bg-[#EA3BA7] px-4 py-2 text-center text-lg text-white"
        hidden={!form.errors}
      >
        {form.errors}
      </div>
    </form>
  )
}

function Submit({ success }: { success: boolean }) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className={clsx(
        'absolute bottom-1.5 right-1.5 top-1.5 flex aspect-square h-10 items-center justify-center overflow-hidden rounded-full transition-all md:h-12 lg:h-14',
        success ? 'bg-[#39e258]' : 'bg-black'
      )}
      disabled={pending || success}
    >
      <span className="sr-only">Subscribe</span>
      <div className="relative flex h-full w-full items-center justify-center transition-transform">
        {!pending && !success && <Arrow />}
        {success && (
          <Transition className="transition-transform" from="-translate-y-12" to="translate-y-0">
            <Check className="scale-150" />
          </Transition>
        )}
        {pending && <Loader className="animate-spin" />}
      </div>
    </button>
  )
}
