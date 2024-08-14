import { CardProps } from '@/vibes/soul/components/card'
import CardCarousel from '@/vibes/soul/components/card-carousel'

export const cards: CardProps[] = [
  {
    title: 'Men',
    image: { src: 'https://rstr.in/monogram/vibes/CVQwqHQKmz4', altText: 'Men' },
    href: '#',
  },
  {
    title: 'Women',
    image: {
      src: 'https://rstr.in/monogram/vibes/UWfiHOc2RnP',
      altText: 'Women',
    },
    href: '#',
  },
  {
    title: 'Jerseys',
    image: { src: 'https://rstr.in/monogram/vibes/lxY8Fqsk3Gp', altText: 'Jerseys' },
    href: '#',
  },
  {
    title: 'Headwear',
    image: { src: 'https://rstr.in/monogram/vibes/8bPrhQZGr4k', altText: 'Headwear' },
    href: '#',
  },
]

export default function Preview() {
  return <CardCarousel cards={cards} />
}
