'use client'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import { ButtonLink } from '@/components/ui/button-link'

import { Form } from '../form'

export default function Contribute() {
  return (
    <div className="w-full overflow-hidden">
      <header className="fixed left-0 top-0 z-50 hidden w-full translate-y-8 items-center justify-center px-10 transition-all duration-300 sm:flex sm:justify-between md:translate-y-10">
        <ButtonLink size="large" href="/#footer">
          Get updates
        </ButtonLink>
        <div className="relative h-8 w-32 origin-center transition-transform duration-300 md:h-10 md:w-40">
          <Image src="/logo.svg" fill alt="Vibes logo" priority />
        </div>
        <ButtonLink href="/contribute" size="large">
          Contribute
        </ButtonLink>
      </header>

      <section className="relative w-full bg-white p-3 sm:p-4 md:h-dvh lg:p-5">
        <div className="relative z-0 h-full w-full select-none place-content-center overflow-hidden rounded-3xl border-[1.5px] border-foreground bg-gradient-to-b from-[#FFDEB6] to-[#FFB5CE] p-5 pt-6 after:absolute after:inset-0 after:-z-10 after:animate-[dotScrollSmall_500ms_linear_infinite] after:[background-image:radial-gradient(#FFB3CD_25%,transparent_25%),radial-gradient(#FFB3CD_25%,transparent_25%)] after:[background-position:-0px_-0px,-6px_-6px] after:[background-size:12px_12px] sm:place-content-center md:p-8 lg:rounded-[32px] lg:p-10 lg:after:animate-[dotScrollLarge_400ms_linear_infinite] lg:after:[background-position:-0px_-0px,-8px_-8px] lg:after:[background-size:16px_16px] xl:rounded-[40px]">
          <Image
            src="/logo.svg"
            width={120}
            height={32}
            alt="Vibes logo"
            priority
            className="absolute left-5 top-6 z-50 sm:hidden"
          />

          <div className="mx-auto flex max-w-4xl flex-col items-center px-4 pb-64 pt-10 text-center md:pt-20">
            <h1 className="mb-3 font-heading text-4xl leading-none md:text-5xl lg:mb-5 lg:text-6xl">
              Contribute to VIBES
            </h1>

            <p className="mb-8 text-2xl leading-snug text-foreground sm:text-3xl md:mb-12 lg:text-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, accusantium
              inventore iure possimus nisi expedita tenetur soluta perspiciatis alias.
            </p>

            <div className="relative z-10 w-full sm:w-auto">
              <Form />
            </div>

            <p className="mt-14 text-lg leading-normal md:mt-24">
              Made by{' '}
              <Link href="https://www.makeswift.com" target="_blank" className="font-bold">
                Makeswift
              </Link>
              . View source code in{' '}
              <Link href="https://github.com/makeswift/vibes" target="_blank" className="font-bold">
                GitHub
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
