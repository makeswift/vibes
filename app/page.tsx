import Transition from '@/components/ui/transition'
import { Vibes } from '@/icons/generated'

import { Form } from './form'
import { EazyTheme } from './stickers/eazy-theme'
import { HandcraftedCode } from './stickers/handcrafted-code'
import { KeepIt100 } from './stickers/keep-it-100'
import { LikeTotally } from './stickers/like-totally'
import { MadProps } from './stickers/mad-props'
import { OpenSource } from './stickers/open-source'
import { PrebuiltSections } from './stickers/prebuilt-sections'
import { ProductionReady } from './stickers/production-ready'
import { Reactjs } from './stickers/reactjs'
import { Typescript } from './stickers/typescript'

export default function Home() {
  return (
    <div className="h-dvh w-full bg-white p-3 md:p-4 lg:p-5">
      <main className="relative z-0 h-full w-full select-none place-content-start overflow-hidden rounded-3xl border border-black bg-gradient-to-b from-[#FFDEB6] to-[#FFB5CE] p-5 pt-6 after:absolute after:inset-0 after:-z-10 after:animate-[dotScrollSmall_500ms_linear_infinite] after:[background-image:radial-gradient(#FFB3CD_25%,transparent_25%),radial-gradient(#FFB3CD_25%,transparent_25%)] after:[background-position:-0px_-0px,-6px_-6px] after:[background-size:12px_12px] sm:place-content-center md:rounded-[32px] md:p-8 lg:rounded-[40px] lg:p-10 lg:after:animate-[dotScrollLarge_400ms_linear_infinite] lg:after:[background-position:-0px_-0px,-8px_-8px] lg:after:[background-size:16px_16px] xl:rounded-[64px]">
        <div className="relative mx-auto flex max-w-lg translate-y-0 flex-col items-center px-0 py-0 sm:-translate-y-28 md:max-w-xl md:justify-center md:px-8 lg:max-w-2xl xl:max-w-3xl xl:py-10 2xl:max-w-4xl">
          <h1 className="mb-2 font-docs-heading text-4xl text-black sm:mb-4 sm:text-5xl md:mb-5 lg:text-6xl xl:text-7xl">
            {Array.from('Bring the').map((letter, index) =>
              letter === ' ' ? (
                ' '
              ) : (
                <Transition
                  key={index}
                  className="inline-block transition-all duration-500"
                  style={{
                    transitionDelay: `${100 + index * 30}ms`,
                    transitionTimingFunction: 'cubic-bezier(0,1,0.25,1.5)',
                  }}
                  from="translate-y-14 opacity-0"
                  to="translate-y-0 opacity-100"
                >
                  {letter}
                </Transition>
              )
            )}
            <span className="sr-only"> Vibes</span>
          </h1>

          <Transition
            className="transition-all duration-700 [transition-delay:500ms] [transition-timing-function:cubic-bezier(.5,0,0,1.5)]"
            from="translate-y-20 -translate-x-20 opacity-0 scale-.8"
            to="translate-y-0 opacity-100 translate-x-0 scale-1"
          >
            <Vibes className="mx-auto w-2/3 max-w-xl md:w-3/5 lg:w-[540px]" />
          </Transition>

          <Transition
            className="transition-all duration-700 [transition-delay:1200ms] [transition-timing-function:cubic-bezier(.5,0,.25,1)]"
            from="translate-y-16 opacity-0"
            to="translate-y-0 opacity-100"
          >
            <p className="mt-4 max-w-4xl text-center font-docs-sans text-xl !leading-normal text-black sm:mt-6 md:text-2xl md:!leading-snug lg:mt-8 lg:text-3xl">
              A library of stunning React components optimized for fashion{' '}
              <span className="font-semibold">and</span> function, coming August 2024.
            </p>
          </Transition>

          <Transition
            className="relative z-50 w-full transition-all duration-700 [transition-timing-function:cubic-bezier(.5,0,.25,1)] [transition-delay:1350ms] sm:w-auto"
            from="translate-y-16 opacity-0"
            to="translate-y-0 opacity-100"
          >
            <Form />
          </Transition>

          <OpenSource />

          <KeepIt100 />

          <MadProps />

          <EazyTheme />

          <PrebuiltSections />

          <LikeTotally />

          <HandcraftedCode />

          <Reactjs />

          <ProductionReady />

          <Typescript />
        </div>
      </main>
    </div>
  )
}
