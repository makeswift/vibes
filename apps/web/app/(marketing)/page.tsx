'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useEffect, useRef, useState } from 'react'

import clsx from 'clsx'

import { Button } from '@/components/ui/button'
import { ButtonLink } from '@/components/ui/button-link'
import Transition from '@/components/ui/transition'
import { Vibes } from '@/icons/generated'

import { EazyTheme } from '../stickers/eazy-theme'
import { HandcraftedCode } from '../stickers/handcrafted-code'
import { KeepIt100 } from '../stickers/keep-it-100'
import { LikeTotally } from '../stickers/like-totally'
import { MadProps } from '../stickers/mad-props'
import { OpenSource } from '../stickers/open-source'
import { PrebuiltSections } from '../stickers/prebuilt-sections'
import { ProductionReady } from '../stickers/production-ready'
import { Reactjs } from '../stickers/reactjs'
import { Typescript } from '../stickers/typescript'
import { Form } from './form'

const FeatureCard = ({
  children,
  text,
  sticker,
}: {
  children?: ReactNode
  text?: string
  sticker: 'left' | 'right'
}) => (
  <div
    className={clsx(
      'min-h-auto relative flex w-full flex-col place-content-center gap-y-5 rounded-3xl border-[1.5px] border-foreground bg-[#FFFAE0] px-5 pb-6 md:min-h-72 md:flex-row md:px-12 md:pb-12 md:pt-10'
    )}
  >
    <div
      className={clsx(
        'relative flex w-full justify-center md:w-96',
        { left: 'md:order-first', right: 'md:order-last' }[sticker]
      )}
    >
      {children}
    </div>
    <p className="text-xl leading-snug sm:text-2xl">{text}</p>
  </div>
)

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollAmount = 10
      if (window.scrollY > scrollAmount) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const targetRef = useRef<HTMLDivElement | null>(null)

  // Function to handle button click
  const handleScroll = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full overflow-hidden">
      <header
        className={clsx(
          'fixed left-0 top-0 z-50 flex w-full items-center justify-center transition-all duration-300 md:justify-between',
          isScrolled ? 'translate-y-3 px-7' : 'translate-y-8 px-10 md:translate-y-10'
        )}
      >
        <Button onClick={handleScroll} className="hidden md:inline-block">
          Get updates
        </Button>
        <div
          className={clsx(
            'relative h-8 w-32 origin-center transition-transform duration-300 md:h-10 md:w-40',
            isScrolled && 'scale-90 md:scale-75'
          )}
        >
          <Image src="/logo.svg" fill alt="Vibes logo" priority />
        </div>
        <ButtonLink href="#contribute" className="hidden md:inline-block">
          Contribute
        </ButtonLink>
      </header>

      <section className="h-[80vh] w-full bg-white p-3 sm:p-4 md:h-dvh lg:p-5">
        <div className="relative z-0 h-full w-full select-none place-content-center overflow-hidden rounded-2xl border border-foreground bg-gradient-to-b from-[#FFDEB6] to-[#FFB5CE] p-5 pt-6 after:absolute after:inset-0 after:-z-10 after:animate-[dotScrollSmall_500ms_linear_infinite] after:[background-image:radial-gradient(#FFB3CD_25%,transparent_25%),radial-gradient(#FFB3CD_25%,transparent_25%)] after:[background-position:-0px_-0px,-6px_-6px] after:[background-size:12px_12px] sm:place-content-center md:rounded-3xl md:p-8 lg:rounded-[32px] lg:p-10 lg:after:animate-[dotScrollLarge_400ms_linear_infinite] lg:after:[background-position:-0px_-0px,-8px_-8px] lg:after:[background-size:16px_16px] xl:rounded-[40px]">
          <h1 className="mx-auto max-w-5xl font-heading text-[44px] leading-none tracking-tight text-foreground sm:text-5xl md:mb-5 lg:text-7xl xl:text-9xl">
            {/* <Transition
              className="transition-all duration-700 [transition-delay:1200ms] [transition-timing-function:cubic-bezier(.5,0,.25,1)]"
              from="translate-y-16 opacity-0"
              to="translate-y-0 opacity-100"
            > */}
            <div className="text-left">
              <span className="relative">
                A modern <HandcraftedCode />
              </span>
            </div>
            <div className="text-left sm:text-right">
              <span className="relative">
                UI library for <Reactjs />
              </span>
            </div>
            <div className="text-left sm:text-center">
              <span className="relative">composable</span>
            </div>
            <div className="text-left">
              <span className="relative">websites</span>
            </div>
            {/* </Transition> */}
          </h1>

          <div className="mt-7 flex items-center gap-1.5 md:hidden">
            <Button onClick={handleScroll} size="large">
              Get updates
            </Button>
            <ButtonLink href="#contribute" size="large">
              Contribute
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="h-auto px-5 pb-8 pt-16 md:mb-20 md:h-[60vh] md:place-content-end md:p-10">
        <div className="mx-auto max-w-[1200px] text-3xl leading-snug tracking-tight md:text-4xl md:leading-tight lg:text-5xl xl:text-6xl">
          <p>
            <span className="font-bold">VIBES</span> is an open-source theming engine for composable
            marketing and commerce sites.
          </p>
          <p>
            A <span className="font-bold">VIBE</span> is a theme that includes a set of React UI
            components and styles.
          </p>
        </div>
      </section>

      <section className="h-[90vh] w-full bg-white p-3 md:h-[90vh] md:p-4 lg:p-5">
        <div className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border-[1.5px] border-foreground md:flex-row md:rounded-3xl lg:rounded-[32px] xl:rounded-[40px]">
          <div className="relative h-1/3 w-full origin-left overflow-hidden bg-[#07090D] transition-all duration-300 ease-out will-change-[width] md:h-full md:w-1/3 md:hover:!w-1/2 md:group-hover:w-1/4">
            <div className="relative h-full w-full">
              <Image
                src="/eclipse-components.webp"
                alt="Eclipse components"
                fill
                className="rotate-12 overflow-visible object-cover"
              />
            </div>
          </div>

          <div className="relative h-1/3 w-full origin-center overflow-hidden border-y-[1.5px] border-foreground bg-[#FFD977] transition-all duration-300 ease-out will-change-[width] md:h-full md:w-1/3 md:border-x-[1.5px] md:hover:!w-1/2 md:group-hover:w-1/4">
            <div className="relative h-full w-full">
              <Image
                src="/2px-components.webp"
                alt="2px components"
                fill
                className="rotate-12 overflow-visible object-cover"
              />
            </div>
          </div>

          <div className="relative h-1/3 w-full origin-right overflow-hidden bg-[#eeeeee] transition-all duration-300 ease-out will-change-[width] md:h-full md:w-1/3 md:hover:!w-1/2 md:group-hover:w-1/4">
            <div className="relative h-full w-full">
              <Image
                src="/soul-components.webp"
                alt="Soul components"
                fill
                className="rotate-12 overflow-visible object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1600px] flex-col items-start gap-20 px-3 pb-4 pt-20 md:px-6 md:pb-32 md:pt-48 lg:flex-row lg:px-14">
        <div className="sticky top-40 flex-1">
          <h2 className="mb-3 font-heading text-3xl leading-none md:text-4xl lg:mb-5 lg:text-5xl xl:text-6xl">
            This is a header about features
          </h2>
          <p className="text-2xl md:text-3xl">
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
            Aenean dig nissim pellen.
          </p>
        </div>

        <div className="w-full space-y-7 lg:w-[740px] lg:space-y-20">
          <FeatureCard
            sticker="left"
            text="Multiple styles that can be customized to best represent your brand."
          >
            <EazyTheme />
          </FeatureCard>

          <FeatureCard
            sticker="right"
            text="Fast performance without sacrificing form and function."
          >
            <KeepIt100 />
          </FeatureCard>

          <FeatureCard
            sticker="left"
            text="Prebuilt section and page templates to get you started quickly."
          >
            <PrebuiltSections />
          </FeatureCard>

          <FeatureCard
            sticker="right"
            text="Pre-configured props to make components CMS ready and secure."
          >
            <MadProps />
          </FeatureCard>

          <FeatureCard
            sticker="left"
            text="Clean, production-ready code you can deploy with no worries."
          >
            <ProductionReady />
          </FeatureCard>

          <FeatureCard
            sticker="right"
            text="Built with and optimized for accessibility from the beginning."
          >
            <LikeTotally />
          </FeatureCard>

          <FeatureCard sticker="left" text="Open source and always free for all users.">
            <OpenSource />
          </FeatureCard>

          <FeatureCard
            sticker="right"
            text="Smoother and safer development with TypeScript support out of the box."
          >
            <Typescript />
          </FeatureCard>
        </div>
      </section>

      <footer ref={targetRef} className="w-full bg-white p-3 md:p-4 lg:p-5">
        <div className="relative z-0 h-full w-full overflow-hidden rounded-2xl border-[1.5px] border-foreground bg-gradient-to-b from-[#FFB5CE] to-[#E8C3FF] after:absolute after:inset-0 after:-z-10 after:animate-[dotScrollSmall_500ms_linear_infinite] after:[background-image:radial-gradient(#FFB3CD_25%,transparent_25%),radial-gradient(#FFB3CD_25%,transparent_25%)] after:[background-position:-0px_-0px,-6px_-6px] after:[background-size:12px_12px] sm:place-content-center md:rounded-3xl lg:rounded-[32px] lg:after:animate-[dotScrollLarge_400ms_linear_infinite] lg:after:[background-position:-0px_-0px,-8px_-8px] lg:after:[background-size:16px_16px] xl:rounded-[40px]">
          <div className="mx-auto flex max-w-4xl flex-col items-center px-5 pb-64 pt-10 text-center md:pt-20">
            <p className="mb-8 text-2xl leading-normal text-foreground sm:text-3xl md:mb-12 lg:text-4xl">
              Stunning React components for commerce and marketing, optimized for fashion and
              function.
              <span className="block font-bold">Coming October 2024.</span>
            </p>

            <Transition
              className="w-full transition-all duration-700 [transition-delay:300ms] [transition-timing-function:cubic-bezier(.5,0,.25,1)] sm:w-auto"
              from="translate-y-16 opacity-0"
              to="translate-y-0 opacity-100"
            >
              <Form />
            </Transition>

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
      </footer>
    </div>
  )
}
