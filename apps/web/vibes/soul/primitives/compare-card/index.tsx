import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/vibes/soul/primitives/button'
import { CardProduct, ProductCard } from '@/vibes/soul/primitives/product-card'

import { Rating } from '../rating'

export type CompareProduct = CardProduct & { description?: string }

export type Props = {
  className?: string
  product: CompareProduct
}

export function CompareCard({ className, product }: Props) {
  return (
    <div className={clsx('flex flex-col divide-y divide-contrast-100 @container', className)}>
      <div className="mb-2 space-y-4 pb-4">
        <ProductCard product={product} />
        <Button className="w-full" size="medium">
          Add to Cart <ArrowRight size={20} strokeWidth={1} absoluteStrokeWidth />
        </Button>
      </div>
      <div className="space-y-5 py-5">
        <h3 className="font-mono text-xs uppercase">Description</h3>
        <p>{product.description}</p>
      </div>
      <div className="space-y-5 py-5">
        <h3 className="font-mono text-xs uppercase">Rating</h3>
        {product.rating != null && <Rating rating={product.rating} />}
      </div>
    </div>
  )
}
