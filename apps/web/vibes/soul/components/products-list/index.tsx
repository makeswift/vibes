import clsx from 'clsx'

import ProductCard, { Product } from '@/vibes/soul/components/product-card'

interface Props {
  products: Product[]
  className?: string
}

export const ProductsList = function ProductsList({ products, className = '' }: Props) {
  return (
    <div className={clsx('w-full bg-background pt-0.5 @container', className)}>
      {products && (
        <div className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-x-2 gap-y-4 px-3 @xl:gap-x-5 @xl:gap-y-10 @xl:px-6 @4xl:grid-cols-3 @5xl:px-20">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductsList
