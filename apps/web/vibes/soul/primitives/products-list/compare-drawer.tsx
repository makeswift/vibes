'use client'

import { Suspense, use } from 'react'

import * as Portal from '@radix-ui/react-portal'
import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs'

import { ProductChip } from '@/vibes/soul/primitives/product-chip'
import { ProductCardProduct } from '@/vibes/soul/types'

import { ComparePanel } from './compare-panel'

interface Props {
  products: ProductCardProduct[] | Promise<ProductCardProduct[]>
  paramName?: string
}

function CompareDrawerInner({ products, paramName = 'compare' }: Props) {
  const resolved = products instanceof Promise ? use(products) : products
  const [, setParam] = useQueryState(
    paramName,
    parseAsArrayOf(parseAsString).withOptions({ shallow: false })
  )

  return (
    resolved.length > 0 && (
      <Portal.Root className="fixed bottom-0 w-full border-y bg-background @container">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-wrap items-center justify-end gap-5 px-3 py-5 @xl:px-6 @5xl:px-20">
          {resolved.map(product => (
            <ProductChip
              key={product.id}
              product={product}
              aria-label={product.title}
              onClick={() => {
                setParam(prev => {
                  const next = prev?.filter(v => v !== product.id) ?? []

                  return next.length > 0 ? next : null
                })
              }}
            />
          ))}
          {/* Compare Button & Panel */}
          <ComparePanel products={resolved} />
        </div>
      </Portal.Root>
    )
  )
}

export function CompareDrawer(props: Props) {
  return (
    <Suspense fallback={null}>
      <CompareDrawerInner {...props} />
    </Suspense>
  )
}
