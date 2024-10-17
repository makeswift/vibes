import { Suspense, use } from 'react'

import { clsx } from 'clsx'

import { ProductCard, ProductCardSkeleton } from '@/vibes/soul/primitives/product-card'
import { ProductCardProduct } from '@/vibes/soul/types'

import { CompareDrawer } from './compare-drawer'

interface Props {
  products: ProductCardProduct[] | Promise<ProductCardProduct[]>
  compareProducts?: ProductCardProduct[] | Promise<ProductCardProduct[]>
  className?: string
  showCompare?: boolean
  compareLabel?: string
  compareParamName?: string
}

function ProductsListInner({
  products,
  showCompare,
  compareLabel,
  compareParamName,
}: Omit<Props, 'className'>) {
  const resolved = products instanceof Promise ? use(products) : products

  return resolved.map(product => (
    <ProductCard
      key={product.id}
      {...product}
      showCompare={showCompare}
      compareLabel={compareLabel}
      compareParamName={compareParamName}
    />
  ))
}

export function ProductsList({
  products,
  className,
  showCompare,
  compareProducts,
  compareLabel,
  compareParamName,
}: Props) {
  return (
    <>
      <div className={clsx('w-full bg-background pt-0.5 @container', className)}>
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-x-5 gap-y-10 @md:grid-cols-2 @xl:gap-y-10 @4xl:grid-cols-3">
          <Suspense
            fallback={Array.from({ length: 20 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          >
            <ProductsListInner
              products={products}
              showCompare={showCompare}
              compareLabel={compareLabel}
              compareParamName={compareParamName}
            />
          </Suspense>
        </div>
      </div>
      {compareProducts && <CompareDrawer products={compareProducts} paramName={compareParamName} />}
    </>
  )
}
