'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import ScrollBar from '@/vibes/soul/components/card-carousel/scrollbar'

type Props = {
  title: string
  link?: { label: string; href: string; target?: string }
  children: React.ReactNode
}

export const CardCarousel = ({ title, link, children }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  const onSelect = () => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <section className="flex flex-col gap-10 bg-background @container">
      <div className="flex items-center justify-between px-3 pt-3 text-foreground @xl:px-6 @4xl:pt-20 @5xl:px-20">
        {title && <h2 className="text-2xl font-medium">{title}</h2>}
        {link && (
          <Link href={link.href} target={link.target} className="font-semibold text-foreground">
            {link.label}
          </Link>
        )}
      </div>

      {children && (
        <div className="w-full overflow-hidden px-3 @xl:px-6 @5xl:px-20" ref={emblaRef}>
          <div className="flex gap-5">{children}</div>
        </div>
      )}

      <div className="flex items-center justify-between px-3 pb-3 @xl:px-6 @4xl:pb-20 @5xl:px-20">
        <ScrollBar emblaApi={emblaApi} />
        <div className="flex gap-2 text-foreground">
          <button
            role="button"
            className="transition-[colors,transform] duration-300 hover:-translate-x-1 disabled:pointer-events-none disabled:text-contrast-300"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
          >
            <ArrowLeft strokeWidth={1.5} />
          </button>
          <button
            role="button"
            className="transition-[colors,transform] duration-300 hover:translate-x-1 disabled:pointer-events-none disabled:text-contrast-300"
            onClick={scrollNext}
            disabled={!canScrollNext}
          >
            <ArrowRight strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CardCarousel
