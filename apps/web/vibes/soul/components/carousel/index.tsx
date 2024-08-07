'use client'

import Link from 'next/link'

import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import ScrollBar from '@/vibes/soul/components/carousel/scrollbar'

type Props = {
  title: string
  link?: { label: string; href: string; target?: string }
  children: React.ReactNode
}

export const Carousel = ({ title, link, children }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  return (
    <section className="flex flex-col gap-10 bg-background @container">
      <div className="flex items-center justify-between px-3 pt-3 text-foreground @4xl:px-20 @4xl:pt-20">
        {title && <h2 className="text-2xl font-medium">{title}</h2>}
        {link && (
          <Link href={link.href} target={link.target} className="font-semibold text-foreground">
            {link.label}
          </Link>
        )}
      </div>

      {children && (
        <div className="w-full overflow-hidden px-3 @4xl:px-20" ref={emblaRef}>
          <div className="flex gap-5">{children}</div>
        </div>
      )}

      <div className="flex items-center justify-between px-3 pb-3 @4xl:px-20 @4xl:pb-20">
        <ScrollBar emblaApi={emblaApi} />
        <div className="flex gap-2 text-foreground">
          <button
            role="button"
            className="transition-transform duration-300 hover:-translate-x-1"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ArrowLeft strokeWidth={1.5} />
          </button>
          <button
            role="button"
            className="transition-transform duration-300 hover:translate-x-1"
            onClick={() => emblaApi?.scrollNext()}
          >
            <ArrowRight strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Carousel
