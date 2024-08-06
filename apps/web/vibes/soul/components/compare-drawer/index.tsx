'use client'

import { useEffect, useState } from 'react'

import Button from '@/vibes/soul/components/button'

import ProductChip from './ProductChip'

type ProductCard = {
  name: string
  image: string
}

type Props = {
  products: ProductCard[]
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
      <section className="w-full bg-background @container">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-end justify-end gap-5 px-3 py-5 @4xl:px-20">
          {products.map((product, index) => (
            <ProductChip
              key={product.name}
              product={product}
              onDismiss={() => handleDismiss(index)}
            />
          ))}

          <Button>
            Compare<span className="hidden @4xl:block">&nbsp;Items</span>
          </Button>
        </div>
      </section>
    )
  )
}

export default CompareDrawer
