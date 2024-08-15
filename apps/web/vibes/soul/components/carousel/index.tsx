'use client'

import { ComponentPropsWithoutRef, ReactNode, useCallback, useEffect, useState } from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface Props {
  children: ReactNode
}

export const Carousel = ({ children }: Props & ComponentPropsWithoutRef<'div'>) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [progress, setProgress] = useState(0)
  const [scrollbarPosition, setScrollbarPosition] = useState({ width: 0, left: 0 })

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
      setProgress(Math.round(emblaApi.scrollProgress() * 100))
      const totalSlides = emblaApi.slideNodes().length
      const scrollbarWidth = 300 / totalSlides
      const scrollbarLeft = emblaApi.scrollProgress() * (100 - scrollbarWidth)
      setScrollbarPosition({ width: scrollbarWidth, left: scrollbarLeft })
    }

    emblaApi.on('select', onSelect)
    emblaApi.on('scroll', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('scroll', onSelect)
    }
  }, [emblaApi])

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!emblaApi) return
    const newProgress = Number(e.target.value)
    setProgress(newProgress)
    const scrollToPosition = (newProgress / 100) * emblaApi.scrollSnapList().length
    emblaApi.scrollTo(Math.round(scrollToPosition))
  }

  return (
    <section className="mx-auto flex w-full max-w-screen-2xl flex-col gap-10 pt-10 @container">
      {/* Carousel Content */}
      {children && (
        <div className="w-full overflow-hidden px-3 py-0.5 @xl:px-6 @5xl:px-20" ref={emblaRef}>
          <div className="flex gap-2 @4xl:gap-5">{children}</div>
        </div>
      )}

      <div className="flex items-center justify-between px-3 pb-3 @xl:px-6 @4xl:pb-20 @5xl:px-20">
        {/* ScrollBar */}
        <div className="relative flex h-6 w-full max-w-56 items-center overflow-hidden">
          <input
            type="range"
            min={0}
            max={100}
            value={progress}
            onChange={handleProgressChange}
            className="absolute h-full w-full cursor-pointer appearance-none bg-transparent opacity-0"
          />
          {/* Track */}
          <div className="pointer-events-none absolute h-1 w-full rounded-full bg-contrast-100" />

          {/* Bar */}
          <div
            className="pointer-events-none absolute h-1 rounded-full bg-foreground transition-all duration-0 ease-linear"
            style={{
              width: `${scrollbarPosition.width}%`,
              left: `${scrollbarPosition.left}%`,
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2 text-foreground">
          <button
            role="button"
            className="rounded-lg ring-primary transition-colors duration-300 focus-visible:outline-0 focus-visible:ring-2 disabled:pointer-events-none disabled:text-contrast-300"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
          >
            <ArrowLeft strokeWidth={1.5} />
          </button>
          <button
            role="button"
            className="rounded-lg ring-primary transition-colors duration-300 focus-visible:outline-0 focus-visible:ring-2 disabled:pointer-events-none disabled:text-contrast-300"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
          >
            <ArrowRight strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Carousel
