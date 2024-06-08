'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import {
  FigmaBack,
  FigmaFront,
  FigmaShadow,
  HandcraftedCodeBack,
  HandcraftedCodeFront,
  HandcraftedCodeShadow,
  KeepIt100Back,
  KeepIt100Front,
  KeepIt100Shadow,
  OpenSourceBack,
  OpenSourceFront,
  OpenSourceShadow,
  PrebuiltSectionsBack,
  PrebuiltSectionsFront,
  PrebuiltSectionsShadow,
  ProductionReadyBack,
  ProductionReadyFront,
  ProductionReadyShadow,
  PropsBack,
  PropsFront,
  PropsShadow,
  ReactjsBack,
  ReactjsFront,
  ReactjsShadow,
  ThemesBack,
  ThemesFront,
  ThemesShadow,
  TotallyBack,
  TotallyFront,
  TotallyShadow,
  TypescriptBack,
  TypescriptFront,
  TypescriptShadow,
  Vibes,
} from '@/icons/generated'

import { Form } from './form'

export default function Home() {
  return (
    <div className="h-screen w-full bg-white p-3 md:p-4 lg:p-5">
      <main className="relative z-0 h-full w-full place-content-start overflow-hidden rounded-3xl border border-black bg-gradient-to-b from-[#FFDEB6] to-[#FFB5CE] p-5 pt-8 after:absolute after:inset-0 after:-z-10 after:animate-[dotScrollSmall_500ms_linear_infinite] after:[background-image:radial-gradient(#FFB3CD_25%,transparent_25%),radial-gradient(#FFB3CD_25%,transparent_25%)] after:[background-position:-0px_-0px,-6px_-6px] after:[background-size:12px_12px] sm:place-content-center md:rounded-[32px] md:p-8 lg:rounded-[40px] lg:p-10 lg:after:animate-[dotScrollLarge_400ms_linear_infinite] lg:after:[background-position:-0px_-0px,-8px_-8px] lg:after:[background-size:16px_16px] xl:rounded-[64px]">
        <div className="relative mx-auto flex max-w-lg translate-y-0 flex-col items-center px-0 py-0 sm:-translate-y-28 md:max-w-xl md:justify-center md:px-8 lg:max-w-2xl xl:max-w-3xl xl:py-10 2xl:max-w-4xl">
          <h1 className="mb-2 font-docs-heading text-4xl text-black sm:mb-4 sm:text-5xl md:mb-5 md:text-6xl xl:text-7xl">
            <Transition
              className="inline-block transition-all duration-500 [transition-delay:100ms] [transition-timing-function:cubic-bezier(0,1,0.25,1.5)]"
              from="translate-y-14 opacity-0"
              to="translate-y-0 opacity-100"
            >
              B
            </Transition>
            <Transition
              className="inline-block transition-all duration-500 [transition-timing-function:cubic-bezier(0,1,0.25,1.5)] [transition-delay:130ms]"
              from="translate-y-14 opacity-0"
              to="translate-y-0 opacity-100"
            >
              r
            </Transition>
            <Transition
              className="inline-block transition-all duration-500 [transition-timing-function:cubic-bezier(0,1,0.25,1.5)] [transition-delay:160ms]"
              from="translate-y-14 opacity-0"
              to="translate-y-0 opacity-100"
            >
              i
            </Transition>
            <Transition
              className="inline-block transition-all duration-500 [transition-timing-function:cubic-bezier(0,1,0.25,1.5)] [transition-delay:190ms]"
              from="translate-y-14 opacity-0"
              to="translate-y-0 opacity-100"
            >
              n
            </Transition>
            <Transition
              className="inline-block transition-all duration-500 [transition-timing-function:cubic-bezier(0,1,0.25,1.5)] [transition-delay:210ms]"
              from="translate-y-14 opacity-0"
              to="translate-y-0 opacity-100"
            >
              g
            </Transition>{' '}
            <Transition
              className="inline-block transition-all duration-500 [transition-timing-function:cubic-bezier(0,1,0.25,1.5)] [transition-delay:240ms]"
              from="translate-y-14 opacity-0"
              to="translate-y-0 opacity-100"
            >
              t
            </Transition>
            <Transition
              className="inline-block transition-all duration-500 [transition-timing-function:cubic-bezier(0,1,0.25,1.5)] [transition-delay:270ms]"
              from="translate-y-14 opacity-0"
              to="translate-y-0 opacity-100"
            >
              h
            </Transition>
            <Transition
              className="inline-block transition-all duration-500 [transition-timing-function:cubic-bezier(0,1,0.25,1.5)] [transition-delay:300ms]"
              from="translate-y-14 opacity-0"
              to="translate-y-0 opacity-100"
            >
              e
            </Transition>
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
              Make your website a vibe. Mix and match between sets of production-ready React
              components, handcrafted to perfection. Coming August 2024.
            </p>
          </Transition>

          <Transition
            className="relative z-50 w-full transition-all duration-700 [transition-timing-function:cubic-bezier(.5,0,.25,1)] [transition-delay:1350ms] sm:w-auto"
            from="translate-y-16 opacity-0"
            to="translate-y-0 opacity-100"
          >
            <Form />
          </Transition>

          {/* <div className="absolute left-[8%] top-[115%]">
            <Draggable>
              {({ active }) => (
                <Transition
                  className="delay-[4000ms] transition-transform duration-1000"
                  from="translate-x-[-400px] translate-y-[700px] rotate-[-20deg]"
                  to="translate-x-0 translate-y-0 -rotate-12"
                >
                  <Sticker
                    active={active}
                    peelAngle={0}
                    width={168}
                    height={268}
                    front={<FigmaFront />}
                    back={<FigmaBack />}
                    shadow={<FigmaShadow />}
                  />
                </Transition>
              )}
            </Draggable>
          </div> */}

          <div className="pointer-events-none absolute left-[-38%] top-[88%] sm:left-[-40%] sm:top-[96%] lg:left-[-35%] lg:top-[100%]">
            <Draggable>
              {({ active }) => (
                <Transition
                  className="transition-transform duration-1000 [transition-delay:1700ms]"
                  from="translate-x-[-700px] translate-y-[700px] rotate-[-90deg]"
                  to="translate-x-0 translate-y-0 rotate-[8deg]"
                >
                  <Sticker
                    active={active}
                    peelAngle={-15}
                    hoverPeel={0.15}
                    width={350}
                    height={329}
                    front={<OpenSourceFront />}
                    back={<OpenSourceBack />}
                    shadow={<OpenSourceShadow />}
                  />
                </Transition>
              )}
            </Draggable>
          </div>

          <div className="pointer-events-none absolute left-[-20%] top-[125%] z-10 sm:left-[15%] sm:top-[110%] sm:z-auto md:left-[22%] md:top-[120%]">
            <Draggable>
              {({ active }) => (
                <Transition
                  className="transition-transform duration-1000 [transition-delay:1800ms] "
                  from="translate-x-[-100px] translate-y-[700px] rotate-[-20deg]"
                  to="translate-x-0 translate-y-0 rotate-[-8deg]"
                >
                  <Sticker
                    active={active}
                    peelAngle={15}
                    hoverPeel={0.2}
                    activePeel={0.3}
                    width={258}
                    height={289}
                    front={<KeepIt100Front />}
                    back={<KeepIt100Back />}
                    shadow={<KeepIt100Shadow />}
                  />
                </Transition>
              )}
            </Draggable>
          </div>

          <div className="pointer-events-none absolute right-[12%] top-[116%] hidden sm:block">
            <Draggable>
              {({ active }) => (
                <Transition
                  className="transition-transform duration-1000 [transition-delay:1700ms]"
                  from="translate-x-[200px] translate-y-[700px] rotate-[20deg]"
                  to="translate-x-0 translate-y-0 rotate-[20deg]"
                >
                  <Sticker
                    active={active}
                    peelAngle={20}
                    hoverPeel={0.2}
                    activePeel={0.3}
                    width={250}
                    height={302}
                    front={<PropsFront />}
                    back={<PropsBack />}
                    shadow={<PropsShadow />}
                  />
                </Transition>
              )}
            </Draggable>
          </div>

          <div className="pointer-events-none absolute right-[-28%] top-[88%] sm:block lg:right-[-30%] lg:top-[94%]">
            <Draggable>
              {({ active }) => (
                <Transition
                  className="transition-transform duration-1000 [transition-delay:1800ms]"
                  from="translate-x-[700px] translate-y-[700px] rotate-[20deg]"
                  to="translate-x-0 translate-y-0 rotate-[-16deg]"
                >
                  <Sticker
                    active={active}
                    peelAngle={15}
                    hoverPeel={0.2}
                    width={168}
                    height={382}
                    front={<ThemesFront />}
                    back={<ThemesBack />}
                    shadow={<ThemesShadow />}
                  />
                </Transition>
              )}
            </Draggable>
          </div>

          <div className="pointer-events-none absolute right-[-24%] top-[144%] hidden sm:block lg:right-[-16%] lg:top-[138%]">
            <Draggable>
              {({ active }) => (
                <Transition
                  className="transition-transform duration-1000 [transition-delay:1800ms]"
                  from="translate-x-[450px] translate-y-[700px] rotate-[200deg]"
                  to="translate-x-0 translate-y-0 rotate-[-4deg]"
                >
                  <Sticker
                    active={active}
                    peelAngle={-100}
                    hoverPeel={0.15}
                    width={369}
                    height={138}
                    front={<PrebuiltSectionsFront />}
                    back={<PrebuiltSectionsBack />}
                    shadow={<PrebuiltSectionsShadow />}
                  />
                </Transition>
              )}
            </Draggable>
          </div>

          <div className="pointer-events-none absolute left-[-15%] top-[130%] hidden sm:block">
            <Draggable>
              {({ active }) => (
                <Transition
                  className="transition-transform duration-1000 [transition-delay:1900ms]"
                  from="translate-x-[-450px] translate-y-[700px] rotate-[-80deg]"
                  to="translate-x-0 translate-y-0 rotate-[12deg]"
                >
                  <Sticker
                    active={active}
                    peelAngle={-14}
                    hoverPeel={0.2}
                    activePeel={0.3}
                    width={340}
                    height={172}
                    front={<TotallyFront />}
                    back={<TotallyBack />}
                    shadow={<TotallyShadow />}
                  />
                </Transition>
              )}
            </Draggable>
          </div>

          <div className="-z-1 pointer-events-none absolute left-[34%] top-[94%] sm:left-[-50%] sm:top-[24%] md:left-[-44%] md:top-[32%] md:z-auto">
            <Draggable>
              {({ active }) => (
                <Transition
                  className="transition-transform duration-1000 [transition-delay:1800ms]"
                  from="translate-x-[-1000px] translate-y-[-50px] rotate-[-100deg]"
                  to="translate-x-0 translate-y-0 rotate-[-12deg]"
                >
                  <Sticker
                    active={active}
                    peelAngle={-100}
                    width={278}
                    height={296}
                    front={<HandcraftedCodeFront />}
                    back={<HandcraftedCodeBack />}
                    shadow={<HandcraftedCodeShadow />}
                  />
                </Transition>
              )}
            </Draggable>
          </div>

          <div className="pointer-events-none absolute left-[10%] top-[112%] sm:left-[-24%] sm:top-[-32%] md:left-[-18%] md:top-[-24%]">
            <Draggable>
              {({ active }) => (
                <Transition
                  className="transition-transform duration-1000 [transition-delay:1700ms]"
                  from="translate-x-[-600px] translate-y-[-700px] rotate-[-120deg]"
                  to="translate-x-0 translate-y-0 rotate-[4deg] md:rotate-[20deg]"
                >
                  <Sticker
                    active={active}
                    peelAngle={-0}
                    hoverPeel={0.25}
                    activePeel={0.35}
                    width={229}
                    height={207}
                    front={<ReactjsFront />}
                    back={<ReactjsBack />}
                    shadow={<ReactjsShadow />}
                  />
                </Transition>
              )}
            </Draggable>
          </div>

          <div className="pointer-events-none absolute right-[-22%] top-[125%] sm:right-[-38%] sm:top-[-25%] md:right-[-34%] md:top-[-16%]">
            <Draggable>
              {({ active }) => (
                <Transition
                  className="transition-transform duration-1000 [transition-delay:1800ms]"
                  from="translate-x-[600px] translate-y-[-700px] rotate-[120deg]"
                  to="translate-x-0 translate-y-0 rotate-0"
                >
                  <Sticker
                    active={active}
                    hoverPeel={0.15}
                    width={284}
                    height={284}
                    front={<ProductionReadyFront />}
                    back={<ProductionReadyBack />}
                    shadow={<ProductionReadyShadow />}
                  />
                </Transition>
              )}
            </Draggable>
          </div>

          <div className="pointer-events-none absolute left-[100%] top-[42%] hidden sm:block md:left-[110%] md:top-[36%]">
            <Draggable>
              {({ active }) => (
                <Transition
                  className="transition-transform duration-700 [transition-delay:2300ms]"
                  from="translate-x-[1000px] translate-y-[-100px] translate-y-[20px] rotate-[180deg]"
                  to="translate-x-0 translate-y-0 rotate-[16deg]"
                >
                  <Sticker
                    active={active}
                    peelAngle={-100}
                    hoverPeel={0.15}
                    width={200}
                    height={200}
                    front={<TypescriptFront />}
                    back={<TypescriptBack />}
                    shadow={<TypescriptShadow />}
                  />
                </Transition>
              )}
            </Draggable>
          </div>
        </div>
      </main>
    </div>
  )
}
