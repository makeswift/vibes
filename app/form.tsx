'use client'

import { useFormState, useFormStatus } from 'react-dom'

import { getFormProps, getInputProps, useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import clsx from 'clsx'

import { submitLead } from '@/actions/submit-lead'
import Transition from '@/components/ui/transition'
import { Arrow, Check, Loader } from '@/icons/generated'
import { submitLeadSchema } from '@/lib/schema'

export function Form() {
  const [lastResult, action] = useFormState(submitLead, undefined)
  const [form, fields] = useForm({
    lastResult,
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    constraint: getZodConstraint(submitLeadSchema),
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: submitLeadSchema })
    },
  })
  const success = form.status === 'success'

  return (
    <form
      {...getFormProps(form)}
      action={action}
      className={clsx(
        'relative mt-6 flex h-14 w-full max-w-full gap-2 gap-x-3 rounded-full border-2 border-black bg-white shadow-[-4px_4px_black] transition-all focus-within:shadow-[-0px_0px_black] sm:mt-8 sm:w-[400px] md:h-16 lg:mt-12 lg:h-[72px] lg:w-[600px]',
        !form.valid && 'animate-shake'
      )}
    >
      <div className="relative z-0 flex h-full w-full flex-1 overflow-hidden pl-5 pr-14 lg:pl-8 lg:pr-16">
        <label htmlFor={fields.email.id} className="sr-only">
          Email
        </label>
        <input
          {...getInputProps(fields.email, { type: 'email' })}
          placeholder="Enter your email for updates"
          className={clsx(
            'flex-1 bg-transparent pb-0.5 font-sans text-lg text-black transition-transform duration-300 [transition-timing-function:cubic-bezier(.5,0,.25,1)] placeholder:text-black/50 focus:outline-none md:text-xl placeholder:md:text-xl lg:text-2xl placeholder:lg:text-2xl',
            success ? '-translate-y-full' : 'translate-y-0'
          )}
          data-1p-ignore
        />
        <div
          id={fields.email.descriptionId}
          hidden={!success}
          className={clsx(
            'absolute inset-0 flex items-center pb-0.5 pl-5 text-black transition-transform duration-300 [transition-timing-function:cubic-bezier(.5,0,.25,1)] md:text-xl lg:pl-8 lg:text-2xl',
            success ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          Success!
        </div>
      </div>

      <Submit success={success} />

      <div
        id={fields.email.errorId}
        className="absolute left-1/2 top-full mt-4 -translate-x-1/2 space-y-1 rounded-xl bg-black p-1 px-4 py-2.5 text-center text-base text-white md:text-lg"
        hidden={!fields.email.errors}
      >
        {fields.email.errors}
      </div>

      <div
        id={form.errorId}
        className="absolute left-1/2 top-full mt-4 -translate-x-1/2 space-y-1 rounded-xl bg-black p-1 px-4 py-2.5 text-center text-base text-white md:text-lg"
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
        success ? 'bg-[#3FCF59]' : 'bg-black'
      )}
      disabled={pending || success}
    >
      <span className="sr-only">Subscribe</span>
      <div className="relative flex h-full w-full items-center justify-center transition-transform">
        {!pending && !success && <Arrow />}
        {success && (
          <Transition className="transition-transform" from="-translate-y-12" to="translate-y-0">
            <Check />
          </Transition>
        )}
        {pending && <Loader className="animate-spin" />}
      </div>
    </button>
  )
}
