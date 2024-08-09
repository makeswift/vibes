import CategoryCard from '@/vibes/soul//components/category-card'
import HomePage from '@/vibes/soul/components/page-home'

export const heroSlides = [
  {
    heading: 'Slide 1',
    image: {
      url: 'https://rstr.in/monogram/vibes/2dxdn6-tC-f',
      alt: 'alt',
    },
    link: {
      href: '/',
      target: '_self',
    },
  },
  {
    heading: 'Slide 2',
    image: {
      url: 'https://rstr.in/monogram/vibes/WmCjpAXZqIK',
      alt: 'alt',
    },
    link: {
      href: '/',
      target: '_self',
    },
  },
  {
    heading: 'Slide 3',
    image: {
      url: 'https://rstr.in/monogram/vibes/Rhn7rAbRFLQ',
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
    label: 'Small Plants',
    image: 'https://rstr.in/monogram/vibes/fRbI7J5z00o',
    ctaLink: { href: '/small-plants' },
  },
  {
    label: 'Low Maintenance',
    image: 'https://rstr.in/monogram/vibes/HxVAMWW90Y6',
    ctaLink: { href: '/low-maintenance-plants' },
  },
  {
    label: 'Indestructible',
    image: 'https://rstr.in/monogram/vibes/vf9FEg1kvz6',
    ctaLink: { href: '/indestructible-plants' },
  },
  {
    label: 'Succulent',
    image: 'https://rstr.in/monogram/vibes/HxVAMWW90Y6',
    ctaLink: { href: '/succulent-plants' },
  },
]

export default function Preview() {
  return <HomePage heroSlides={heroSlides} categories={categories} />
}
