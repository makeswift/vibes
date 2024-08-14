'use client'

import { useState } from 'react'

import Button from '@/vibes/2px/components/button'
import { CheckIcon } from '@/vibes/2px/components/icons/CheckIcon'
import Input from '@/vibes/2px/components/input'

interface Props {
  action: (formData: FormData) => void
  title: string
  description?: string
  successMessage?: string
  errorMessage?: string
}

export default function Newsletter({
  title,
  action,
  description,
  errorMessage,
  successMessage,
}: Props) {
  const [status, setStatus] = useState<'success' | 'error' | 'idle' | 'loading'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setStatus('loading')

    const formData = new FormData(e.currentTarget)

    try {
      await action(formData)
      setStatus('success')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section className="relative w-full bg-accent p-4 @container">
      <form
        className="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 @2xl:flex-row"
        onSubmit={handleSubmit}
      >
        <div className="flex min-h-[30rem] shrink-0 basis-1/2 flex-col justify-center">
          <h2 className="mb-6 text-3xl font-medium leading-[2.125rem] -tracking-[0.02em] @2xl:text-6xl @2xl:leading-[4rem]">
            {title}
          </h2>
          <Input
            className="w-full bg-accent"
            placeholder="Email"
            variant={status === 'error' ? 'error' : status === 'success' ? 'success' : 'default'}
            errorMessage={status === 'error' ? errorMessage : undefined}
            required
            name="email"
          />
        </div>

        <Button
          className="w-full flex-1 rounded-[2.5rem] @2xl:aspect-square @2xl:h-auto"
          loading={status === 'loading'}
        >
          Sign up
        </Button>
      </form>

      {status === 'success' && (
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-6 bg-accent">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-foreground">
            <CheckIcon width={40} height={40} strokeWidth={1} />
          </div>
          <p className="max-w-3xl text-center text-3xl font-medium leading-[2.125rem] -tracking-[0.02em] @2xl:text-6xl @2xl:leading-[4rem]">
            {successMessage}
          </p>
        </div>
      )}
    </section>
  )
}
