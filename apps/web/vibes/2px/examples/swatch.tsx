'use client'

import { useState } from 'react'

import Swatch from '@/vibes/2px/components/swatch'
import tableTopSwatch from '@/vibes/2px/examples/assets/swatch-example.png'

export default function Preview() {
  const [selectedSample, setSelectedSample] = useState('')
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSample(e.target.id)
  }

  return (
    <div className="flex min-h-48 flex-col items-center justify-center gap-4 bg-white p-5 @container sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Swatch
        id={'default-example-1'}
        name="example"
        disabled={false}
        inStock={true}
        sample={tableTopSwatch.src}
        checked={selectedSample === 'default-example-1'}
        onChange={handleColorChange}
      />
      <Swatch
        id={'out-of-stock-example'}
        name="example"
        disabled={false}
        inStock={false}
        sample={tableTopSwatch.src}
        checked={selectedSample === 'out-of-stock-example'}
        onChange={handleColorChange}
      />
      <Swatch
        id={'default-example-2'}
        name="example"
        disabled={false}
        inStock={true}
        sample={tableTopSwatch.src}
        checked={selectedSample === 'default-example-2'}
        onChange={handleColorChange}
      />
      <Swatch
        id={'disabled-example'}
        name="example"
        disabled={true}
        inStock={true}
        sample={tableTopSwatch.src}
        checked={selectedSample === 'disabled-example'}
        onChange={handleColorChange}
      />
    </div>
  )
}
