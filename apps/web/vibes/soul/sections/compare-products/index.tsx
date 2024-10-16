'use client'

import React, { useState } from 'react'

import { Breadcrumb } from '@/vibes/soul/primitives/breadcrumbs'
import { CompareDrawer } from '@/vibes/soul/primitives/compare-drawer'
import { Pagination } from '@/vibes/soul/primitives/pagination'
import { Product } from '@/vibes/soul/primitives/product-card'
import { ProductsHeader } from '@/vibes/soul/primitives/products-header'
import { ProductsList } from '@/vibes/soul/primitives/products-list'

interface Props {
  breadcrumbs?: Breadcrumb[]
  title: string
  products: Product[]
  pages: number
}

export function CompareProducts({ breadcrumbs, title, products, pages }: Props) {
  const [compareProducts, setCompareProducts] = useState<Product[]>([])

  return (
    <div className="mx-auto max-w-screen-2xl">
      <ProductsHeader breadcrumbs={breadcrumbs} title={title} numberOfProducts={products.length} />
      <ProductsList products={products} />
      <Pagination pages={pages} />
      <CompareDrawer products={compareProducts} />
    </div>
  )
}
