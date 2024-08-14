'use client'

import Image from 'next/image'
import React, { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react'

import clsx from 'clsx'
import { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

import Button from '@/vibes/eclipse/components/button'

// Utility function to constrain a number within a range
const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

// Constants for tween factors
const TWEEN_SCALE_FACTOR_BASE = 0.12
const TWEEN_OPACITY_FACTOR_BASE = 0.75
const TWEEN_GLOW_OPACITY_FACTOR_BASE = 0.5

// Custom hook for dot button functionality
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

    emblaApi.on('reInit', onInit).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  }
}

// DotButton component
type DotButtonPropType = PropsWithChildren<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>

const DotButton: React.FC<DotButtonPropType> = props => {
  const { children, ...restProps } = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}

// Slide type
type Slide = {
  title?: string
  text?: string
  buttonText?: string
  buttonLink: string
  image?: string
  imageAlt: string
}

// Main EmblaCarousel component
type EmblaCarouselPropType = {
  className?: string
  slides: Slide[]
  options?: EmblaOptionsType
}

const Carousel: React.FC<EmblaCarouselPropType> = props => {
  const { slides, options, className } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenScaleFactor = useRef(0)
  const tweenOpacityFactor = useRef(0)
  const tweenGlowOpacityFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  // Setters for tween factors and nodes
  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map(slideNode => {
      return slideNode.querySelector('.embla__slide__number') as HTMLElement
    })
  }, [])

  const setTweenScaleFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenScaleFactor.current = TWEEN_SCALE_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const setTweenOpacityFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenOpacityFactor.current = TWEEN_OPACITY_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const setTweenGlowOpacityFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenGlowOpacityFactor.current =
      TWEEN_GLOW_OPACITY_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  // Tween functions
  const tweenScale = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach(slideIndex => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach(loopItem => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenScaleFactor.current)
        const scale = numberWithinRange(tweenValue, 0, 1).toString()
        const tweenNode = tweenNodes.current[slideIndex]
        tweenNode.style.transform = `scale(${scale})`
      })
    })
  }, [])

  const tweenOpacity = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach(slideIndex => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach(loopItem => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenOpacityFactor.current)
        const opacity = numberWithinRange(tweenValue, 0, 1).toString()
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity
      })
    })
  }, [])

  const tweenGlowOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'
      const threshold = 0.1 // More aggressive threshold for sharper transition

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach(slideIndex => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach(loopItem => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const distance = Math.abs(diffToTarget)
          const glowOpacity = numberWithinRange(1 - distance / threshold, 0, 1).toString()
          emblaApi
            .slideNodes()
            // eslint-disable-next-line no-unexpected-multiline
            [slideIndex].style.setProperty('--glow-opacity', glowOpacity)
        })
      })
    },
    []
  )

  // Effect to initialize and set up event listeners
  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenScaleFactor(emblaApi)
    setTweenOpacityFactor(emblaApi)
    setTweenGlowOpacityFactor(emblaApi)
    tweenScale(emblaApi)
    tweenOpacity(emblaApi)
    tweenGlowOpacity(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenScaleFactor)
      .on('reInit', setTweenOpacityFactor)
      .on('reInit', setTweenGlowOpacityFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)
      .on('reInit', tweenGlowOpacity)
      .on('scroll', tweenGlowOpacity)
      .on('slideFocus', tweenGlowOpacity)
  }, [
    emblaApi,
    setTweenNodes,
    setTweenScaleFactor,
    setTweenOpacityFactor,
    setTweenGlowOpacityFactor,
    tweenScale,
    tweenOpacity,
    tweenGlowOpacity,
  ])

  const textRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-text')
          } else {
            entry.target.classList.remove('animate-text')
          }
        })
      },
      { threshold: 0.85 }
    )

    const currentRefs = textRefs.current

    currentRefs.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => {
      currentRefs.forEach(ref => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <div className="embla w-full @container">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container touch-[pan-y_pinch-zoom] flex">
          {slides.map((slide, index) => (
            <div
              className="embla__slide shrink-0 grow-0 basis-5/6 [transform:translate3d(0,0,0)] before:absolute before:-inset-3 before:-z-20 before:rounded-full before:bg-primary/25 before:opacity-[var(--glow-opacity)] before:blur-3xl before:transition-opacity @lg:basis-3/4 @2xl:basis-4/6 lg:before:-inset-4"
              key={index}
            >
              <div className="embla__slide__number h-full w-full rounded-[32px] bg-gradient-to-b from-primary/25 to-background/50 p-2 ring-1 ring-primary/20">
                <div className="relative z-0 overflow-hidden rounded-3xl">
                  {slide.image && (
                    <Image
                      src={slide.image}
                      alt={slide.imageAlt}
                      fill
                      className="absolute inset-0 -z-10 w-full rounded-3xl object-cover"
                    />
                  )}
                  <div
                    className="flex aspect-square w-full flex-col items-start justify-end gap-x-8 gap-y-4 bg-gradient-to-b from-transparent from-50% to-background/80 p-4 @2xl:aspect-video @2xl:flex-row @2xl:items-end @2xl:p-5"
                    ref={el => {
                      textRefs.current[index] = el
                    }}
                  >
                    <div className="@2xl:flex-1">
                      <h2 className="text-balance font-medium text-foreground">{slide.title}</h2>
                      <p className="text-balance text-sm text-foreground/60">{slide.text}</p>
                    </div>

                    <Button
                      link={{ href: slide.buttonLink }}
                      borderGlow={false}
                      variant="secondary"
                      size="small"
                    >
                      {slide.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-3">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={clsx(
              'embla__dot relative m-0 inline-flex h-5 w-[1.5rem] cursor-pointer touch-manipulation items-center justify-center after:h-0.5 after:w-full after:items-center after:justify-center after:bg-foreground/20',
              index === selectedIndex
                ? 'embla__dot--selected before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-full before:-translate-y-1/2 before:bg-primary before:transition-all before:duration-300 before:ease-out'
                : 'before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-0 before:-translate-y-1/2 before:bg-primary before:transition-all before:duration-300 before:ease-out'
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
