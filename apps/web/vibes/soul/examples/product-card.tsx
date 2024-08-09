'use client'

import { useState } from 'react'

import ProductCard from '@/vibes/soul/components/product-card'

export default function Preview() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-5 @container">
      <ProductCard
        name="Product Name"
        tags={['Blue', 'Black', 'Green']}
        badge="New"
        price={{
          type: 'static',
          value: 123.99,
        }}
        image="https://rstr.in/monogram/vibes/tJ-FPKUBiSp"
        ctaLink={{ href: '/' }}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  )
}
