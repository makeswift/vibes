import CategoryCard from '@/vibes/soul//components/category-card'
import HomePage from '@/vibes/soul/components/page-home'

export const heroSlides = [
  {
    title: 'Slide 1',
    image: {
      src: 'https://rstr.in/monogram/vibes/2dxdn6-tC-f',
      altText: 'alt',
    },
    cta: {
      href: '/',
      label: 'Button',
    },
  },
  {
    title: 'Slide 2',
    image: {
      src: 'https://rstr.in/monogram/vibes/WmCjpAXZqIK',
      altText: 'alt',
    },
    cta: {
      href: '/',
      label: 'Button',
    },
  },
  {
    title: 'Slide 3',
    image: {
      src: 'https://rstr.in/monogram/vibes/Rhn7rAbRFLQ',
      altText: 'alt',
    },
    cta: {
      href: '/',
      label: 'Button',
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
