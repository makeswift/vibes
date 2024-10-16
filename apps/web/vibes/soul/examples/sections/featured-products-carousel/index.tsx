import { Product } from '@/vibes/soul/primitives/product-card'
import { FeaturedProductsCarousel } from '@/vibes/soul/sections/featured-products-carousel'

export const featuredProducts: Product[] = [
  {
    id: '1',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/80LuKK05rRc',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/POA58bJDpAj',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/Gh--ZkS7bnX',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '4',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/0_1RCFHDWIQ',
      alt: 'Product Name',
    },
    href: '#',
  },
]

export default function Preview() {
  return (
    <FeaturedProductsCarousel
      title="Our Plants"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      cta={{ href: '#', label: 'Shop Now' }}
      products={featuredProducts}
    />
  )
}
