'use client'

import { useEffect, useState } from 'react'

import ProductChip from '@/vibes/soul/components/compare-drawer/product-chip'
import ComparePanel from '@/vibes/soul/components/compare-panel'
import { Product } from '@/vibes/soul/components/product-card'

interface Props {
  products: Product[]
}

export const CompareDrawer = function CompareDrawer({ products }: Props) {
  const [dismissedStates, setDismissedStates] = useState(products.map(() => false))

  const handleDismiss = (index: number) => {
    setDismissedStates(prevStates => {
      const newStates = [...prevStates]
      newStates[index] = true
      return newStates
    })
  }

  const allDismissed = dismissedStates.every(state => state)

  useEffect(() => {
    setDismissedStates(products.map(() => false))
  }, [products])

  if (allDismissed) return null

  return (
    products &&
    products.length > 0 && (
      <div className="sticky bottom-0 w-full border-y bg-background @container">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-wrap items-end justify-end gap-5 px-3 py-5 @xl:px-6 @5xl:px-20">
          {products.map((product, index: number) => (
            <ProductChip key={index} product={product} onDismiss={() => handleDismiss(index)} />
          ))}
          {/* Compare Button & Panel */}
          <ComparePanel products={products} />
        </div>
      </div>
    )
  )
}

export default CompareDrawer
