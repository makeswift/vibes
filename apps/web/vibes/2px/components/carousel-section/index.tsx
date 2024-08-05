'use client'

import { useRef } from 'react'

import { cn } from '@/lib/utils'
import { ChevronLeftIcon } from '@/vibes/2px/components/icons/ChevronLeftIcon'

import './index.css'

export type Slide = {
  item?: React.ReactNode
  link?: {
    href: string
    target?: '_self' | '_blank'
  }
}

interface Props {
  className?: string
  title?: string
  loop?: boolean
  autoplay?: number
  slides: Slide[]
  itemsShown?: number
  mobileItemsShown?: number
  showDots?: boolean
  showArrows: boolean
}

export default function CarouselSection({ className, title, slides, showArrows }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section
      className={cn(
        'overflow-hidden border-t-2 border-foreground bg-background font-body text-foreground',
        className
      )}
    >
      <div className="flex w-full items-center justify-between border-b-2 border-foreground px-3 py-1 @lg:border-b-0">
        <h2 className="text-2xl font-medium leading-[2.25rem] -tracking-[0.0175rem]">{title}</h2>
        {showArrows && (
          <div className="flex justify-center gap-2">
            <button onClick={scrollLeft}>
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
            <button onClick={scrollRight}>
              <ChevronLeftIcon className="h-4 w-4 rotate-180" />
            </button>
          </div>
        )}
      </div>
      <div className="carousel hide-scrollbar flex w-full overflow-scroll" ref={carouselRef}>
        {slides.map((slide, index) => (
          <a href={slide.link?.href || undefined} key={index} className={cn()}>
            {slide.item}
          </a>
        ))}
      </div>
    </section>
  )
}
