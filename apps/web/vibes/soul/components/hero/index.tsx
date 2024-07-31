'use client'

import { useEffect, useState } from 'react'

import HeroMediaContainedLayout from '@/vibes/soul/components/hero/HeroMediaContainedLayout'
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
  containedMediaLayout?: boolean
}

// Hero Full Width Layout
export const Hero = function Hero({ heading, images, containedMediaLayout }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      // Calculate the next index, wrapping back to 0 if at the end
      const nextIndex = (currentIndex + 1) % images.length
      setCurrentIndex(nextIndex)
    }, 5000)

    return () => clearTimeout(timer)
  }, [currentIndex, images.length, setCurrentIndex])

  if (containedMediaLayout) {
    return <HeroMediaContainedLayout heading={heading} images={images} />
  }

  return (
    <header className="bg-primary-900 relative h-[100dvh] max-h-[880px] @container">
      <div className="absolute bottom-0 left-1/2 z-10 w-full max-w-7xl -translate-x-1/2 px-3 @lg:px-20">
        <h1 className="text-5xl font-medium leading-none text-background @2xl:text-[90px]">
          {heading}
        </h1>
        <ProgressSection
          currentIndex={currentIndex}
          images={images}
          setCurrentIndex={setCurrentIndex}
          className="pb-2 pt-4 @lg:pb-8 @lg:pt-10"
        />
      </div>

      <MediaCarousel images={images} className="h-full w-full" currentIndex={currentIndex} />
    </header>
  )
}

export default Hero
