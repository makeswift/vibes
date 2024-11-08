import clsx from 'clsx'

import { Button } from '@/vibes/soul/primitives/button'
import { CardProduct, ProductCard } from '@/vibes/soul/primitives/product-card'

import { Rating } from '../rating'

export type CompareProduct = CardProduct & {
  description?: string
  customFields?: { name: string; value: string }[]
}

export type Props = {
  className?: string
  product: CompareProduct
  addToCartAction?(id: string): Promise<void>
  addToCartLabel?: string
  descriptionLabel?: string
  ratingLabel?: string
  otherDetailsLabel?: string
}

export function CompareCard({
  className,
  product,
  addToCartAction,
  addToCartLabel = 'Add to cart',
  descriptionLabel = 'Description',
  ratingLabel = 'Rating',
  otherDetailsLabel = 'Other details',
}: Props) {
  return (
    <div
      className={clsx('flex w-full flex-col divide-y divide-contrast-100 @container', className)}
    >
      <div className="mb-2 space-y-4 pb-4">
        <ProductCard product={product} />
        {addToCartAction && (
          <form action={addToCartAction.bind(null, product.id)}>
            <Button className="w-full" size="medium" type="submit">
              {addToCartLabel}
            </Button>
          </form>
        )}
      </div>
      {product.rating != null && (
        <div className="space-y-4 py-4">
          <h3 className="font-mono text-xs uppercase">{ratingLabel}</h3>
          <Rating rating={product.rating} />
        </div>
      )}
      {product.description != null && product.description !== '' && (
        <div className="space-y-4 py-4">
          <h3 className="font-mono text-xs uppercase">{descriptionLabel}</h3>
          <p className="text-sm">{product.description}</p>
        </div>
      )}
      {product.customFields != null && (
        <div className="space-y-4 py-4">
          <h3 className="font-mono text-xs uppercase">{otherDetailsLabel}</h3>
          {product.customFields?.map(field => (
            <div>
              <p className="text-xs">
                <strong>{field.name}</strong>: {field.value}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
