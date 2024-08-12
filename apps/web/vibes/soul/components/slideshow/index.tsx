'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import clsx from 'clsx'

import Button from '@/vibes/soul/components/button'
import ProgressSection from '@/vibes/soul/components/slideshow/progress-section'

interface Link {
  label: string
  href: string
}

interface Image {
  altText: string
  blurDataUrl?: string
  src: string
}

export interface Slide {
  title: string
  description?: string
  image?: Image
  cta?: Link
}
interface Props {
  className?: string
  slides: Slide[]
}

export const Slideshow = function Slideshow({ slides, className = '' }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % slides.length
      setCurrentIndex(nextIndex)
    }, 5000)

    return () => clearTimeout(timer)
  }, [currentIndex, slides.length, setCurrentIndex])

  return (
    <header
      className={clsx('relative h-[100dvh] max-h-[880px] bg-primary-shadow @container', className)}
    >
      {slides?.map(({ title, description, image, cta }, idx) => {
        return (
          <div
            key={idx}
            className={clsx(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === idx ? 'opacity-100' : 'opacity-0'
            )}
          >
            <div className="absolute bottom-10 left-0 z-10  w-full max-w-7xl px-3 text-background @lg:bottom-24 @xl:px-6 @5xl:px-20">
              <h1 className="mb-1 text-5xl font-medium leading-none @2xl:text-[90px]">{title}</h1>
              {description && <p>{description}</p>}
              {cta?.href && (
                <Button size="small" variant="tertiary" className="mt-4">
                  {cta.label}
                </Button>
              )}
            </div>

            {/* TODO: Implement progressive loading with blurDataUrl */}
            {image?.src && (
              <Image src={image.src} alt={image.altText} fill className="object-cover" />
            )}
          </div>
        )
      })}
      <ProgressSection
        currentIndex={currentIndex}
        slides={slides}
        setCurrentIndex={setCurrentIndex}
        className="absolute bottom-0 left-0 z-10 w-full px-3 pb-2 pt-4 @lg:pb-8 @lg:pt-10 @xl:px-6 @5xl:px-20"
      />
    </header>
  )
}

export default Slideshow
