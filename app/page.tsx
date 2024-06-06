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
      <main className="relative z-0 h-full w-full overflow-hidden rounded-3xl border border-black bg-gradient-to-b from-[#FFDEB6] to-[#FFB5CE] p-5 after:absolute after:inset-0 after:-z-10 after:animate-[dotScrollSmall_500ms_linear_infinite] after:[background-image:radial-gradient(#FFB3CD_25%,transparent_25%),radial-gradient(#FFB3CD_25%,transparent_25%)] after:[background-position:-0px_-0px,-6px_-6px] after:[background-size:12px_12px] md:rounded-[32px] md:p-8 lg:rounded-[40px] lg:p-10 lg:after:animate-[dotScrollLarge_400ms_linear_infinite] lg:after:[background-position:-0px_-0px,-8px_-8px] lg:after:[background-size:16px_16px] xl:rounded-[64px]">
        <div className="relative mx-auto h-full max-w-4xl">
          <div className="flex min-h-[75%] flex-col items-center md:justify-center">
            <h1 className="mb-2 font-docs-heading text-4xl text-black sm:mb-4 sm:text-6xl md:mb-5 xl:text-7xl">
              Bring the <span className="sr-only">Vibes</span>
            </h1>
            <Vibes className="w-2/3 max-w-2xl md:w-1/2" />

            <p className="mt-6 max-w-4xl text-center font-docs-sans text-xl !leading-normal sm:mt-8 md:mt-10 md:text-2xl md:!leading-snug lg:text-3xl">
              Vibes is a copy and paste component library built specifically for marketing sites.
              Lorem ipsum dolor sit amet adipiscing elit.
            </p>

            <Form />
          </div>

          <div className="absolute -left-[100px] top-[6%]">
            <DraggableSticker
              className="rotate-[8deg]"
              width={229}
              height={207}
              front={<ReactjsFront />}
              back={<ReactjsBack />}
              shadow={<ReactjsShadow />}
            ></DraggableSticker>
          </div>

          <div className="absolute right-[108%] top-[35%]">
            <DraggableSticker
              className="-rotate-[6deg]"
              width={278}
              height={296}
              front={<HandcraftedCodeFront />}
              back={<HandcraftedCodeBack />}
              shadow={<HandcraftedCodeShadow />}
            ></DraggableSticker>
          </div>

          <div className="absolute -bottom-[60px] -left-[35%]">
            <DraggableSticker
              className="rotate-[8deg]"
              width={350}
              height={329}
              front={<OpenSourceFront />}
              back={<OpenSourceBack />}
              shadow={<OpenSourceShadow />}
            ></DraggableSticker>
          </div>

          <div className="absolute -bottom-[90px] left-[30%]">
            <DraggableSticker
              className="-rotate-[10deg]"
              width={258}
              height={289}
              front={<KeepIt100Front />}
              back={<KeepIt100Back />}
              shadow={<KeepIt100Shadow />}
            ></DraggableSticker>
          </div>

          <div className="absolute -bottom-[50px] left-[5%]">
            <DraggableSticker
              className="-rotate-12"
              width={168}
              height={268}
              front={<FigmaFront />}
              back={<FigmaBack />}
              shadow={<FigmaShadow />}
            ></DraggableSticker>
          </div>

          <div className="absolute -bottom-[60px] -left-[10%]">
            <DraggableSticker
              className="rotate-[4deg]"
              width={369}
              height={138}
              front={<PrebuiltSectionsFront />}
              back={<PrebuiltSectionsBack />}
              shadow={<PrebuiltSectionsShadow />}
            ></DraggableSticker>
          </div>

          <div className="absolute -bottom-[90px] -right-[6%]">
            <DraggableSticker
              className="rotate-[4deg]"
              width={250}
              height={302}
              front={<PropsFront />}
              back={<PropsBack />}
              shadow={<PropsShadow />}
            ></DraggableSticker>
          </div>

          <div className="absolute -bottom-[60px] -right-[35%]">
            <DraggableSticker
              className="-rotate-[16deg]"
              width={168}
              height={382}
              front={<ThemesFront />}
              back={<ThemesBack />}
              shadow={<ThemesShadow />}
            ></DraggableSticker>
          </div>

          <Transition
            className="absolute -bottom-[60px] -right-[26%] transition-transform delay-150 duration-1000"
            from="translate-x-[100px] translate-y-[100px]"
            to="translate-x-0 translate-y-0"
          >
            <DraggableSticker
              className="-rotate-[4deg]"
              width={336}
              height={176}
              front={<TotallyFront />}
              back={<TotallyBack />}
              shadow={<TotallyShadow />}
            ></DraggableSticker>
          </Transition>
        </div>
      </main>
    </div>
  )
}
