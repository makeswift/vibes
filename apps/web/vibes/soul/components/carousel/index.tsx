'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

import clsx from 'clsx'

type Props = {
  title: string
  images: string[]
}

const Carousel = ({ title, images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(3)
  const ref = useRef<NodeJS.Timeout | null>(null)

  const startCarousel = () => {
    ref.current = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.concat(images).length - 3 ? 3 : prevIndex + 1
      )
    }, 3500)
  }

  useEffect(() => {
    startCarousel()
    return () => {
      if (ref.current) clearInterval(ref.current)
    }
  }, [images.length])

  useEffect(() => {
    if (ref.current) clearInterval(ref.current)
    const timeout = setTimeout(() => {
      startCarousel()
    }, 500)

    return () => clearTimeout(timeout)
  }, [currentIndex])

  return (
    <section className="bg-background text-foreground @container">
      {title && (
        <h2 className="px-5 py-20 text-center text-5xl font-medium leading-[1] -tracking-[4%] @4xl:py-40 @4xl:text-[90px]">
          {title}
        </h2>
      )}

      <div className="relative h-[100px] @4xl:h-[500px]">
        <div
          className="ease-out-cubic flex gap-2.5 transition-transform duration-700"
          style={{
            transform: `translateX(calc(-${(currentIndex * 100) / images.length}% - ${currentIndex * 56}px + 56%))`,
          }}
        >
          {images.concat(images).map((src, index) => (
            <div
              key={index}
              className={clsx(
                'ease-out-cubic relative aspect-[1/1] flex-none origin-bottom transition-all duration-700',
                index % images.length === currentIndex % images.length
                  ? 'z-10 mx-[50px] scale-125'
                  : 'scale-100'
              )}
            >
              <Image
                src={src}
                alt={`Image ${(index % images.length) + 1}`}
                height={1000}
                width={1000}
                className="pointer-events-none h-auto w-full select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel
