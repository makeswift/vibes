'use client'

import { useEffect, useState } from 'react'

import Checkbox from '@/vibes/soul/components/checkbox'

import { Product } from '../compare-card'

interface Props {
  product: Product
  compareProducts: Product[]
  setCompareProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export const Compare = function Compare({ product, compareProducts, setCompareProducts }: Props) {
  const [isProductInArray, setIsProductInArray] = useState(false)

  useEffect(() => {
    setIsProductInArray(compareProducts?.some(p => p.id === product.id))
  }, [compareProducts, product])

  const handleCheck = () => {
    setCompareProducts((prevProducts: Product[]) => {
      if (isProductInArray) {
        return prevProducts.filter(p => p.id !== product.id)
      } else {
        return [...prevProducts, product]
      }
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleCheck()
    }
  }

  return (
    <div
      onClick={handleCheck}
      onKeyDown={handleKeyDown}
      role="button"
      className="absolute right-2.5 top-2.5 z-10 flex cursor-default items-center gap-2 text-foreground @lg:bottom-4 @lg:right-4 @lg:top-auto"
    >
      <span className="hidden @lg:block">Compare</span>
      <Checkbox checked={isProductInArray} />
    </div>
  )
}

export default Compare
