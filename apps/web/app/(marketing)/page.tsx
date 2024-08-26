'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'

import clsx from 'clsx'

import { Button } from '@/components/ui/button'
import { ButtonLink } from '@/components/ui/button-link'
import Transition from '@/components/ui/transition'
import { Arrow } from '@/icons/generated'

import { EazyTheme } from '../stickers/eazy-theme'
import { HandcraftedCode } from '../stickers/handcrafted-code'
import { KeepIt100 } from '../stickers/keep-it-100'
import { LikeTotally } from '../stickers/like-totally'
import { MadProps } from '../stickers/mad-props'
import { OpenSource } from '../stickers/open-source'
import { PrebuiltSections } from '../stickers/prebuilt-sections'
import { ProductionReady } from '../stickers/production-ready'
import { Reactjs } from '../stickers/reactjs'
import { ShoppingBag } from '../stickers/shopping-bag'
import { Typescript } from '../stickers/typescript'
import { Form } from './form'

const useSmoothScroll = () => {
  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return smoothScrollTo
}

const ScrollButton: React.FC<{ to: string; children: React.ReactNode; className?: string }> = ({
  to,
  children,
  className,
}) => {
  const smoothScrollTo = useSmoothScroll()

  const handleClick = () => {
    smoothScrollTo(to)
  }

  return (
    <div onClick={handleClick} className={clsx('cursor-pointer', className)}>
      {children}
    </div>
  )
}

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
      'min-h-auto relative flex w-full flex-col place-content-center items-center gap-y-5 rounded-3xl border-[1.5px] border-black bg-[#FFFAE0] md:min-h-72 md:flex-row'
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
    <p className="w-full px-5 pb-6 text-2xl leading-snug sm:px-8 md:w-auto md:px-10 md:py-10 md:text-3xl lg:px-12">
      {text}
    </p>
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

  return (
    <div className="w-full overflow-clip bg-white text-black">
      <header
        className={clsx(
          'fixed left-0 top-0 z-50 hidden w-full items-center justify-center transition-all duration-300 sm:flex sm:justify-between',
          isScrolled ? 'translate-y-3 px-7' : 'translate-y-8 px-10 md:translate-y-10'
        )}
      >
        <ScrollButton to="footer">
          <Button size="large">Get updates</Button>
        </ScrollButton>
        <div
          className={clsx(
            'relative h-8 w-32 origin-center transition-transform duration-300 md:h-10 md:w-40',
            isScrolled && 'scale-90 md:scale-[0.8]'
          )}
        >
          <Image src="/logo.svg" fill alt="Vibes logo" priority />
        </div>
        <ButtonLink href="/contribute" size="large">
          Contribute
        </ButtonLink>
      </header>

      <section className="relative h-[550px] w-full bg-white p-3 sm:h-[650px] sm:p-4 md:h-[calc(100vh-28px)] lg:p-5">
        <ScrollButton
          to="intro"
          className="group absolute left-1/2 top-full z-20 -mt-6 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black md:flex"
        >
          <Arrow className="rotate-90 scale-125 transition-transform duration-300 ease-out group-hover:translate-y-2" />
        </ScrollButton>

        <Image
          src="/hero-arrow-bg.svg"
          width={200}
          height={114}
          alt="Arrow button container"
          priority
          className="absolute left-1/2 top-full z-10 hidden -translate-x-1/2 -translate-y-[74px] md:flex lg:-translate-y-[78px]"
        />

        <div className="relative z-0 h-full w-full select-none place-content-start overflow-hidden rounded-3xl border-[1.5px] border-black bg-gradient-to-b from-[#FFDEB6] to-[#FFB5CE] p-5 pt-24 after:absolute after:inset-0 after:-z-10 after:animate-[dotScrollSmall_500ms_linear_infinite] after:[background-image:radial-gradient(#FFB3CD_25%,transparent_25%),radial-gradient(#FFB3CD_25%,transparent_25%)] after:[background-position:-0px_-0px,-6px_-6px] after:[background-size:12px_12px] sm:place-content-center sm:pt-10 md:p-8 lg:place-content-center lg:rounded-[32px] lg:p-10 lg:after:animate-[dotScrollLarge_400ms_linear_infinite] lg:after:[background-position:-0px_-0px,-8px_-8px] lg:after:[background-size:16px_16px] xl:rounded-[40px]">
          <Image
            src="/logo.svg"
            width={120}
            height={32}
            alt="Vibes logo"
            priority
            className="absolute left-5 top-6 z-50 sm:hidden"
          />

          <h1 className="mx-auto max-w-full font-heading text-[clamp(2.75rem,_9vw,_3.5rem)] leading-none tracking-tight text-black sm:text-6xl md:mb-5 md:mt-0 md:max-w-2xl md:text-7xl lg:max-w-3xl lg:text-8xl xl:max-w-5xl xl:text-9xl">
            <div className="text-left md:ml-10">
              <span className="md:relative">
                <Transition
                  className="w-auto transition-all duration-700 [transition-delay:100ms] [transition-timing-function:cubic-bezier(.5,0,.25,1)]"
                  from="translate-y-28 opacity-0"
                  to="translate-y-0 opacity-100"
                >
                  A modern{' '}
                </Transition>
                <HandcraftedCode />
              </span>
            </div>

            <div className="text-left md:text-right">
              <span className="md:relative">
                <Transition
                  className="transition-all duration-700 [transition-timing-function:cubic-bezier(.5,0,.25,1)] [transition-delay:150ms]"
                  from="translate-y-28 opacity-0"
                  to="translate-y-0 opacity-100"
                >
                  UI library for{' '}
                </Transition>
              </span>
            </div>

            <div className="text-left md:text-center">
              <span className="md:relative">
                <Transition
                  className="transition-all duration-700 [transition-timing-function:cubic-bezier(.5,0,.25,1)] [transition-delay:200ms]"
                  from="translate-y-28 opacity-0"
                  to="translate-y-0 opacity-100"
                >
                  composable{' '}
                </Transition>
                <Reactjs />
              </span>
            </div>

            <div className="text-left">
              <span className="md:relative">
                <Transition
                  className="transition-all duration-700 [transition-timing-function:cubic-bezier(.5,0,.25,1)] [transition-delay:250ms]"
                  from="translate-y-28 opacity-0"
                  to="translate-y-0 opacity-100"
                >
                  websites{' '}
                </Transition>
                <ShoppingBag />
              </span>
            </div>
          </h1>

          <Transition
            className="transition-all duration-700 [transition-timing-function:cubic-bezier(.5,0,.25,1)] [transition-delay:300ms]"
            from="translate-y-28 opacity-0"
            to="translate-y-0 opacity-100"
          >
            <div className="mb-4 mt-6 flex items-center gap-1.5 sm:hidden">
              <ScrollButton to="footer">
                <Button size="large">Get updates</Button>
              </ScrollButton>

              <ButtonLink href="/contribute" size="large">
                Contribute
              </ButtonLink>
            </div>
          </Transition>
        </div>
      </section>

      <section className="h-auto px-5 pb-8 md:mb-8 md:h-[60vh] md:place-content-end md:p-10 lg:mb-20">
        <div
          id="intro"
          className="mx-auto max-w-[1200px] pt-12 text-3xl leading-snug tracking-tight md:pt-40 md:text-4xl md:leading-tight lg:text-5xl xl:text-6xl"
        >
          <Transition
            className="transition-all duration-700 [transition-timing-function:cubic-bezier(.5,0,.25,1)] [transition-delay:200ms]"
            from="translate-y-28 opacity-0"
            to="translate-y-0 opacity-100"
          >
            <p>
              <span className="font-bold">VIBES</span> is an open-source theming engine for
              composable marketing and commerce sites.
            </p>
          </Transition>
          <Transition
            className="transition-all duration-700 [transition-timing-function:cubic-bezier(.5,0,.25,1)] [transition-delay:250ms]"
            from="translate-y-28 opacity-0"
            to="translate-y-0 opacity-100"
          >
            <p>
              A <span className="font-bold">VIBE</span> is a theme that includes a set of React UI
              components and styles.
            </p>
          </Transition>
        </div>
      </section>

      <section className="h-[90vh] w-full bg-white p-3 md:h-[90vh] md:p-4 lg:p-5">
        <div className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border-[1.5px] border-black md:flex-row lg:rounded-[32px] xl:rounded-[40px]">
          <div className="relative h-1/3 w-full origin-left overflow-hidden bg-[#07090D] transition-all duration-300 ease-out will-change-[width] md:h-full md:w-1/3 md:hover:!w-1/2 md:group-hover:w-1/4">
            <div className="relative h-full w-full">
              <Image
                src="/eclipse-components.webp"
                alt="Eclipse components"
                fill
                className="rotate-12 overflow-visible object-none object-top"
              />
            </div>
          </div>

          <div className="relative h-1/3 w-full origin-center overflow-hidden border-y-[1.5px] border-black bg-[#FFD977] transition-all duration-300 ease-out will-change-[width] md:h-full md:w-1/3 md:border-x-[1.5px] md:border-y-0 md:hover:!w-1/2 md:group-hover:w-1/4">
            <div className="relative h-full w-full">
              <Image
                src="/2px-components.webp"
                alt="2px components"
                fill
                className="rotate-12 overflow-visible object-none object-top"
              />
            </div>
          </div>

          <div className="relative h-1/3 w-full origin-right overflow-hidden bg-[#eeeeee] transition-all duration-300 ease-out will-change-[width] md:h-full md:w-1/3 md:hover:!w-1/2 md:group-hover:w-1/4">
            <div className="relative h-full w-full">
              <Image
                src="/soul-components.webp"
                alt="Soul components"
                fill
                className="rotate-12 overflow-visible object-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1600px] flex-col items-start gap-x-16 gap-y-16 px-3 pb-4 pt-20 md:px-6 md:pb-32 md:pt-48 lg:flex-row xl:gap-x-24 xl:px-14">
        <div className="top-32 flex-1 lg:sticky">
          <h2 className="mb-3 font-heading text-3xl leading-none sm:text-4xl md:text-5xl lg:mb-5">
            The future of theming is here
          </h2>
          <p className="text-2xl md:text-3xl">
            <span className="font-bold">VIBES</span> are production ready and focus on advanced
            optimizations needed for marketing and commerce websites. Here&lsquo;s what you get with
            each <span className="font-bold">VIBE</span>:
          </p>
        </div>

        <div className="w-full space-y-7 lg:max-w-2xl lg:space-y-20 xl:max-w-3xl 2xl:max-w-4xl">
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

      <footer id="footer" className="w-full bg-white p-3 md:p-4 lg:p-5">
        <div className="relative z-0 h-full w-full overflow-hidden rounded-3xl border-[1.5px] border-black bg-gradient-to-b from-[#FFB5CE] to-[#E8C3FF] after:absolute after:inset-0 after:-z-10 after:animate-[dotScrollSmall_500ms_linear_infinite] after:[background-image:radial-gradient(#FFB3CD_25%,transparent_25%),radial-gradient(#FFB3CD_25%,transparent_25%)] after:[background-position:-0px_-0px,-6px_-6px] after:[background-size:12px_12px] sm:place-content-center lg:rounded-[32px] lg:after:animate-[dotScrollLarge_400ms_linear_infinite] lg:after:[background-position:-0px_-0px,-8px_-8px] lg:after:[background-size:16px_16px] xl:rounded-[40px]">
          <div className="mx-auto flex max-w-4xl flex-col items-center px-4 pb-6 pt-10 text-left sm:px-8 sm:text-center md:pb-10 md:pt-20">
            <p className="mb-8 text-balance px-2 text-2xl leading-snug text-black sm:text-3xl md:mb-12 lg:text-4xl">
              Stunning React components for commerce and marketing, optimized for fashion and
              function.
              <span className="mt-4 block font-bold md:mt-6">Coming October 2024.</span>
            </p>

            <div className="relative z-10 w-full sm:w-auto">
              <Form />
            </div>

            <p className="mt-14 w-full px-2 text-lg leading-normal md:mt-24">
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
