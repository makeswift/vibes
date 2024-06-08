'use client'

import { useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

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
        'relative mt-6 flex h-14 w-[400px] max-w-full gap-2 rounded-full border-2 border-black bg-white p-1.5 pl-4 shadow-[-4px_4px_black] transition-all focus-within:shadow-[-0px_0px_black] sm:mt-8 md:h-16 lg:mt-12 lg:h-[72px] lg:w-[480px] lg:pl-6',
        errors.Email && 'animate-shake'
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register('Email')}
        data-1p-ignore
        className="flex-1 rounded-full bg-transparent pb-0.5 pl-5 font-sans text-lg text-black placeholder:text-black/50 focus:outline-none md:text-xl placeholder:md:text-xl lg:text-2xl placeholder:lg:text-2xl"
        placeholder="Email address"
      />
      {success && (
        <div
          className={clsx(
            'absolute inset-0 flex items-center rounded-full bg-white pl-16 animate-in fade-in md:text-xl lg:text-2xl'
          )}
        >
          Success!
        </div>
      )}
      <button
        type="submit"
        className={clsx(
          'absolute top-1/2 flex aspect-square h-11 -translate-y-1/2 items-center justify-center rounded-full bg-black transition-all ease-in-out md:h-12',
          success ? 'left-2' : 'left-full -ml-12 md:-ml-14'
        )}
        disabled={success}
      >
        <span className="sr-only">Subscribe</span>
        {!success && !loading && (
          <svg width="24" viewBox="0 0 24 24" className="animate-out fade-out">
            <path
              d="M18.4915 10.2857C18.946 10.2857 19.3722 10.3429 19.7699 10.4571C20.1676 10.5429 20.4233 10.6 20.5369 10.6286H20.6648C20.9205 10.6286 21.0767 10.5143 21.1335 10.2857V10.2429C21.1335 10.0429 20.9773 9.88571 20.6648 9.77143C20.5511 9.74286 20.2386 9.67143 19.7273 9.55714C19.2443 9.41428 18.8608 9.22857 18.5767 9L12.5682 4.11428V0L24.5 10.2857V13.7143L12.5682 24V19.8857L18.5767 15C18.8608 14.7714 19.2443 14.6 19.7273 14.4857C20.2386 14.3429 20.5511 14.2571 20.6648 14.2286C20.9773 14.1143 21.1335 13.9571 21.1335 13.7571C21.1335 13.6429 21.0767 13.5429 20.9631 13.4571C20.8494 13.3714 20.7074 13.3429 20.5369 13.3714C20.4233 13.4 20.1676 13.4714 19.7699 13.5857C19.3722 13.6714 18.946 13.7143 18.4915 13.7143H0.5V10.2857H18.4915Z"
              fill="white"
            />
          </svg>
        )}
        {success && !loading && (
          <svg width="24" viewBox="0 0 24 24" className="animate-in fade-in">
            <path
              d="M18.4915 10.2857C18.946 10.2857 19.3722 10.3429 19.7699 10.4571C20.1676 10.5429 20.4233 10.6 20.5369 10.6286H20.6648C20.9205 10.6286 21.0767 10.5143 21.1335 10.2857V10.2429C21.1335 10.0429 20.9773 9.88571 20.6648 9.77143C20.5511 9.74286 20.2386 9.67143 19.7273 9.55714C19.2443 9.41428 18.8608 9.22857 18.5767 9L12.5682 4.11428V0L24.5 10.2857V13.7143L12.5682 24V19.8857L18.5767 15C18.8608 14.7714 19.2443 14.6 19.7273 14.4857C20.2386 14.3429 20.5511 14.2571 20.6648 14.2286C20.9773 14.1143 21.1335 13.9571 21.1335 13.7571C21.1335 13.6429 21.0767 13.5429 20.9631 13.4571C20.8494 13.3714 20.7074 13.3429 20.5369 13.3714C20.4233 13.4 20.1676 13.4714 19.7699 13.5857C19.3722 13.6714 18.946 13.7143 18.4915 13.7143H0.5V10.2857H18.4915Z"
              fill="green"
            />
          </svg>
        )}
        {loading && (
          <svg width="24" viewBox="0 0 24 24" className="animate-in fade-in">
            <path
              d="M18.4915 10.2857C18.946 10.2857 19.3722 10.3429 19.7699 10.4571C20.1676 10.5429 20.4233 10.6 20.5369 10.6286H20.6648C20.9205 10.6286 21.0767 10.5143 21.1335 10.2857V10.2429C21.1335 10.0429 20.9773 9.88571 20.6648 9.77143C20.5511 9.74286 20.2386 9.67143 19.7273 9.55714C19.2443 9.41428 18.8608 9.22857 18.5767 9L12.5682 4.11428V0L24.5 10.2857V13.7143L12.5682 24V19.8857L18.5767 15C18.8608 14.7714 19.2443 14.6 19.7273 14.4857C20.2386 14.3429 20.5511 14.2571 20.6648 14.2286C20.9773 14.1143 21.1335 13.9571 21.1335 13.7571C21.1335 13.6429 21.0767 13.5429 20.9631 13.4571C20.8494 13.3714 20.7074 13.3429 20.5369 13.3714C20.4233 13.4 20.1676 13.4714 19.7699 13.5857C19.3722 13.6714 18.946 13.7143 18.4915 13.7143H0.5V10.2857H18.4915Z"
              fill="red"
            />
          </svg>
        )}
      </button>
      {(errors.Email || error) && (
        <div className="absolute left-1/2 top-full mt-4 -translate-x-1/2 space-y-1 p-1 text-center text-base md:text-lg">
          {errors.Email && <div>{errors.Email.message}</div>}
          {error && <div>There was a server error</div>}
        </div>
      )}
    </form>
  )
}
