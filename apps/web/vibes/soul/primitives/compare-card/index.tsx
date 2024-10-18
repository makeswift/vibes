import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import { Button } from '@/vibes/soul/primitives/button'
import { CardProduct, ProductCard } from '@/vibes/soul/primitives/product-card'

export type Props = {
  className?: string
  product: CardProduct
}

export function CompareCard({ className, product }: Props) {
  return (
    <div className={clsx('@container', className)}>
      <ProductCard product={product} />
      <Button className="mt-4">Add to Cart</Button>
    </div>
  )
}
