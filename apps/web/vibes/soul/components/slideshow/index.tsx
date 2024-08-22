'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

import clsx from 'clsx'
import { EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import useEmblaCarousel from 'embla-carousel-react'
import { Pause, Play } from 'lucide-react'

import Button from '@/vibes/soul/components/button'

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
  slides: Slide[]
  interval?: number
  className?: string
}

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
      if (onButtonClick) onButtonClick(emblaApi)
    },
    [emblaApi, onButtonClick]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)

    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  }
}

export const Slideshow = function Slideshow({ slides, interval = 5000, className }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 }, [
    Autoplay({ delay: interval }),
    Fade(),
  ])
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const [isPlaying, setIsPlaying] = useState(false)

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
    playOrStop()
  }, [emblaApi])

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    setIsPlaying(autoplay.isPlaying())
    emblaApi
      .on('autoplay:play', () => setIsPlaying(true))
      .on('autoplay:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoplay.isPlaying()))
  }, [emblaApi])

  return (
    <section
      className={clsx(
        'h-dvh max-h-[880px] overflow-hidden bg-primary-shadow @container',
        className
      )}
    >
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {slides?.map(({ title, description, image, cta }, idx) => {
            return (
              <div key={idx} className="relative h-full w-full min-w-0 shrink-0 grow-0 basis-full">
                <div className="absolute bottom-0 left-1/2 z-10 w-full -translate-x-1/2 bg-gradient-to-t from-foreground to-transparent pb-5 pt-20 text-background">
                  <div className="mx-auto max-w-screen-2xl px-3 pb-8 @xl:px-6 @5xl:px-20">
                    <h1 className="mb-4 font-heading text-5xl font-medium leading-none @2xl:text-8xl">
                      {title}
                    </h1>
                    {description && <p className="max-w-xl">{description}</p>}
                    {cta?.href && (
                      <Button variant="tertiary" className="mt-4">
                        {cta.label}
                      </Button>
                    )}
                  </div>
                </div>

                {image?.src && (
                  <Image
                    src={image.src}
                    placeholder={image.blurDataUrl ? 'blur' : 'empty'}
                    blurDataURL={image.blurDataUrl}
                    alt={image.altText}
                    fill
                    priority
                    sizes="100vw"
                    className="block h-20 w-full object-cover"
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 flex w-full max-w-screen-2xl -translate-x-1/2 flex-wrap items-center px-3 text-background @xl:px-6 @5xl:px-20">
        {/* Progress Buttons */}
        {scrollSnaps.map((_: number, index: number) => {
          return (
            <button
              aria-label={`View image number ${index + 1}`}
              key={index}
              className="rounded-lg px-1.5 py-2 focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => {
                onDotButtonClick(index)
                !isPlaying && toggleAutoplay()
              }}
            >
              <div className="relative overflow-hidden">
                {/* White Bar - Current Index Indicator / Progress Bar */}
                <div
                  className={clsx(
                    'absolute h-0.5 bg-background',
                    'opacity-0 fill-mode-forwards',
                    isPlaying ? 'running' : 'paused',
                    index === selectedIndex
                      ? 'opacity-100 ease-linear animate-in slide-in-from-left'
                      : 'ease-out animate-out fade-out'
                  )}
                  style={{
                    animationDuration: `${index === selectedIndex ? `${interval}ms` : '200ms'}`,
                    width: `${175 / slides.length}px`,
                  }}
                />
                {/* Grey Bar BG */}
                <div
                  className="h-0.5 bg-background opacity-30"
                  style={{ width: `${175 / slides.length}px` }}
                />
              </div>
            </button>
          )
        })}

        {/* Carousel Count - "01/03" */}
        <span className="ml-auto mr-2 mt-px font-mono text-xs">
          {selectedIndex + 1 < 10 ? `0${selectedIndex + 1}` : selectedIndex + 1}/
          {slides.length < 10 ? `0${slides.length}` : slides.length}
        </span>

        {/* Stop / Start Button */}
        <button
          className="flex h-7 w-7 items-center justify-center rounded-lg border border-contrast-300/50 ring-primary transition-opacity duration-300 hover:border-contrast-300/80 focus-visible:outline-0 focus-visible:ring-2"
          onClick={toggleAutoplay}
          type="button"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause strokeWidth={1.5} className="pointer-events-none w-3.5" />
          ) : (
            <Play strokeWidth={1.5} className="pointer-events-none ml-0.5 w-3.5" />
          )}
        </button>
      </div>
    </section>
  )
}

export default Slideshow
