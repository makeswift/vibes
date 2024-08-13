'use client'

import { useEffect, useState } from 'react'

import Button from '@/vibes/soul/components/button'
import ProductChip from '@/vibes/soul/components/compare-drawer/product-chip'
import { Product } from '@/vibes/soul/components/product-card'

type Props = {
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
      <section className="sticky bottom-0 w-full border-t bg-background @container">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-end justify-end gap-5 px-3 py-5 @xl:px-6 @5xl:px-20">
          {products.map((product, index) => (
            <ProductChip key={index} product={product} onDismiss={() => handleDismiss(index)} />
          ))}

          <Button>
            Compare<span className="-ml-1.5 hidden @4xl:block">&nbsp;Items</span>
          </Button>
        </div>
      </section>
    )
  )
}

export default CompareDrawer
