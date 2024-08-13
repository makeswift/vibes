import FeaturedProductList from '@/vibes/soul/components/featured-products-list'
import { Product } from '@/vibes/soul/components/product-card'

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/EThVOYoirSZ',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: 2,
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/ZNRyYzfOjaK',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: 3,
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/8bPrhQZGr4k',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: 4,
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/alCCRbqrsnE',
      altText: 'Product Name',
    },
    href: '#',
  },
]

export default function Preview() {
  return (
    <FeaturedProductList
      title="Off-Race"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      cta={{ href: '#', label: 'Shop Now' }}
      products={featuredProducts}
    />
  )
}
