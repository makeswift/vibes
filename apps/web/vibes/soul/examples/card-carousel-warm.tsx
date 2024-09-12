import { CardProps } from '@/vibes/soul/components/card'
import { CardCarousel } from '@/vibes/soul/components/card-carousel'

export const cards: CardProps[] = [
  {
    id: '1',
    title: 'Handlebar Bags',
    image: {
      src: 'https://rstr.in/monogram/vibes/LznMEk1GSB1',
      altText: 'Handlebar Bags',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'Frame Bags',
    image: {
      src: 'https://rstr.in/monogram/vibes/uh4Y3aF2rqO/KBtATLbT344',
      altText: 'Frame Bags',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Seat Bags',
    image: { src: 'https://rstr.in/monogram/vibes/MZX8-yya26e', altText: 'Seat Bags' },
    href: '#',
  },
  {
    id: '4',
    title: 'Rack Bags',
    image: { src: 'https://rstr.in/monogram/vibes/BplFmXgFkEY/Y6W895XQAah', altText: 'Succulent' },
    href: '#',
  },
]

export const textContrast = 'light'

export default function Preview() {
  return <CardCarousel cards={cards} textContrast={textContrast} />
}
