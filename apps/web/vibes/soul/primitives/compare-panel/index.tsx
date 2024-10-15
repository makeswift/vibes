'use client'

import React from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

import { Button } from '@/vibes/soul/primitives/button'
import { CompareCard, CompareCardSkeleton } from '@/vibes/soul/primitives/compare-card'
import { Product } from '@/vibes/soul/primitives/product-card'
import { SidePanel, SidePanelClose } from '@/vibes/soul/primitives/side-panel'

interface Props {
  products: Product[]
}

export function ComparePanel({ products }: Props) {
  return (
    <SidePanel
      trigger={
        <Button asChild>
          <div className="flex">
            Compare<span className="hidden @4xl:block">&nbsp;Items</span>
          </div>
        </Button>
      }
      content={
        <>
          <VisuallyHidden.Root>
            <Dialog.Title className="DialogTitle">Compare</Dialog.Title>
          </VisuallyHidden.Root>
          <div className="mb-12 flex flex-wrap-reverse items-center justify-between gap-x-4">
            <h1 className="text-2xl font-medium leading-none @xl:text-4xl">
              Compare <span className="text-contrast-300">{products.length} Products</span>
            </h1>
            <SidePanelClose />
          </div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-10 @xl:grid-cols-2">
            {products.length > 0
              ? products.map(product => <CompareCard key={product.id} {...product} />)
              : Array.from({ length: 5 }).map((_, index) => <CompareCardSkeleton key={index} />)}
          </div>
        </>
      }
    />
  )
}
