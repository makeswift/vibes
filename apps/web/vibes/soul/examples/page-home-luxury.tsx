import { CardProps } from '@/vibes/soul//components/card'
import HomePage from '@/vibes/soul/components/page-home'

export const heroSlides = [
  {
    title: 'Slide 1',
    image: {
      src: 'https://rstr.in/monogram/vibes/2dxdn6-tC-f',
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
      src: 'https://rstr.in/monogram/vibes/WmCjpAXZqIK',
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
      src: 'https://rstr.in/monogram/vibes/Rhn7rAbRFLQ',
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
    label: 'Small Plants',
    image: { src: 'https://rstr.in/monogram/vibes/fRbI7J5z00o', altText: 'Small Plants' },
    href: '#',
  },
  {
    label: 'Low Maintenance',
    image: { src: 'https://rstr.in/monogram/vibes/HxVAMWW90Y6', altText: 'Low Maintenance' },
    href: '#',
  },
  {
    label: 'Indestructible',
    image: { src: 'https://rstr.in/monogram/vibes/vf9FEg1kvz6', altText: 'Indestructible' },
    href: '#',
  },
  {
    label: 'Succulent',
    image: { src: 'https://rstr.in/monogram/vibes/HxVAMWW90Y6', altText: 'Succulent' },
    href: '#',
  },
]

export default function Preview() {
  return <HomePage heroSlides={heroSlides} categories={categories} />
}
