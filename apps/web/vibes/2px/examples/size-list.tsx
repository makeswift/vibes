'use client'

import { useState } from 'react'

import SizeList from '@/vibes/2px/components/size-list'

export default function Preview() {
  const [checked, setChecked] = useState(false)
  return (
    <div className="flex min-h-48 items-center justify-center bg-white p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <SizeList
        size="S"
        checked={checked}
        setChecked={setChecked}
        disabled={false}
        unavailable={false}
      />
    </div>
  )
}
