import { ProductList } from '@/vibes/soul/components/product-list'

import ProductCard from '../components/product-card'

const products: ProductCard[] = [
  {
    name: 'Product Name',
    tags: ['Blue', 'Black', 'Green'],
    label: 'New',
    price: 123.99,
    image: 'https://rstr.in/monogram/vibes/alCCRbqrsnE',
    ctaLink: { href: '/' },
  },
  {
    name: 'Product Name',
    tags: ['Blue', 'Black', 'Green'],
    label: 'New',
    price: 123.99,
    image: 'https://rstr.in/monogram/vibes/tJ-FPKUBiSp',
    ctaLink: { href: '/' },
  },
  {
    name: 'Product Name',
    tags: ['Blue', 'Black', 'Green'],
    label: 'New',
    price: 123.99,
    image: 'https://rstr.in/monogram/vibes/QluRjwypujv',
    ctaLink: { href: '/' },
  },
]

export default function Preview() {
  return (
    <div className="min-h-48 bg-background">
      <ProductList products={products} />
    </div>
  )
}
