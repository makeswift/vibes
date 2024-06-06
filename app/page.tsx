import { DraggableSticker } from '@/components/ui/sticker'
import { FigmaBack, FigmaFront, FigmaShadow, Vibes } from '@/icons/generated'

import { Form } from './form'

export default function Home() {
  return (
    <div className="h-screen w-full bg-white p-3 md:p-4 lg:p-5">
      <main className="relative z-0 h-full w-full overflow-hidden rounded-3xl border border-black bg-gradient-to-b from-[#FFDEB6] to-[#FFB5CE] p-5 after:absolute after:inset-0 after:-z-10 after:animate-[dotScrollSmall_500ms_linear_infinite] after:[background-image:radial-gradient(#FFB3CD_25%,transparent_25%),radial-gradient(#FFB3CD_25%,transparent_25%)] after:[background-position:-0px_-0px,-6px_-6px] after:[background-size:12px_12px] md:rounded-[32px] md:p-8 lg:rounded-[40px] lg:p-10 lg:after:animate-[dotScrollLarge_400ms_linear_infinite] lg:after:[background-position:-0px_-0px,-8px_-8px] lg:after:[background-size:16px_16px] xl:rounded-[64px]">
        <div className="relative mx-auto flex h-full max-w-4xl flex-col items-center pb-10 pt-3 md:justify-center md:pt-0">
          <h1 className="mb-2 font-docs-heading text-2xl text-black sm:mb-4 sm:text-4xl md:mb-5 md:text-5xl xl:text-6xl">
            Bring the <span className="sr-only">Vibes</span>
          </h1>
          <Vibes className="w-2/3 max-w-2xl md:w-1/2" />

          <p className="mt-6 max-w-4xl text-center font-docs-sans text-xl !leading-normal sm:mt-8 md:mt-10 md:text-2xl md:!leading-snug lg:text-3xl">
            Vibes is a copy and paste component library built specifically for marketing sites.
            Lorem ipsum dolor sit amet adipiscing elit.
          </p>

          <Form />

          <div className="absolute left-20 top-10">
            <DraggableSticker
              className="-rotate-12"
              front={<FigmaFront />}
              back={<FigmaBack />}
              shadow={<FigmaShadow />}
            ></DraggableSticker>
          </div>
        </div>
      </main>
    </div>
  )
}
