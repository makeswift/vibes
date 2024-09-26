'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { clsx } from 'clsx'

interface Props {
  title: string
  content: {
    image: {
      src: string
      altText: string
    }
    label?: React.ReactNode
  }[]
}

export const SlideCarousel = ({ title, content }: Props) => {
  const adjustedContent = [...content, content[0]]
  const totalSlides = adjustedContent.length

  return (
    <section className="relative flex min-h-dvh flex-col justify-between overflow-hidden @container">
      <h2 className="mx-auto max-w-screen-2xl px-5 pb-44 pt-20 text-center text-5xl font-medium leading-none tracking-tight @4xl:pt-40 @4xl:text-7xl">
        {title}
      </h2>

      {/* Carousels Container */}
      <div className="mx-auto flex w-full max-w-screen-2xl items-end overflow-hidden">
        {/* Background Left Carousel */}
        <div className="w-1/2 overflow-hidden">
          <CarouselTrack
            id={1}
            adjustedContent={adjustedContent}
            trackClassName="gap-2.5"
            imageClassName="h-[480px] max-w-[320px]"
            staggeredIndex={totalSlides - 2}
          />
        </div>

        {/* Magnified Carousel */}
        <div className="z-10 h-[560px] w-full max-w-[520px] shrink-0 overflow-hidden bg-background">
          <CarouselTrack
            id={2}
            adjustedContent={adjustedContent}
            imageClassName="h-full"
            trackClassName="gap-2.5"
          />
        </div>

        {/* Right Side Carousel */}
        <div className="w-[20%] overflow-hidden">
          <CarouselTrack
            id={3}
            adjustedContent={adjustedContent}
            imageClassName="h-[480px] max-w-[320px]"
            staggeredIndex={1}
            trackClassName="gap-2.5"
          />
        </div>
      </div>
    </section>
  )
}

interface TrackProps {
  id?: number
  adjustedContent: Props['content']
  staggeredIndex?: number
  trackClassName?: string
  imageClassName: string
}

const CarouselTrack = ({
  adjustedContent,
  staggeredIndex,
  trackClassName,
  imageClassName,
}: TrackProps) => {
  const [selectedIndex, setSelectedIndex] = useState(staggeredIndex ?? 0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [imageWidth, setImageWidth] = useState(0)
  // const [imageLeftOffset, setImageLeftOffset] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const totalSlides = adjustedContent.length

  // Auto slide carousel, when restarting from beginning, interval is set to 0
  useEffect(() => {
    const intervalId = setInterval(
      () => {
        setSelectedIndex(prevIndex => (prevIndex + 1) % totalSlides)
      },
      isTransitioning ? 4000 : 0
    )

    return () => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalSlides, selectedIndex])
  // Note: when adding isTransitioning to the dependency array, the animation breaks

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (selectedIndex === totalSlides - 1) {
        setIsTransitioning(false)
      } else {
        setIsTransitioning(true)
      }
    }
    const trackElement = trackRef.current
    if (trackElement) {
      trackElement.addEventListener('transitionend', handleTransitionEnd)
    }
    return () => {
      if (trackElement) {
        trackElement.removeEventListener('transitionend', handleTransitionEnd)
      }
    }
  }, [selectedIndex, totalSlides])

  useEffect(() => {
    setIsTransitioning(true)
  }, [selectedIndex])

  // Get the width of the image for the translateX value
  useEffect(() => {
    const updateDimensions = () => {
      if (imageRef.current && trackRef.current) {
        setImageWidth(imageRef.current.offsetWidth)
      }
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  useEffect(() => {
    const slideAmount = selectedIndex * imageWidth + selectedIndex * 10
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(calc(-${slideAmount}px))`
    }
  }, [selectedIndex, imageWidth])

  return (
    // Carousel Track
    <div
      className={clsx('flex h-full px-2.5', trackClassName)}
      style={{
        // transform: `translateX(calc(-${selectedIndex * imageWidth}px + ${selectedIndex * 10}px))`,
        transition: isTransitioning ? 'transform 2s cubic-bezier(0.470, 0.290, 0.140, 0.905)' : '',
      }}
      ref={trackRef}
    >
      {adjustedContent.map(({ image, label }, index) => (
        // Image Div
        <div
          key={index}
          id={`slide-${index}`}
          ref={imageRef}
          className={clsx(
            'relative aspect-[3/4] min-w-0 shrink-0 grow-0 basis-full bg-contrast-100',
            imageClassName
          )}
        >
          {/* Label */}
          {label != null && label !== '' && (
            <div className="absolute right-2 top-2 z-10">{label}</div>
          )}
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
  )
}
