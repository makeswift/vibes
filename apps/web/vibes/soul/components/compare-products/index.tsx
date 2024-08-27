'use client'

import React, { useState } from 'react'

import CompareDrawer from '@/vibes/soul/components/compare-drawer'
import Pagination from '@/vibes/soul/components/pagination'
import { Product } from '@/vibes/soul/components/product-card'
import ProductsHeader from '@/vibes/soul/components/products-header'
import ProductsList from '@/vibes/soul/components/products-list'

interface Props {
  title: string
  products: Product[]
  pages: number
}

export const CompareProducts = function CompareProducts({ title, products, pages }: Props) {
  const [compareProducts, setCompareProducts] = useState<Product[]>([])

  return (
    <div className="mx-auto max-w-screen-2xl">
      <ProductsHeader title={title} numberOfProducts={products.length} />
      <ProductsList
        products={products}
        compareProducts={compareProducts}
        setCompareProducts={setCompareProducts}
      />
      <Pagination pages={pages} />
      <CompareDrawer compareProducts={compareProducts} setCompareProducts={setCompareProducts} />
    </div>
  )
}

export default CompareProducts
