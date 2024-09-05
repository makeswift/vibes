import { CardProps } from '@/vibes/soul/components/card'
import { CardCarousel } from '@/vibes/soul/components/card-carousel'

export const cards: CardProps[] = [
  {
    title: 'Small Plants',
    image: { src: 'https://rstr.in/monogram/vibes/DYeoTIrhxZk', altText: 'Small Plants' },
    href: '#',
  },
  {
    title: 'Low Maintenance',
    image: {
      src: 'https://rstr.in/monogram/vibes/25AJnay0WtU/LiQxF_6c-Sk',
      altText: 'Low Maintenance',
    },
    href: '#',
  },
  {
    title: 'Indestructible',
    image: { src: 'https://rstr.in/monogram/vibes/9HSPQU1tr1p', altText: 'Indestructible' },
    href: '#',
  },
  {
    title: 'Succulent',
    image: { src: 'https://rstr.in/monogram/vibes/lJg081kQqvc', altText: 'Succulent' },
    href: '#',
  },
]

export const textContrast = 'dark'

export default function Preview() {
  return <CardCarousel cards={cards} textContrast={textContrast} />
}
