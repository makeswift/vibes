import { CardProps } from '@/vibes/soul//components/card'
import HomePage from '@/vibes/soul/components/page-home'

export const heroSlides = [
  {
    title: 'Embrace the Heat',
    image: {
      src: 'https://rstr.in/monogram/vibes/ij1KKiLkmKb',
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
      src: 'https://rstr.in/monogram/vibes/o_0gBpyrOVe',
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
      src: 'https://rstr.in/monogram/vibes/VSkA1mBG78U',
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
    label: 'Men',
    image: { src: 'https://rstr.in/monogram/vibes/CVQwqHQKmz4', altText: 'Men' },
    href: '#',
  },
  {
    label: 'Women',
    image: { src: 'https://rstr.in/monogram/vibes/UWfiHOc2RnP', altText: 'Women' },
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
  return <HomePage heroSlides={heroSlides} categories={categories} />
}
