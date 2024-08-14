import Card, { CardProps } from '@/vibes/soul/components/card'
import Carousel from '@/vibes/soul/components/carousel'

interface Props {
  cards: CardProps[]
  className?: string
}

export const CardCarousel = function CardCarousel({ cards, className = '' }: Props) {
  return (
    <Carousel className={className}>
      {cards.map(card => (
        <Card key={card.title} {...card} />
      ))}
    </Carousel>
  )
}

export default CardCarousel
