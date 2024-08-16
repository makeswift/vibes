import { CardProps } from '@/vibes/soul//components/card'
import { Product } from '@/vibes/soul//components/product-card'
import HomePage from '@/vibes/soul/components/page-home'

export const heroSlides = [
  {
    title: 'Give',
    image: {
      src: 'https://rstr.in/monogram/vibes/fzVuE9iZ4mI',
      altText: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
  {
    title: 'Grow',
    image: {
      src: 'https://rstr.in/monogram/vibes/-cqnV6UhvCk',
      altText: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
  {
    title: 'Thrive',
    image: {
      src: 'https://rstr.in/monogram/vibes/RNZYqBoUs7C/3QYdXXiml_C',
      altText: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
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
    image: {
      src: 'https://rstr.in/monogram/vibes/25AJnay0WtU/LiQxF_6c-Sk',
      altText: 'Low Maintenance',
    },
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

// Featured Products
export const newArrivals: Product[] = [
  {
    id: '3',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/zyFDaG5bRQE',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '1',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/AxXaqTzRozM',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '4',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/vznZvupsj2y',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '2',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/rDuYCY2nPNt',
      altText: 'Product Name',
    },
    href: '#',
  },
]

export default function Preview() {
  return <HomePage heroSlides={heroSlides} categories={categories} newArrivals={newArrivals} />
}
