'use client'

import Link from 'next/link'
import { useState } from 'react'

import useEmblaCarousel from 'embla-carousel-react'

import CategoryCard from '@/vibes/soul/components/category-card'
import Arrow from '@/vibes/soul/components/icons/Arrow'
import ProductCard from '@/vibes/soul/components/product-card'

import ScrollBar from './scrollbar'

type Props = {
  title: string
  link: { href: string; target?: string }
  cards: CategoryCard[] | ProductCard[]
}

export const Carousel = ({ title, link, cards }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [progress, setProgress] = useState(0)

  const isProductCard = (card: CategoryCard | ProductCard): card is ProductCard => {
    return (card as ProductCard).name !== undefined
  }

  return (
    <section className="flex flex-col gap-10 bg-background @container">
      <div className="flex items-center justify-between px-3 pt-3 text-foreground @4xl:px-20 @4xl:pt-20">
        {title && <h2 className="text-2xl font-medium">{title}</h2>}
        {link && (
          <Link href={link.href} target={link.target} className="font-semibold text-foreground">
            See All
          </Link>
        )}
      </div>

      {cards && (
        <div className="no-scrollbar w-full overflow-hidden px-3 @4xl:px-20" ref={emblaRef}>
          <div className="flex gap-5">
            {cards.map((card, index) =>
              isProductCard(card) ? (
                <ProductCard
                  key={index}
                  {...card}
                  className="max-h-[218px] min-w-[179px] @4xl:max-h-[568px] @4xl:min-w-[466px]"
                />
              ) : (
                <CategoryCard key={index} {...card} />
              )
            )}
          </div>
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
