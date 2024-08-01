'use client'

import { useEffect, useState } from 'react'

import MediaCarousel from '@/vibes/soul/components/hero/MediaCarousel'
import ProgressSection from '@/vibes/soul/components/hero/ProgessSection'
import '@/vibes/soul/styles.css'

type Props = {
  heading: string
  images: {
    url: string
    dimensions: {
      width: number
      height: number
    }
    alt: string
  }[]
}

export const HeroMediaContainedLayout = function HeroMediaContainedLayout({
  heading,
  images,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      // Calculate the next index, wrapping back to 0 if at the end
      const nextIndex = (currentIndex + 1) % images.length
      setCurrentIndex(nextIndex)
    }, 5000)

    return () => clearTimeout(timer)
  }, [currentIndex, images.length, setCurrentIndex])

  return (
    <header className="bg-primary-900 relative flex flex-col @container">
      <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col-reverse gap-x-4 gap-y-10 @4xl:h-[100dvh] @4xl:max-h-[880px] @4xl:flex-row">
        <h1 className="mt-auto pl-3 text-5xl font-medium leading-none text-background @lg:pl-20 @2xl:text-[90px] @4xl:w-1/2">
          {heading}
        </h1>

        <MediaCarousel
          images={images}
          className="relative mx-3 mt-[108px] aspect-square flex-grow pb-20 @lg:mx-20 @4xl:ml-0 @4xl:aspect-auto @4xl:w-1/2"
          currentIndex={currentIndex}
        />
      </div>

      <ProgressSection
        currentIndex={currentIndex}
        images={images}
        setCurrentIndex={setCurrentIndex}
        className="mx-auto max-w-7xl px-3 pb-2 pt-4 @lg:px-20 @lg:pb-8 @lg:pt-6"
      />
    </header>
  )
}

export default HeroMediaContainedLayout
