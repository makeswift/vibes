'use client'

import { useEffect, useState } from 'react'

import { useBrandContext } from '@/components/preview/brand-context'
import getBrandShade from '@/vibes/soul/getBrandShade'

import HeroMediaContainedLayout from './HeroMediaContainedLayout'
import MediaCarousel from './MediaCarousel'
import ProgressSection from './ProgessSection'

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
  const { activeBrand } = useBrandContext()

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
    <header
      className="relative h-[100dvh] max-h-[880px] @container"
      style={{ background: getBrandShade(activeBrand?.name, 900) }}
    >
      <div className="absolute bottom-0 left-0 z-10 w-full px-3 @lg:px-20">
        <h1 className="max-w-7xl text-5xl font-medium leading-none text-background @2xl:text-[90px]">
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
