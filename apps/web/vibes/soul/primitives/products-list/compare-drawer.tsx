'use client'

import { Suspense, use, useEffect, useState } from 'react'

import * as Portal from '@radix-ui/react-portal'
import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs'

import { CardProduct } from '@/vibes/soul/primitives/product-card'
import { ProductChip } from '@/vibes/soul/primitives/product-chip'

import { ComparePanel } from './compare-panel'

interface Props {
  products: CardProduct[] | Promise<CardProduct[]>
  paramName?: string
}

function CompareDrawerInner({ products, paramName = 'compare' }: Props) {
  const resolved = products instanceof Promise ? use(products) : products
  const [, setParam] = useQueryState(
    paramName,
    parseAsArrayOf(parseAsString).withOptions({ shallow: false })
  )
  // This hack is needed to prevent hydration errors.
  // The Radix Portal is not rendered correctly server side, so we need to prevent it from rendering until the client side hydration is complete (and `useEffect` is run).
  // The issue is reported here: https://github.com/radix-ui/primitives/issues/1386
  const [doc, setDoc] = useState<Document | null>(null)
  useEffect(() => setDoc(window.document), [])

  return (
    resolved.length > 0 &&
    doc && (
      <Portal.Root className="sticky bottom-0 z-10 w-full border-t bg-background px-3 py-4 @container @md:py-5 @xl:px-6 @5xl:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-end gap-x-3 gap-y-4 @md:flex-row">
          <div className="flex flex-1 flex-wrap justify-end gap-4">
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
          </div>

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
