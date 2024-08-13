import Card, { CardProps } from '@/vibes/soul/components/card'
import CardCarousel from '@/vibes/soul/components/card-carousel'

export const categories: CardProps[] = [
  {
    label: 'Men',
    image: { src: 'https://rstr.in/monogram/vibes/CVQwqHQKmz4', altText: 'Men' },
    href: '#',
  },
  {
    label: 'Women',
    image: {
      src: 'https://rstr.in/monogram/vibes/UWfiHOc2RnP',
      altText: 'Women',
    },
    href: '#',
  },
  {
    label: 'Jerseys',
    image: { src: 'https://rstr.in/monogram/vibes/lxY8Fqsk3Gp', altText: 'Jerseys' },
    href: '#',
  },
  {
    label: 'Headwear',
    image: { src: 'https://rstr.in/monogram/vibes/8bPrhQZGr4k', altText: 'Headwear' },
    href: '#',
  },
]

export default function Preview() {
  return (
    <CardCarousel>
      {categories.map(card => (
        <Card key={card.label} {...card} />
      ))}
    </CardCarousel>
  )
}
