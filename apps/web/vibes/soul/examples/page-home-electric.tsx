import CategoryCard from '@/vibes/soul//components/category-card'
import HomePage from '@/vibes/soul/components/page-home'

export const heroSlides = [
  {
    heading: 'Pro Jerseys',
    image: {
      url: 'https://rstr.in/monogram/vibes/cSJdPlXG9Ug',
      alt: 'alt',
    },
    link: {
      href: '/',
      target: '_self',
    },
  },
  {
    heading: 'Embrace the Heat',
    image: {
      url: 'https://rstr.in/monogram/vibes/VSkA1mBG78U',
      alt: 'alt',
    },
    link: {
      href: '/',
      target: '_self',
    },
  },
  {
    heading: 'Embrace the Heat',
    image: {
      url: 'https://rstr.in/monogram/vibes/o_0gBpyrOVe',
      alt: 'alt',
    },
    link: {
      href: '/',
      target: '_self',
    },
  },
]

export const categories: CategoryCard[] = [
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
  return <HomePage heroSlides={heroSlides} categories={categories} />
}
