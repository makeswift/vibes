import clsx from 'clsx'

import Card, { CardProps, CardSkeleton } from '@/vibes/soul/components/card'
import Carousel from '@/vibes/soul/components/carousel'

interface Props {
  cards: CardProps[]
  className?: string
}

export const CardCarousel = function CardCarousel({ cards, className = '' }: Props) {
  return (
    <Carousel className={clsx('pt-7', className)}>
      {cards && cards.length > 0
        ? cards.map(card => <Card key={card.title} {...card} />)
        : Array.from({ length: 5 }).map((_, index) => <CardSkeleton key={index} />)}
    </Carousel>
  )
}

export default CardCarousel
