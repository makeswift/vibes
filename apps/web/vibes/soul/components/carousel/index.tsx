'use client'

import Link from 'next/link'

import useEmblaCarousel from 'embla-carousel-react'

import Arrow from '@/vibes/soul/components/icons/Arrow'

import ScrollBar from './scrollbar'

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
        <div className="no-scrollbar w-full overflow-hidden px-3 @4xl:px-20" ref={emblaRef}>
          <div className="flex gap-5">{children}</div>
        </div>
      )}

      <div className="flex items-center justify-between px-3 pb-3 @4xl:px-20 @4xl:pb-20">
        <ScrollBar emblaApi={emblaApi} />
        <div className="flex gap-1.5">
          <button
            role="button"
            className="transition-transform duration-300 hover:-translate-x-1"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <Arrow direction="left" />
          </button>
          <button
            role="button"
            className="transition-transform duration-300 hover:translate-x-1"
            onClick={() => emblaApi?.scrollNext()}
          >
            <Arrow direction="right" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Carousel
