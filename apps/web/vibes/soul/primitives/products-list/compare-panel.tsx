'use client'

import React from 'react'

import { ArrowRight } from 'lucide-react'

import { Button } from '@/vibes/soul/primitives/button'
import * as SidePanel from '@/vibes/soul/primitives/side-panel'
import { ProductCardProduct } from '@/vibes/soul/types'

import { CompareCard, CompareCardSkeleton } from './compare-card'

interface Props {
  products: ProductCardProduct[]
}

export function ComparePanel({ products }: Props) {
  return (
    <SidePanel.Root>
      <SidePanel.Trigger asChild>
        <>
          <Button size="medium" variant="primary" className="hidden @md:block">
            Compare <ArrowRight size={20} strokeWidth={1} absoluteStrokeWidth />
          </Button>

          <Button size="small" variant="primary" className="w-full @md:hidden">
            Compare <ArrowRight size={16} strokeWidth={1} absoluteStrokeWidth />
          </Button>
        </>
      </SidePanel.Trigger>
      <SidePanel.Content
        title={
          <>
            Compare <span className="text-contrast-300">{products.length} Products</span>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 @xl:grid-cols-2">
          {products.length > 0
            ? products.map(product => <CompareCard key={product.id} {...product} />)
            : Array.from({ length: 5 }).map((_, index) => <CompareCardSkeleton key={index} />)}
        </div>
      </SidePanel.Content>
    </SidePanel.Root>
  )
}
