import Image from 'next/image'

import { SubmissionResult } from '@conform-to/react'
import { clsx } from 'clsx'

import { InlineEmailForm } from '@/vibes/soul/primitives/inline-email-form'

type Action<State, Payload> = (state: Awaited<State>, payload: Payload) => State | Promise<State>

export function Subscribe({
  action,
  image,
  title,
  description,
}: {
  action: Action<SubmissionResult | null, FormData>
  image?: { src: string; alt: string }
  title: string
  description: string
}) {
  return (
    <section className="bg-primary-shadow @container">
      <div className="flex flex-col items-start @3xl:flex-row @3xl:items-stretch">
        {image && (
          <div className="relative min-h-96 w-full bg-primary/10 @3xl:flex-1">
            <Image
              src={image.src}
              alt={image.alt}
              sizes="(max-width: 680px) 100vw, 50vw"
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="flex-1">
          <div
            className={clsx(
              'flex w-full flex-col gap-10 p-6 @3xl:gap-16 @3xl:p-20',
              image != null
                ? '@3xl:max-w-3xl'
                : 'mx-auto max-w-screen-2xl @3xl:flex-row @3xl:items-center'
            )}
          >
            <div className="flex-1">
              <h2 className="mb-4 font-heading text-4xl font-medium leading-none text-primary-highlight">
                {title}
              </h2>
              <p className="text-primary-highlight opacity-75">{description}</p>
            </div>
            <InlineEmailForm className="flex-1" action={action} />
          </div>
        </div>
      </div>
    </section>
  )
}
