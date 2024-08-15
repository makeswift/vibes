import { CardProps } from '@/vibes/soul//components/card'
import HomePage from '@/vibes/soul/components/page-home'

export const heroSlides = [
  {
    title: 'Slide 1',
    image: {
      src: 'https://rstr.in/monogram/vibes/lfmnDUMNWEo',
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
      src: 'https://rstr.in/monogram/vibes/-cqnV6UhvCk',
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
      src: 'https://rstr.in/monogram/vibes/RNZYqBoUs7C/3QYdXXiml_C',
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
    title: 'Small Plants',
    image: { src: 'https://rstr.in/monogram/vibes/DYeoTIrhxZk', altText: 'Small Plants' },
    href: '#',
  },
  {
    title: 'Low Maintenance',
    image: { src: 'https://rstr.in/monogram/vibes/25AJnay0WtU/LiQxF_6c-Sk', altText: 'Low Maintenance' },
    href: '#',
  },
  {
    title: 'Indestructible',
    image: { src: 'https://rstr.in/monogram/vibes/9HSPQU1tr1p', altText: 'Indestructible' },
    href: '#',
  },
  {
    title: 'Succulent',
    image: { src: 'https://rstr.in/monogram/vibes/lJg081kQqvc', altText: 'Succulent' },
    href: '#',
  },
]

export default function Preview() {
  return <HomePage heroSlides={heroSlides} categories={categories} />
}
