import CategoryCard from '@/vibes/soul//components/category-card'
import HomePage from '@/vibes/soul/components/page-home'

export const heroSlides = [
  {
    title: 'Pro Jerseys',
    image: {
      src: 'https://rstr.in/monogram/vibes/cSJdPlXG9Ug',
      altText: 'alt',
    },
    cta: {
      href: '#',
      label: 'Shop Now',
    },
  },
  {
    title: 'Embrace the Heat',
    image: {
      src: 'https://rstr.in/monogram/vibes/VSkA1mBG78U',
      altText: 'alt',
    },
    cta: {
      href: '#',
      label: 'Shop Now',
    },
  },
  {
    title: 'Embrace the Heat',
    image: {
      src: 'https://rstr.in/monogram/vibes/o_0gBpyrOVe',
      altText: 'alt',
    },
    cta: {
      href: '#',
      label: 'Shop Now',
    },
  },
]

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
  return <HomePage heroSlides={heroSlides} categories={categories} />
}
