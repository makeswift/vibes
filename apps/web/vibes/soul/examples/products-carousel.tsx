import { Product } from '@/vibes/soul/components/product-card'
import ProductsCarousel from '@/vibes/soul/components/products-carousel'

export const products: Product[] = [
  {
    id: '1',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'range',
      minValue: '$123.99',
      maxValue: '$123.99',
    },
    image: {
      src: 'https://rstr.in/monogram/vibes/alCCRbqrsnE',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '2',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'sale',
      previousValue: '$123.99',
      currentValue: '$123.99',
    },
    image: {
      src: 'https://rstr.in/monogram/vibes/tJ-FPKUBiSp',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '3',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/QluRjwypujv',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '4',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'range',
      minValue: '$123.99',
      maxValue: '$123.99',
    },
    image: {
      src: 'https://rstr.in/monogram/vibes/alCCRbqrsnE',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '5',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'sale',
      previousValue: '$123.99',
      currentValue: '$123.99',
    },
    image: {
      src: 'https://rstr.in/monogram/vibes/tJ-FPKUBiSp',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '6',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/QluRjwypujv',
      altText: 'Product Name',
    },
    href: '#',
  },
]

export default function Preview() {
  return <ProductsCarousel products={products} />
}
