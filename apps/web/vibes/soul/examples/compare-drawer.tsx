import CompareDrawer from '@/vibes/soul/components/compare-drawer'
import { Product } from '@/vibes/soul/components/product-card'

export const compareProducts: Product[] = [
  {
    id: 1,
    name: 'Men’s Long Sleeve Jersey',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/tJ-FPKUBiSp',
      altText: 'Men’s Long Sleeve Jersey',
    },
    href: '#',
  },
  {
    id: 2,
    name: 'Men’s Long Sleeve Jersey',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/alCCRbqrsnE',
      altText: 'Men’s Long Sleeve Jersey',
    },
    href: '#',
  },
]

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center p-5 @container sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <CompareDrawer products={compareProducts} />
    </div>
  )
}
