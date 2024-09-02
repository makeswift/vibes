'use client'

import { useRef } from 'react'

import { cn } from '@/lib/utils'
import { ChevronLeftIcon } from '@/vibes/2px/components/icons/ChevronLeftIcon'

import Styles from './index.module.css'

interface Props {
  className?: string
  title?: string
  items: React.ReactNode[]
  showArrows: boolean
}

export default function CarouselSection({ className, title, items, showArrows }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth
      if (carouselRef.current.scrollLeft === 0) {
        carouselRef.current.scrollTo({ left: carouselRef.current.scrollWidth, behavior: 'smooth' })
      } else {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      }
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth

      if (
        Math.ceil(carouselRef.current.scrollLeft + scrollAmount) >= carouselRef.current.scrollWidth
      ) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  return (
    <section
      className={cn(
        'overflow-hidden border-t-2 border-foreground bg-background font-body text-foreground',
        className
      )}
    >
      <div className="flex w-full items-center justify-between border-b-2 border-foreground px-3 py-1">
        <h2 className="text-2xl font-medium leading-9 -tracking-[0.01em]">{title}</h2>
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
      <div
        className={cn('flex w-full overflow-scroll', Styles['hide-scrollbar'])}
        ref={carouselRef}
      >
        {items.map((item, index) => (
          <div key={index} className="h-fit">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
