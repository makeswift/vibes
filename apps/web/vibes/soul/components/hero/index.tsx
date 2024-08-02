'use client'

import { useEffect, useState } from 'react'

import Slideshow from '@/vibes/soul/components/hero/Slideshow'

import ProgressSection from './ProgressSection'

type Props = {
  slides: {
    heading: string
    image: {
      url: string
      alt: string
    }
  }[]
}

// Hero Full Width Layout
export const Hero = function Hero({ slides }: Props) {
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
    <header className="relative h-[100dvh] max-h-[880px] bg-primary-shadow @container">
      <Slideshow slides={slides} className="h-full w-full" currentIndex={currentIndex} />
      <ProgressSection
        currentIndex={currentIndex}
        slides={slides}
        setCurrentIndex={setCurrentIndex}
        className="absolute bottom-0 left-0 z-10 w-full px-3 pb-2 pt-4 @lg:px-20 @lg:pb-8 @lg:pt-10"
      />
    </header>
  )
}

export default Hero
