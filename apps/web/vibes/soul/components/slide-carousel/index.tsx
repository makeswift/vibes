'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

import clsx from 'clsx'
import { EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { Pause, Play } from 'lucide-react'

interface Props {
  title: string
  content: {
    image: {
      src: string
      altText: string
    }
    label?: React.ReactNode
  }[]
  interval?: number
}

interface UseProgressButtonType {
  selectedIndex: number
  scrollSnaps: number[]
  onProgressButtonClick: (index: number) => void
}

const useProgressButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UseProgressButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onProgressButtonClick = useCallback(
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
    onProgressButtonClick,
  }
}

const SlideCarousel = ({ title, content, interval = 6000 }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 75, dragFree: true, align: 'center' },
    [Autoplay({ delay: interval })]
  )
  const [emblaRefMag, emblaApiMag] = useEmblaCarousel(
    { loop: true, duration: 75, dragFree: true, align: 'center' },
    [Autoplay({ delay: interval })]
  )
  const { selectedIndex, scrollSnaps, onProgressButtonClick } = useProgressButton(emblaApi)
  const [playCount, setPlayCount] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
    playOrStop()

    setIsPlaying(autoplay.isPlaying())
  }, [emblaApi])

  const resetAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    autoplay.reset()
  }, [emblaApi])

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    setIsPlaying(autoplay.isPlaying())
    emblaApi
      .on('autoplay:play', () => {
        setIsPlaying(true)
        setPlayCount(playCount + 1)
      })
      .on('autoplay:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoplay.isPlaying()))
  }, [emblaApi, playCount])

  return (
    <section className="flex min-h-dvh flex-col justify-between overflow-hidden @container">
      {title && (
        <h2 className="mx-auto max-w-screen-2xl px-5 pb-44 pt-20 text-center text-5xl font-medium leading-none tracking-tight @4xl:pt-40 @4xl:text-7xl">
          {title}
        </h2>
      )}

      <div className="relative">
        {/* Background Carousel */}
        <div ref={emblaRef}>
          <div className="flex">
            {content.concat(content).map(({ image, label }, index) => (
              // Image
              <div
                key={index}
                className={clsx(
                  'relative ml-2.5 aspect-[3/4] h-[480px] min-w-0 max-w-[320px] shrink-0 grow-0 basis-full bg-contrast-100',
                  index === selectedIndex ? '' : ''
                )}
              >
                {/* Label */}
                {label && <div className="absolute right-2 top-2 z-10">{label}</div>}

                <Image
                  src={image.src}
                  alt={image.altText}
                  fill
                  className={clsx('select-none object-cover')}
                />

                <span className="absolute bottom-0 left-0">{index}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Magnified Carousel */}
        <div
          ref={emblaRefMag}
          className="absolute bottom-0 left-1/2 h-[560px] w-[520px] -translate-x-1/2 overflow-hidden bg-background"
        >
          <div className="flex h-full">
            {content.concat(content).map(({ image, label }, index) => (
              // Image
              <div
                key={index}
                className="relative ml-2.5 aspect-[3/4] w-full min-w-0 shrink-0 grow-0 basis-full bg-contrast-100"
              >
                {/* Label */}
                {label && <div className="absolute right-2 top-2 z-10">{label}</div>}

                <Image
                  src={image.src}
                  alt={image.altText}
                  fill
                  className={clsx('select-none object-cover')}
                />

                <span className="absolute bottom-0 left-0">{index}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between px-3 pb-3 pt-3 @xl:px-6 @5xl:px-20">
        <div className="flex flex-wrap justify-start">
          {/* Progress Buttons */}
          {scrollSnaps.map((_: number, index: number) => {
            return (
              <button
                aria-label={`View image number ${index + 1}`}
                key={index}
                className="rounded-lg px-1.5 py-2 focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => {
                  onProgressButtonClick(index)
                  resetAutoplay()
                }}
              >
                <div className="relative overflow-hidden">
                  {/* White Bar - Current Index Indicator / Progress Bar */}
                  <div
                    key={`progress-${playCount}`} // Force the animation to restart when pressing "Play", to match animation with embla's autoplay timer
                    className={clsx(
                      'absolute h-0.5 bg-foreground',
                      'opacity-0 fill-mode-forwards',
                      isPlaying ? 'running' : 'paused',
                      index === selectedIndex
                        ? 'opacity-100 ease-linear animate-in slide-in-from-left'
                        : 'ease-out animate-out fade-out'
                    )}
                    style={{
                      animationDuration: `${index === selectedIndex ? `${interval}ms` : '200ms'}`,
                      width: `${175 / content.length}px`,
                    }}
                  />
                  {/* Grey Bar BG */}
                  <div
                    className="h-0.5 bg-contrast-100"
                    style={{ width: `${175 / content.length}px` }}
                  />
                </div>
              </button>
            )
          })}
        </div>
        {/* Stop / Start Button */}
        <button
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-contrast-300/50 bg-background ring-primary transition-opacity duration-300 hover:border-contrast-300/80 focus-visible:outline-0 focus-visible:ring-2"
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

export default SlideCarousel
