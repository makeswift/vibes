'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

import { cn } from '@/lib/utils'
import { ChevronLeftIcon } from '@/vibes/2px/components/icons/ChevronLeftIcon'

import { PauseIcon } from '../icons/PauseIcon'
import { PlayIcon } from '../icons/PlayIcon'

interface Props {
  className?: string
  images: {
    src: string
    alt: string
    width: number
    height: number
  }[]
  title: string
  description: string
}

const CHANGE_INTERVAL = 10000

export default function SlideshowSection({ className, images, title, description }: Props) {
  const [autoPlay, setAutoPlay] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const height = useMemo(
    () => images.reduce((acc, { height }) => Math.max(acc, height), 0),
    [images]
  )

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide(i => (i + 1) % images.length)
      }, CHANGE_INTERVAL)

      return () => clearInterval(interval)
    }
  }, [autoPlay, images.length])

  return (
    <section className={cn('flex w-full flex-col bg-accent @container', className)}>
      <div
        className="relative shrink-0 basis-[var(--mobile-height)] @md:basis-[var(--desktop-height)]"
        style={
          {
            '--desktop-height': `${Math.min(height, 800) + 128}px`,
            '--mobile-height': `${Math.min(height, 400) + 128}px`,
          } as React.CSSProperties
        }
      >
        {images.map((image, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 flex h-full max-h-[var(--max-dim-mobile)] w-11/12 max-w-[var(--max-dim-mobile)] -translate-x-1/2 -translate-y-1/2 items-center justify-center object-contain @md:max-h-[var(--max-dim-desktop)] @md:max-w-[var(--max-dim-desktop)]"
            style={
              {
                zIndex: images.length - 1 - Math.abs(i - currentSlide),
                '--max-dim-desktop': `${800 - ((i % 2) * 0.05 + (i % 3) * 0.1) * 800}px`,
                '--max-dim-mobile': `${400 - ((i % 2) * 0.1 + (i % 3) * 0.05) * 400}px`,
              } as React.CSSProperties
            }
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto max-h-full w-auto max-w-full cursor-pointer border-2 border-foreground object-contain"
              onClick={() => setCurrentSlide(i)}
            />
          </div>
        ))}

        {!autoPlay ? (
          <div
            className="absolute left-1/2 top-1/2 max-w-lg -translate-x-1/2 -translate-y-1/2 border-2 border-foreground bg-accent p-1 text-center font-medium text-foreground"
            style={{
              zIndex: images.length,
            }}
          >
            <h2 className="mb-4 text-4xl leading-9 -tracking-[0.02em] @md:text-6xl @md:leading-[4rem]">
              {title}
            </h2>
            <p className="mb-6 leading-6 @md:text-sm">{description}</p>

            <button className="mx-auto" onClick={() => setAutoPlay(true)}>
              {<PlayIcon />}
            </button>
          </div>
        ) : null}
      </div>

      <div className="flex h-12 items-center justify-between border-t-2 border-foreground px-3">
        <button className="" onClick={() => setAutoPlay(ap => !ap)}>
          {autoPlay ? <PauseIcon /> : <PlayIcon />}
        </button>

        <div className="flex items-center gap-6">
          <button onClick={() => setCurrentSlide(i => (i - 1 + images.length) % images.length)}>
            <ChevronLeftIcon />
          </button>

          <span>
            {currentSlide + 1} / {images.length}
          </span>

          <button onClick={() => setCurrentSlide(i => (i + 1) % images.length)}>
            <ChevronLeftIcon className="rotate-180" />
          </button>
        </div>
      </div>
    </section>
  )
}
