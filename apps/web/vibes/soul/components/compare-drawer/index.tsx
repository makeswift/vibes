import { Suspense, use } from 'react'

import { ProductChip } from '@/vibes/soul/components/compare-drawer/product-chip'
import { ComparePanel } from '@/vibes/soul/components/compare-panel'
import { Product } from '@/vibes/soul/components/product-card'

interface Props {
  products: Product[] | Promise<Product[]>
}

function CompareDrawerResolved({ products }: Props) {
  const resolved = use(Promise.resolve(products))

  return (
    resolved.length > 0 && (
      <div className="fixed bottom-0 w-full border-y bg-background @container">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-wrap items-end justify-end gap-5 px-3 py-5 @xl:px-6 @5xl:px-20">
          {resolved.map(product => (
            <ProductChip key={product.id} product={product} />
          ))}
          {/* Compare Button & Panel */}
          <ComparePanel products={resolved} />
        </div>
      </div>
    )
  )
}

export function CompareDrawer({ products }: Props) {
  return (
    <Suspense fallback={null}>
      <CompareDrawerResolved products={products} />
    </Suspense>
  )
}
