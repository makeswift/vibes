'use client'

import { useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import Transition from '@/components/ui/transition'
import { Arrow, Check, Loader } from '@/icons/generated'

const schema = z.object({
  Email: z.string().min(1, { message: 'Email is required' }).email('This is not a valid email'),
})

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = useCallback(async function (values) {
    try {
      setLoading(true)

      await fetch('/api/leads', {
        method: 'POST',
        body: JSON.stringify({ ...values, Source: 'Vibes' }),
      })

      reset()
      setSuccess(true)
      setError(false)
    } catch (e) {
      setError(true)
      setSuccess(false)
    } finally {
      setLoading(false)
    }
  }, [])
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <form
      className={clsx(
        'relative mt-6 flex h-14 w-full max-w-full gap-2 gap-x-3 rounded-full border-2 border-black bg-white shadow-[-4px_4px_black] transition-all focus-within:shadow-[-0px_0px_black] sm:mt-8 sm:w-[400px] md:h-16 lg:mt-12 lg:h-[72px] lg:w-[600px]',
        errors.Email && 'animate-shake'
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative z-0 flex h-full w-full flex-1 overflow-hidden pl-5 pr-14 lg:pl-8 lg:pr-16">
        <input
          {...register('Email')}
          data-1p-ignore
          className={clsx(
            'flex-1 bg-transparent pb-0.5 font-sans text-lg text-black transition-transform duration-300 [transition-timing-function:cubic-bezier(.5,0,.25,1)] placeholder:text-black/50 focus:outline-none md:text-xl placeholder:md:text-xl lg:text-2xl placeholder:lg:text-2xl',
            success ? '-translate-y-full' : 'translate-y-0'
          )}
          placeholder="Enter your email for updates"
        />
        <div
          className={clsx(
            'absolute inset-0 flex items-center pb-0.5 pl-5 text-black transition-transform duration-300 [transition-timing-function:cubic-bezier(.5,0,.25,1)] md:text-xl lg:pl-8 lg:text-2xl',
            success ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          Success!
        </div>
      </div>
      <button
        type="submit"
        className={clsx(
          'absolute bottom-1.5 right-1.5 top-1.5 flex aspect-square h-10 items-center justify-center overflow-hidden rounded-full transition-all md:h-12 lg:h-14',
          success ? 'bg-[#3FCF59]' : 'bg-black'
        )}
        disabled={success}
      >
        <span className="sr-only">Subscribe</span>
        <div className="relative flex h-full w-full items-center justify-center transition-transform">
          {!loading && !success && (
            <Arrow
              className={clsx('duration-300', !success ? 'translate-y-0' : '-translate-y-12')}
            />
          )}
          {success && (
            <Transition className="transition-transform" from="-translate-y-12" to="translate-y-0">
              <Check />
            </Transition>
          )}
          {loading && (
            <Transition className="transition-opacity" from="opacity-0" to="opacity-100">
              <Loader className="animate-spin" />
            </Transition>
          )}
        </div>
      </button>
      {(errors.Email || error) && (
        <div className="absolute left-1/2 top-full mt-4 -translate-x-1/2 space-y-1 rounded-xl bg-black p-1 px-4 py-2.5 text-center text-base text-white md:text-lg">
          {errors.Email && <>{errors.Email.message}</>}
          {error && <>There was a server error</>}
        </div>
      )}
    </form>
  )
}
