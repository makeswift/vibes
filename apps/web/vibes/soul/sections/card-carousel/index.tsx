import { clsx } from 'clsx'

import { Card, CardProps, CardSkeleton } from '@/vibes/soul/primitives/card'
import { Carousel } from '@/vibes/soul/primitives/carousel'

interface Props {
  cards: (CardProps & { id: string })[]
  textContrast?: 'light' | 'dark'
  className?: string
}

export const CardCarousel = function CardCarousel({ cards, textContrast, className = '' }: Props) {
  return (
    <Carousel className={clsx('pt-7', className)}>
      {cards.length > 0
        ? cards.map(card => <Card key={card.id} {...card} textContrast={textContrast} />)
        : Array.from({ length: 5 }).map((_, index) => <CardSkeleton key={index} />)}
    </Carousel>
  )
}
