'use client'

import Image from 'next/image'

import clsx from 'clsx'

type Props = {
  images: {
    url: string
    dimensions: {
      width: number
      height: number
    }
    alt: string
  }[]
  className?: string
  currentIndex: number
}

export const MediaCarousel = function MediaCarousel({
  images,
  className = '',
  currentIndex,
}: Props) {
  return (
    <div className={className}>
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
  )
}

export default MediaCarousel
