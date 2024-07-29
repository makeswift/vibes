import ProductChip from '@/vibes/soul/components/product-chip'

import ProductCard from '../components/product-card'

const product: ProductCard = {
  name: 'Men’s Long Sleeve Jersey',
  tags: ['Blue', 'Black', 'Green'],
  label: 'New',
  price: 123.99,
  image: 'https://rstr.in/monogram/vibes/alCCRbqrsnE',
  ctaLink: { href: '/' },
}

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-5 @container sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <ProductChip product={product} />
    </div>
  )
}
