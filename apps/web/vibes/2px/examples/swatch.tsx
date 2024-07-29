'use client'

import { useState } from 'react'

import Swatch from '@/vibes/2px/components/swatch'

export default function Preview() {
  const [selectedColor, setSelectedColor] = useState('')
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value)
  }
  const colors = ['#f00', '#0f0', '#00f']

  return (
    <div className="flex min-h-48 flex-col items-center justify-center gap-4 bg-white p-5 @container sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      {colors.map(color => (
        <Swatch
          key={color}
          name="example"
          disabled={false}
          inStock={true}
          color={color}
          checked={selectedColor === color}
          onChange={handleColorChange}
        />
      ))}
    </div>
  )
}
