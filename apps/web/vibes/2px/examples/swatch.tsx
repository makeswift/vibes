'use client'

import { useState } from 'react'

import Swatch from '@/vibes/2px/components/swatch'
import tableTopSwatch from '@/vibes/2px/examples/assets/swatch-example.png'

export default function Preview() {
  const swatchesMaterial = [
    {
      value: 'default-example-1',
      name: 'example',
      disabled: false,
      inStock: true,
      color: tableTopSwatch.src,
    },
    {
      value: 'out-of-stock-example',
      name: 'example',
      disabled: false,
      inStock: false,
      color: tableTopSwatch.src,
    },
    {
      value: 'default-example-2',
      name: 'example',
      disabled: false,
      inStock: true,
      color: tableTopSwatch.src,
    },
    {
      value: 'disabled-example',
      name: 'example',
      disabled: true,
      inStock: true,
      color: tableTopSwatch.src,
    },
  ]

  const swatchesColors = [
    {
      value: 'out-of-stock-color-example',
      name: 'example-2',
      disabled: false,
      inStock: false,
      color: '#00FF00',
    },
    {
      value: 'default-color-example-2',
      name: 'example-2',
      disabled: false,
      inStock: true,
      color: '#FF0000',
    },
    {
      value: 'disabled-color-example',
      name: 'example-2',
      disabled: true,
      inStock: true,
      color: '#0000FF',
    },
  ]
  return (
    <div className="flex min-h-48  justify-center gap-4 bg-white p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Swatch
        className="flex flex-1 flex-col items-center justify-center gap-4 @container"
        swatches={swatchesMaterial}
      />

      <Swatch
        className="flex flex-1 flex-col items-center justify-center gap-4 @container"
        swatches={swatchesColors}
      />
    </div>
  )
}
