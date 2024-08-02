import ProductCard from '@/vibes/soul/components/product-card'
import { ProductList } from '@/vibes/soul/components/product-list'

const products: ProductCard[] = [
  {
    name: 'Product Name',
    tags: ['Blue', 'Black', 'Green'],
    label: 'New',
    price: {
      type: 'range',
      min: 123.99,
      max: 123.99,
    },
    image: 'https://rstr.in/monogram/vibes/alCCRbqrsnE',
    ctaLink: { href: '/' },
  },
  {
    name: 'Product Name',
    tags: ['Blue', 'Black', 'Green'],
    label: 'New',
    price: {
      type: 'compare',
      prev: 123.99,
      current: 123.99,
    },
    image: 'https://rstr.in/monogram/vibes/tJ-FPKUBiSp',
    ctaLink: { href: '/' },
  },
  {
    name: 'Product Name',
    tags: ['Blue', 'Black', 'Green'],
    label: 'New',
    price: {
      type: 'static',
      value: 123.99,
    },
    image: 'https://rstr.in/monogram/vibes/QluRjwypujv',
    ctaLink: { href: '/' },
  },
]

export default function Preview() {
  return (
    <div className="min-h-48">
      <ProductList products={products} />
    </div>
  )
}
