'use client'

import { useEffect, useState } from 'react'

import ProgressSection from '@/vibes/soul/components/hero/progress-section'
import Slideshow from '@/vibes/soul/components/hero/slideshow'

type Props = {
  slides: {
    heading: string
    image: {
      url: string
      alt: string
    }
  }[]
}

// Hero Media Contained Layout
export const HeroContained = function HeroContained({ slides }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      // Calculate the next index, wrapping back to 0 if at the end
      const nextIndex = (currentIndex + 1) % slides.length
      setCurrentIndex(nextIndex)
    }, 5000)

    return () => clearTimeout(timer)
  }, [currentIndex, slides.length, setCurrentIndex])

  return (
    <header className="relative flex flex-col bg-primary-shadow @container">
      <div className="flex flex-grow flex-col-reverse gap-x-4 gap-y-10 @4xl:h-[100dvh] @4xl:max-h-[880px] @4xl:flex-row">
        {/* Heading */}
        {slides?.map(({ heading }, idx) => {
          if (idx !== currentIndex) return null
          return (
            <h1
              key={idx}
              className="mt-auto max-w-7xl pl-3 text-5xl font-medium leading-none text-background @lg:pl-20 @2xl:text-[90px] @4xl:w-1/2"
            >
              {heading}
            </h1>
          )
        })}

        <Slideshow
          slides={slides}
          currentIndex={currentIndex}
          className="relative mx-3 mt-[108px] aspect-square flex-grow pb-20 @lg:mx-20 @4xl:ml-0 @4xl:aspect-auto @4xl:w-1/2"
          noHeading
        />
      </div>

      <ProgressSection
        currentIndex={currentIndex}
        slides={slides}
        setCurrentIndex={setCurrentIndex}
        className="mx-auto px-3 pb-2 pt-4 @lg:px-20 @lg:pb-8 @lg:pt-6"
      />
    </header>
  )
}

export default HeroContained
