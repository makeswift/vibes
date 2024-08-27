'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import clsx from 'clsx'
import { X } from 'lucide-react'

import { Product } from '@/vibes/soul/components/product-card'

interface Props {
  product: Product
  setCompareProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

const ProductChip = function ProductChip({ product, setCompareProducts }: Props) {
  return (
    <button
      role="button"
      aria-label="Remove product"
      onClick={() =>
        setCompareProducts((prevProducts: Product[]) => {
          return prevProducts.filter(p => p.id !== product.id)
        })
      }
      className={clsx(
        'group flex items-center gap-3 whitespace-nowrap rounded-xl border border-contrast-100 bg-background font-semibold transition-all duration-150 hover:bg-contrast-100',
        'ring-primary focus:outline-0 focus:ring-2'
      )}
    >
      {product.image?.src && (
        <Image
          src={product.image.src}
          alt={product.image?.altText}
          width={50}
          height={50}
          className="aspect-square h-[50px] w-[50px] rounded-[11px] bg-contrast-100 object-cover @4xl:rounded-r-none"
        />
      )}
      <span className="hidden text-foreground @4xl:block">{product.name}</span>
      <div className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-contrast-100 bg-background text-contrast-400 transition-[colors,transform] duration-150 group-hover:scale-110 group-hover:text-foreground @4xl:relative @4xl:right-auto @4xl:top-auto @4xl:mr-2.5 @4xl:border-none @4xl:bg-transparent">
        <X className="hidden @4xl:block" />
        <div className="h-px w-2.5 bg-foreground @4xl:hidden" />
      </div>
    </button>
  )
}

export default ProductChip
