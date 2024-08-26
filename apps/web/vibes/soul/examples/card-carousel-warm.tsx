import { CardProps } from '@/vibes/soul/components/card'
import CardCarousel from '@/vibes/soul/components/card-carousel'

export const cards: CardProps[] = [
  {
    title: 'Bags',
    image: { src: 'https://rstr.in/monogram/vibes/EpL5yspw4Pc', altText: 'Men' },
    href: '#',
  },
  {
    title: 'Bags',
    image: { src: 'https://rstr.in/monogram/vibes/aS3laRWb4yA', altText: 'Women' },
    href: '#',
  },
  {
    title: 'Bags',
    image: { src: 'https://rstr.in/monogram/vibes/LznMEk1GSB1', altText: 'Jerseys' },
    href: '#',
  },
  {
    title: 'Bags',
    image: { src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9', altText: 'Headwear' },
    href: '#',
  },
]

export default function Preview() {
  return <CardCarousel cards={cards} />
}
