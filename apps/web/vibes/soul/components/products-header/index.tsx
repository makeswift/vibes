'use client'

import React from 'react'

import Dropdown from '@/vibes/soul/components/dropdown'
import FilterDialog from '@/vibes/soul/components/filter-dialog'

type Props = {
  title: string
  numberOfProducts: number
}

export const ProductsHeader = function ProductsHeader({ title, numberOfProducts }: Props) {
  return (
    <>
      {/* Products Header */}
      <div className="z-10 flex items-center justify-between bg-background pb-10 pt-28 text-foreground @container @lg:pt-44">
        <h1 className="pl-3 text-xl font-medium @xl:pl-6 @2xl:text-[40px] @5xl:pl-20">
          {title} <span className="text-contrast-200">{numberOfProducts}</span>
        </h1>
        <div className="flex gap-2 pr-3 @xl:pr-6 @5xl:pr-20">
          {/* Filter Button & Dialog */}
          <FilterDialog />
          <Dropdown
            label="Sort"
            items={['Most Recent', 'Most Popular', 'Price: Low to High', 'Price: High to Low']}
            size="small"
          />
        </div>
      </div>
    </>
  )
}

export default ProductsHeader
