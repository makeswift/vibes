'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'

import { cn } from '@/lib/utils'
import { ChevronLeftIcon } from '@/vibes/2px/components/icons/ChevronLeftIcon'

import { PauseIcon } from '../icons/PauseIcon'
import { PlayIcon } from '../icons/PlayIcon'

interface Link {
  label: string
  href: string
}

interface Image {
  altText: string
  blurDataUrl?: string
  src: string
}

interface Slide {
  cta?: Link
  description?: string
  image?: Image
  title: string
}

interface Props {
  className?: string
  slides: Slide[]
}

const CHANGE_INTERVAL = 10000

export default function SlideshowSection({ className, slides }: Props) {
  const [autoPlay, setAutoPlay] = useState(false)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const slidesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentSlideIndex(i => (i + 1) % slides.length)
      }, CHANGE_INTERVAL)

      return () => clearInterval(interval)
    }
  }, [autoPlay, slides.length])

  useEffect(() => {
    if (autoPlay && slidesRef.current) {
      slidesRef.current.focus()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlideIndex(i => (i - 1 + slides.length) % slides.length)
      } else if (e.key === 'ArrowRight') {
        setCurrentSlideIndex(i => (i + 1) % slides.length)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [autoPlay, slides.length])

  const currentSlide = slides[currentSlideIndex]

  return (
    <section
      className={cn('flex w-full flex-col bg-accent @container', className)}
      ref={slidesRef}
      tabIndex={-1}
    >
      <div
        className="relative shrink-0 basis-[var(--mobile-height)] @md:basis-[var(--desktop-height)]"
        style={
          {
            '--desktop-height': `${800 + 128}px`,
            '--mobile-height': `${400 + 128}px`,
          } as React.CSSProperties
        }
        onClick={() => setCurrentSlideIndex(i => (i + 1) % slides.length)}
      >
        {slides.map(({ image }, i) =>
          image ? (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 flex h-full max-h-[var(--max-dim-mobile)] w-11/12 max-w-[var(--max-dim-mobile)] -translate-x-1/2 -translate-y-1/2 items-center justify-center object-contain @md:max-h-[var(--max-dim-desktop)] @md:max-w-[var(--max-dim-desktop)]"
              style={
                {
                  zIndex: slides.length - 1 - Math.abs(i - currentSlideIndex),
                  '--max-dim-desktop': `${800 - ((i % 2) * 0.05 + (i % 3) * 0.1) * 800}px`,
                  '--max-dim-mobile': `${400 - ((i % 2) * 0.1 + (i % 3) * 0.05) * 400}px`,
                } as React.CSSProperties
              }
            >
              <Image
                src={image?.src}
                alt={image?.altText}
                blurDataURL={image?.blurDataUrl}
                width={800}
                height={800}
                className="h-auto max-h-full w-auto max-w-full cursor-pointer border-2 border-foreground object-contain"
                onClick={() => setCurrentSlideIndex(i)}
              />
            </div>
          ) : null
        )}
      </div>
      <div className="mx-auto mb-10 w-full max-w-xl px-5 text-center text-sm text-foreground">
        <h2 className="mb-2 font-mono uppercase leading-[1.375rem] tracking-[0.02em]">
          {currentSlide.title}
        </h2>
        <p className="font-bold leading-6">{currentSlide.description}</p>
        {currentSlide.cta?.href ? (
          <Link
            className="mx-auto font-mono text-xs uppercase leading-[1.375rem] tracking-[0.02em] underline"
            href={currentSlide.cta.href}
          >
            {currentSlide.cta.label}
          </Link>
        ) : null}
      </div>
      <div className="flex h-12 items-center justify-between border-t-2 border-foreground px-3">
        <button className="" onClick={() => setAutoPlay(ap => !ap)}>
          {autoPlay ? <PauseIcon /> : <PlayIcon />}
        </button>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setCurrentSlideIndex(i => (i - 1 + slides.length) % slides.length)}
          >
            <ChevronLeftIcon />
          </button>

          <span>
            {currentSlideIndex + 1} / {slides.length}
          </span>

          <button onClick={() => setCurrentSlideIndex(i => (i + 1) % slides.length)}>
            <ChevronLeftIcon className="rotate-180" />
          </button>
        </div>
      </div>
    </section>
  )
}
