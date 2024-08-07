'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import clsx from 'clsx'

import ProgressSection from '@/vibes/soul/components/slideshow/progress-section'

type Props = {
  slides: {
    heading: string
    image: {
      url: string
      alt: string
    }
  }[]
}

export const Slideshow = function Slideshow({ slides }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % slides.length
      setCurrentIndex(nextIndex)
    }, 5000)

    return () => clearTimeout(timer)
  }, [currentIndex, slides.length, setCurrentIndex])

  return (
    <header className="relative h-[100dvh] max-h-[880px] bg-primary-shadow @container">
      {slides?.map(({ heading, image }, idx) => {
        return (
          <div
            key={idx}
            className={clsx(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === idx ? 'opacity-100' : 'opacity-0'
            )}
          >
            <h1 className="absolute bottom-10 left-0 z-10 w-full max-w-7xl px-3 text-5xl font-medium leading-none text-background @lg:bottom-24 @lg:px-20 @2xl:text-[90px]">
              {heading}
            </h1>

            <Image src={image.url} alt={image.alt} fill className="object-cover" />
          </div>
        )
      })}
      <ProgressSection
        currentIndex={currentIndex}
        slides={slides}
        setCurrentIndex={setCurrentIndex}
        className="absolute bottom-0 left-0 z-10 w-full px-3 pb-2 pt-4 @lg:px-20 @lg:pb-8 @lg:pt-10"
      />
    </header>
  )
}

export default Slideshow
