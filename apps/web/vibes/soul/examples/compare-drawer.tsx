import CompareDrawer from '@/vibes/soul/components/compare-drawer'
import ProductCard from '@/vibes/soul/components/product-card'

export const compareProducts: ProductCard[] = [
  {
    name: 'Men’s Long Sleeve Jersey',
    tags: ['Blue', 'Black', 'Green'],
    badge: 'New',
    price: {
      type: 'static',
      value: 123.99,
    },
    image: 'https://rstr.in/monogram/vibes/tJ-FPKUBiSp',
    ctaLink: { href: '#' },
  },
  {
    name: 'Men’s Long Sleeve Jersey',
    tags: ['Blue', 'Black', 'Green'],
    badge: 'New',
    price: {
      type: 'static',
      value: 123.99,
    },
    image: 'https://rstr.in/monogram/vibes/alCCRbqrsnE',
    ctaLink: { href: '#' },
  },
]

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center p-5 @container sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <CompareDrawer products={compareProducts} />
    </div>
  )
}
