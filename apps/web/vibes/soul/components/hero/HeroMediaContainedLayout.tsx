'use client'

import EmblaCarousel from '@/vibes/soul/components/hero/EmblaCarousel'
import '@/vibes/soul/styles.css'

type Props = {
  heading: string
  slides: {
    image: {
      url: string
      dimensions: {
        width: number
        height: number
      }
      alt: string
    }
  }[]
}

export const HeroMediaContainedLayout = function HeroMediaContainedLayout({
  heading,
  slides,
}: Props) {
  return (
    <header className="bg-primary-900 relative flex flex-col @container">
      <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col-reverse gap-x-4 gap-y-10 @4xl:h-[100dvh] @4xl:max-h-[880px] @4xl:flex-row">
        <h1 className="mb-10 mt-auto pl-3 text-5xl font-medium leading-none text-background @lg:mb-24 @lg:pl-20 @2xl:text-[90px] @4xl:w-1/2">
          {heading}
        </h1>

        <EmblaCarousel
          slides={slides}
          className="mx-3 mt-[108px] aspect-square flex-grow pb-20 @lg:mx-20 @4xl:ml-0 @4xl:aspect-auto @4xl:w-1/2"
        />
      </div>
    </header>
  )
}

export default HeroMediaContainedLayout
