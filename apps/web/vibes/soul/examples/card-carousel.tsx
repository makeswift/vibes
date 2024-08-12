import CardCarousel from '@/vibes/soul/components/card-carousel'
import CategoryCard from '@/vibes/soul/components/category-card'

export const categories: CategoryCard[] = [
  {
    label: 'Men',
    image: 'https://rstr.in/monogram/vibes/CVQwqHQKmz4',
    ctaLink: { href: '#' },
  },
  {
    label: 'Women',
    image: 'https://rstr.in/monogram/vibes/UWfiHOc2RnP',
    ctaLink: { href: '#' },
  },
  {
    label: 'Jerseys',
    image: 'https://rstr.in/monogram/vibes/lxY8Fqsk3Gp',
    ctaLink: { href: '#' },
  },
  {
    label: 'Headwear',
    image: 'https://rstr.in/monogram/vibes/8bPrhQZGr4k',
    ctaLink: { href: '#' },
  },
]

export default function Preview() {
  return (
    <CardCarousel title="Category" link={{ label: 'See All', href: '#' }}>
      {categories.map(category => (
        <CategoryCard key={category.label} {...category} />
      ))}
    </CardCarousel>
  )
}
