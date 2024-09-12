import { CardProps } from '@/vibes/soul/components/card'
import { CardCarousel } from '@/vibes/soul/components/card-carousel'

export const cards: CardProps[] = [
  {
    id: '1',
    title: 'Flats',
    image: { src: 'https://rstr.in/monogram/vibes/YXr3BKEq3T4/j4d8DXT8gGB', altText: 'Flats' },
    href: '#',
  },
  {
    id: '2',
    title: 'Boots',
    image: {
      src: 'https://rstr.in/monogram/vibes/EnWYvct7gIR',
      altText: 'Boots',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Loafers',
    image: {
      src: 'https://rstr.in/monogram/vibes/--JXxhCGkan',
      altText: 'Loafers',
    },
    href: '#',
  },
  {
    id: '4',
    title: 'Sneakers',
    image: { src: 'https://rstr.in/monogram/vibes/w8kVrtse8Id/mO9ju-R1-8L', altText: 'Sneakers' },
    href: '#',
  },
  {
    id: '5',
    title: 'Heels',
    image: { src: 'https://rstr.in/monogram/vibes/jD25Jjm0zbT', altText: 'Heels' },
    href: '#',
  },
]

export const textContrast = 'dark'

export default function Preview() {
  return <CardCarousel cards={cards} textContrast={textContrast} />
}
