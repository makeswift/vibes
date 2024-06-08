'use client'

import { useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

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
      <div className="relative z-0 flex h-full w-full flex-1 overflow-hidden pl-5 lg:pl-8">
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
            'pb.5 absolute inset-0 flex items-center pl-5 transition-transform duration-300 [transition-timing-function:cubic-bezier(.5,0,.25,1)] md:text-xl lg:pl-8 lg:text-2xl',
            success ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          Success!
        </div>
      </div>
      <button
        type="submit"
        className={clsx(
          'absolute inset-y-1.5 right-1.5 flex aspect-square items-center justify-center overflow-hidden rounded-full transition-all',
          success ? 'bg-[#3FCF59]' : 'bg-black'
        )}
        disabled={success}
      >
        <span className="sr-only">Subscribe</span>
        <div className="relative flex h-full w-full items-center justify-center transition-transform">
          <Arrow className={clsx('duration-300', !success ? 'translate-y-0' : '-translate-y-12')} />
          <Check
            className={clsx(
              'absolute left-1/2 top-1/2 -mt-[14px] -translate-x-1/2 transition-transform duration-300',
              success ? 'translate-y-0' : 'translate-y-12'
            )}
          />
        </div>
        {/* {loading && (
          <span className="animate-in animate-out fade-in fade-out spin-in spin-out">
            <Loader className="animate-spin" />
          </span>
        )} */}
      </button>
      {(errors.Email || error) && (
        <div className="absolute left-1/2 top-full mt-4 -translate-x-1/2 space-y-1 p-1 text-center text-base md:text-xl">
          {errors.Email && <>{errors.Email.message}</>}
          {error && <>There was a server error</>}
        </div>
      )}
    </form>
  )
}
