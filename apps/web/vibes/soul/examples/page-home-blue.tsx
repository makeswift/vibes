import CategoryCard from '@/vibes/soul//components/category-card'
import HomePage from '@/vibes/soul/components/page-home'

export const heroSlides = [
  {
    title: 'New Casuals',
    image: {
      src: 'https://rstr.in/monogram/vibes/Nz2yR4EZgvo',
      altText: 'alt',
    },
    cta: {
      href: '/',
      lable: 'Button',
    },
  },
  {
    title: 'Slide 2',
    image: {
      src: 'https://rstr.in/monogram/vibes/gWgyEhm5W60',
      altText: 'alt',
    },
    cta: {
      href: '/',
      lable: 'Button',
    },
  },
  {
    title: 'Slide 3',
    image: {
      src: 'https://rstr.in/monogram/vibes/K-F83RXTJsx',
      altText: 'alt',
    },
    cta: {
      href: '/',
      lable: 'Button',
    },
  },
]

export const categories: CategoryCard[] = [
  {
    label: 'Men',
    image: 'https://rstr.in/monogram/vibes/ptJ724KlDom',
    ctaLink: { href: '/men' },
  },
  {
    label: 'Women',
    image: 'https://rstr.in/monogram/vibes/P3yw1GHGDuv',
    ctaLink: { href: '/women' },
  },
  {
    label: 'Footwear',
    image: 'https://rstr.in/monogram/vibes/XG-Zqe3Y2xH',
    ctaLink: { href: '/footwear' },
  },
  {
    label: 'Headwear',
    image: 'https://rstr.in/monogram/vibes/ayf5JcyknJ4',
    ctaLink: { href: '/headwear' },
  },
]

export default function Preview() {
  return <HomePage heroSlides={heroSlides} categories={categories} />
}
