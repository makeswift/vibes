import { DraggableSticker } from '@/components/ui/sticker'
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
          <Transition
            className="ease-[cubic-bezier(1,0,1,0)] transition-all duration-500 [transition-delay:100ms]"
            from="translate-y-12 opacity-0"
            to="translate-y-0 opacity-100"
          >
            <h1 className="mb-2 font-docs-heading text-4xl text-black sm:mb-4 sm:text-5xl md:mb-5 md:text-6xl xl:text-7xl">
              Bring the <span className="sr-only">Vibes</span>
            </h1>
          </Transition>

          <Transition
            className="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] transition-all duration-300 [transition-delay:500ms]"
            from="translate-y-12 -translate-x-12 opacity-0 scale-.9"
            to="translate-y-0 opacity-100 translate-x-0 scale-1"
          >
            <Vibes className="w-2/3 max-w-xl md:w-3/5 lg:w-[540px]" />
          </Transition>

          <Transition
            className="ease-[cubic-bezier(1,0,1,0)] transition-all duration-500 [transition-delay:800ms]"
            from="translate-y-12 opacity-0"
            to="translate-y-0 opacity-100"
          >
            <p className="mt-4 max-w-4xl text-center font-docs-sans text-xl !leading-normal text-black sm:mt-6 md:text-2xl md:!leading-snug lg:mt-8 lg:text-3xl">
              Vibes is a copy and paste component library built specifically for marketing sites.
              Lorem ipsum dolor sit amet adipiscing elit.
            </p>
          </Transition>

          <Transition
            className="ease-[cubic-bezier(1,0,1,0)] transition-all duration-500 [transition-delay:900ms]"
            from="translate-y-12 opacity-0"
            to="translate-y-0 opacity-100"
          >
            <Form />
          </Transition>

          {/* <Transition
            className="delay-[4000ms] absolute left-[8%] top-[115%] transition-transform duration-1000"
            from="translate-x-[-400px] translate-y-[700px] rotate-[-20deg]"
            to="translate-x-0 translate-y-0 -rotate-12"
          >
            <DraggableSticker
              peelAngle={0}
              width={168}
              height={268}
              front={<FigmaFront />}
              back={<FigmaBack />}
              shadow={<FigmaShadow />}
            ></DraggableSticker>
          </Transition> */}

          <Transition
            className="delay-[4000ms] absolute left-[-38%] top-[88%] transition-transform duration-1000 sm:left-[-40%] sm:top-[96%] lg:left-[-35%] lg:top-[100%]"
            from="translate-x-[-700px] translate-y-[700px] rotate-[-90deg]"
            to="translate-x-0 translate-y-0 rotate-[8deg]"
          >
            <DraggableSticker
              peelAngle={-15}
              hoverPeel={0.15}
              width={350}
              height={329}
              front={<OpenSourceFront />}
              back={<OpenSourceBack />}
              shadow={<OpenSourceShadow />}
            ></DraggableSticker>
          </Transition>

          <Transition
            className="delay-[4000ms] absolute left-[-20%] top-[125%] z-10 transition-transform duration-1000 sm:left-[15%] sm:top-[110%] sm:z-auto md:left-[22%] md:top-[120%]"
            from="translate-x-[-100px] translate-y-[700px] rotate-[-20deg]"
            to="translate-x-0 translate-y-0 rotate-[-8deg]"
          >
            <DraggableSticker
              peelAngle={15}
              hoverPeel={0.2}
              activePeel={0.3}
              width={258}
              height={289}
              front={<KeepIt100Front />}
              back={<KeepIt100Back />}
              shadow={<KeepIt100Shadow />}
            ></DraggableSticker>
          </Transition>

          <Transition
            className="delay-[4000ms] absolute right-[12%] top-[116%] hidden transition-transform duration-1000 sm:block"
            from="translate-x-[200px] translate-y-[700px] rotate-[20deg]"
            to="translate-x-0 translate-y-0 rotate-[20deg]"
          >
            <DraggableSticker
              peelAngle={20}
              hoverPeel={0.2}
              activePeel={0.3}
              width={250}
              height={302}
              front={<PropsFront />}
              back={<PropsBack />}
              shadow={<PropsShadow />}
            ></DraggableSticker>
          </Transition>

          <Transition
            className="delay-[4000ms] absolute right-[-28%] top-[88%] hidden transition-transform duration-1000 sm:block lg:right-[-30%] lg:top-[94%]"
            from="translate-x-[700px] translate-y-[700px] rotate-[20deg]"
            to="translate-x-0 translate-y-0 rotate-[-16deg]"
          >
            <DraggableSticker
              peelAngle={15}
              hoverPeel={0.2}
              width={168}
              height={382}
              front={<ThemesFront />}
              back={<ThemesBack />}
              shadow={<ThemesShadow />}
            ></DraggableSticker>
          </Transition>

          <Transition
            className="delay-[4050ms] absolute right-[-24%] top-[144%] hidden transition-transform duration-1000 sm:block lg:right-[-16%] lg:top-[138%]"
            from="translate-x-[-450px] translate-y-[700px] rotate-[-200deg]"
            to="translate-x-0 translate-y-0 rotate-[-4deg]"
          >
            <DraggableSticker
              peelAngle={-100}
              hoverPeel={0.15}
              width={369}
              height={138}
              front={<PrebuiltSectionsFront />}
              back={<PrebuiltSectionsBack />}
              shadow={<PrebuiltSectionsShadow />}
            ></DraggableSticker>
          </Transition>

          <Transition
            className="delay-[4050ms] absolute left-[-15%] top-[130%] hidden transition-transform duration-1000 sm:block"
            from="translate-x-[450px] translate-y-[700px] rotate-[80deg]"
            to="translate-x-0 translate-y-0 rotate-[12deg]"
          >
            <DraggableSticker
              peelAngle={-14}
              hoverPeel={0.2}
              activePeel={0.3}
              width={340}
              height={172}
              front={<TotallyFront />}
              back={<TotallyBack />}
              shadow={<TotallyShadow />}
            ></DraggableSticker>
          </Transition>

          <Transition
            className="delay-[4000ms] -z-1 absolute left-[34%] top-[94%] transition-transform duration-1000 sm:left-[-50%] sm:top-[24%] md:left-[-44%] md:top-[32%] md:z-auto"
            from="translate-x-[-1000px] translate-y-[-50px] rotate-[-100deg]"
            to="translate-x-0 translate-y-0 rotate-[-12deg]"
          >
            <DraggableSticker
              peelAngle={-100}
              width={278}
              height={296}
              front={<HandcraftedCodeFront />}
              back={<HandcraftedCodeBack />}
              shadow={<HandcraftedCodeShadow />}
            ></DraggableSticker>
          </Transition>

          <Transition
            className="absolute left-[10%] top-[112%] transition-transform duration-1000 [transition-delay:1000ms] sm:left-[-24%] sm:top-[-32%] md:left-[-18%] md:top-[-24%]"
            from="translate-x-[-600px] translate-y-[-700px] rotate-[-120deg]"
            to="translate-x-0 translate-y-0 rotate-[4deg] md:rotate-[20deg]"
          >
            <DraggableSticker
              peelAngle={-0}
              hoverPeel={0.25}
              activePeel={0.35}
              width={229}
              height={207}
              front={<ReactjsFront />}
              back={<ReactjsBack />}
              shadow={<ReactjsShadow />}
            ></DraggableSticker>
          </Transition>

          <Transition
            className="delay-[10000ms] absolute right-[-22%] top-[125%] transition-transform duration-1000 sm:right-[-38%] sm:top-[-25%] md:right-[-34%] md:top-[-16%]"
            from="translate-x-[600px] translate-y-[-700px] rotate-[120deg]"
            to="translate-x-0 translate-y-0 rotate-0"
          >
            <DraggableSticker
              hoverPeel={0.15}
              width={284}
              height={284}
              front={<ProductionReadyFront />}
              back={<ProductionReadyBack />}
              shadow={<ProductionReadyShadow />}
            ></DraggableSticker>
          </Transition>

          <Transition
            className="delay-[4000ms] absolute left-[100%] top-[42%] hidden transition-transform duration-1000 sm:block md:left-[110%] md:top-[36%]"
            from="translate-x-[1000px] translate-y-[20px] rotate-[100deg]"
            to="translate-x-0 translate-y-0 rotate-[16deg]"
          >
            <DraggableSticker
              peelAngle={-100}
              hoverPeel={0.15}
              width={200}
              height={200}
              front={<TypescriptFront />}
              back={<TypescriptBack />}
              shadow={<TypescriptShadow />}
            ></DraggableSticker>
          </Transition>
        </div>
      </main>
    </div>
  )
}
