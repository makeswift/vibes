'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import clsx from 'clsx'

import { ProgressBar } from '@/vibes/soul/components/hero/ProgressBar'

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

export const Hero = function Hero({ heading, images }: Props) {
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
    <header className="relative h-[100dvh] max-h-[880px] @container">
      {/* Image Carousel */}
      <div className="h-full w-full">
        {images?.map((image, idx) => {
          return (
            <div
              key={idx}
              className={clsx(
                'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                currentIndex === idx ? 'opacity-100' : 'opacity-0'
              )}
            >
              <Image src={image.url} alt={image.alt} fill className="object-cover" />
            </div>
          )
        })}
      </div>

      <div className="absolute bottom-0 left-0 z-20 w-full px-3 @lg:px-20">
        {/* Heading */}
        <h1 className="max-w-7xl text-5xl font-medium leading-none @2xl:text-[90px]">{heading}</h1>
        <div className="mx-auto flex items-end justify-between gap-4 pb-2 pt-4 text-background @lg:pb-8 @lg:pt-10">
          {/* Progress Bar */}
          <ProgressBar
            currentIndex={currentIndex}
            totalItems={images.length}
            setCurrentIndex={setCurrentIndex}
          />
          {/* Carousel Count - "01/03" */}
          <span className="font-mono">
            {currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1}/
            {images.length < 10 ? `0${images.length}` : images.length}
          </span>
        </div>
      </div>
    </header>
  )
}

export default Hero
