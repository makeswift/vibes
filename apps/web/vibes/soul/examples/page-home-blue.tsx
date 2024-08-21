import { CardProps } from '@/vibes/soul//components/card'
import HomePage from '@/vibes/soul/components/page-home'

export const heroSlides = [
  {
    title: 'New Casuals',
    image: {
      src: 'https://rstr.in/monogram/vibes/Nz2yR4EZgvo',
      altText: 'alt',
    },
    cta: {
      href: '#',
      label: 'Shop Now',
    },
  },
  {
    title: 'Slide 2',
    image: {
      src: 'https://rstr.in/monogram/vibes/gWgyEhm5W60',
      altText: 'alt',
    },
    cta: {
      href: '#',
      label: 'Shop Now',
    },
  },
  {
    title: 'Slide 3',
    image: {
      src: 'https://rstr.in/monogram/vibes/K-F83RXTJsx',
      altText: 'alt',
    },
    cta: {
      href: '#',
      label: 'Shop Now',
    },
  },
]

export const categories: CardProps[] = [
  {
    title: 'Men',
    image: { src: 'https://rstr.in/monogram/vibes/ptJ724KlDom', altText: 'Men' },
    href: '#',
  },
  {
    title: 'Women',
    image: { src: 'https://rstr.in/monogram/vibes/P3yw1GHGDuv', altText: 'Women' },
    href: '#',
  },
  {
    title: 'Footwear',
    image: { src: 'https://rstr.in/monogram/vibes/XG-Zqe3Y2xH', altText: 'Footwear' },
    href: '#',
  },
  {
    title: 'Headwear',
    image: { src: 'https://rstr.in/monogram/vibes/ayf5JcyknJ4', altText: 'Headwear' },
    href: '#',
  },
]

export default function Preview() {
  return <HomePage heroSlides={heroSlides} categories={categories} />
}
