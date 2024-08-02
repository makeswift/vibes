'use client'

import { useState } from 'react'

import Swatch from '@/vibes/2px/components/swatch'
import tableTopSwatch from '@/vibes/2px/examples/assets/swatch-example.png'

export default function Preview() {
  const [selectedSample, setSelectedSample] = useState('')
  const [selectedColorSample, setSelectedColorSample] = useState('')
  const handleMaterialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSample(e.target.value)
  }
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColorSample(e.target.value)
  }

  return (
    <div className="flex min-h-48  justify-center gap-4 bg-white p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <div className="flex flex-1 flex-col items-center justify-center gap-4 @container">
        <Swatch
          value={'default-example-1'}
          name="example"
          disabled={false}
          inStock={true}
          sample={tableTopSwatch.src}
          checked={selectedSample === 'default-example-1'}
          onChange={handleMaterialChange}
        />
        <Swatch
          value={'out-of-stock-example'}
          name="example"
          disabled={false}
          inStock={false}
          sample={tableTopSwatch.src}
          checked={selectedSample === 'out-of-stock-example'}
          onChange={handleMaterialChange}
        />
        <Swatch
          value={'default-example-2'}
          name="example"
          disabled={false}
          inStock={true}
          sample={tableTopSwatch.src}
          checked={selectedSample === 'default-example-2'}
          onChange={handleMaterialChange}
        />
        <Swatch
          value={'disabled-example'}
          name="example"
          disabled={true}
          inStock={true}
          sample={tableTopSwatch.src}
          checked={selectedSample === 'disabled-example'}
          onChange={handleMaterialChange}
        />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-4 @container">
        <Swatch
          value={'out-of-stock-example'}
          name="example-2"
          disabled={false}
          inStock={false}
          sample="#00FF00"
          checked={selectedColorSample === 'out-of-stock-example'}
          onChange={handleColorChange}
        />
        <Swatch
          value={'default-example-2'}
          name="example-2"
          disabled={false}
          inStock={true}
          sample="#FF0000"
          checked={selectedColorSample === 'default-example-2'}
          onChange={handleColorChange}
        />
        <Swatch
          value={'disabled-example'}
          name="example-2"
          disabled={true}
          inStock={true}
          sample="#0000FF"
          checked={selectedColorSample === 'disabled-example'}
          onChange={handleColorChange}
        />
      </div>
    </div>
  )
}
