'use client'

import Image from 'next/image'

import clsx from 'clsx'

type Props = {
  slides: {
    heading?: string
    image: {
      url: string
      alt: string
    }
  }[]
  currentIndex: number
  noHeading?: boolean
  className?: string
}

export const Slideshow = function Slideshow({
  slides,
  currentIndex,
  noHeading,
  className = '',
}: Props) {
  return (
    <div className={className}>
      {slides?.map(({ heading, image }, idx) => {
        return (
          <div
            key={idx}
            className={clsx(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === idx ? 'opacity-100' : 'opacity-0'
            )}
          >
            {heading && !noHeading && (
              <h1 className="absolute bottom-0 left-0 z-10 w-full max-w-7xl px-3 text-5xl font-medium leading-none text-background @lg:bottom-24 @lg:px-20 @2xl:text-[90px]">
                {heading}
              </h1>
            )}

            <Image src={image.url} alt={image.alt} fill className="object-cover" />
          </div>
        )
      })}
    </div>
  )
}

export default Slideshow
