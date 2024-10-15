import { Suspense, use } from 'react'

import { clsx } from 'clsx'

import { Product, ProductCard, ProductCardSkeleton } from '@/vibes/soul/primitives/product-card'

interface Props {
  products: Product[] | Promise<Product[]>
  className?: string
  showCompare?: boolean
  compareLabel?: string
}

function ProductsListResolved({ products, showCompare, compareLabel }: Omit<Props, 'className'>) {
  const resolved = use(Promise.resolve(products))

  return (
    <>
      {resolved.map(product => (
        <ProductCard
          key={product.id}
          {...product}
          showCompare={showCompare}
          compareLabel={compareLabel}
        />
      ))}
    </>
  )
}

export const ProductsList = function ProductsList({
  products,
  className,
  showCompare,
  compareLabel,
}: Props) {
  return (
    <div className={clsx('w-full bg-background pt-0.5 @container', className)}>
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-x-5 gap-y-10 px-3 @md:grid-cols-2 @xl:gap-y-10 @xl:px-6 @4xl:grid-cols-3 @5xl:px-20">
        <Suspense
          fallback={Array.from({ length: 20 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        >
          <ProductsListResolved
            products={products}
            showCompare={showCompare}
            compareLabel={compareLabel}
          />
        </Suspense>
      </div>
    </div>
  )
}
