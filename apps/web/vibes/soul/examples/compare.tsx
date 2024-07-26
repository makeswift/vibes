'use client'

import { useState } from 'react'

import Compare from '@/vibes/soul/components/compare'

export default function Preview() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex min-h-48 items-center justify-center bg-contrast-100 p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Compare label="Compare" checked={checked} setChecked={setChecked} />
    </div>
  )
}
