import { Carousel } from '@/vibes/soul/components/carousel'
import CategoryCard from '@/vibes/soul/components/category-card'

const categories: CategoryCard[] = [
  {
    label: 'Men',
    image: 'https://rstr.in/monogram/vibes/CVQwqHQKmz4',
    ctaLink: { href: '/men' },
  },
  {
    label: 'Women',
    image: 'https://rstr.in/monogram/vibes/UWfiHOc2RnP',
    ctaLink: { href: '/women' },
  },
  {
    label: 'Jerseys',
    image: 'https://rstr.in/monogram/vibes/lxY8Fqsk3Gp',
    ctaLink: { href: '/jerseys' },
  },
  {
    label: 'Headwear',
    image: 'https://rstr.in/monogram/vibes/8bPrhQZGr4k',
    ctaLink: { href: '/headwear' },
  },
]

export default function Preview() {
  return (
    <div className="min-h-48">
      <Carousel title="Category" link={{ href: '/' }} cards={categories} />
    </div>
  )
}
