'use client'

import { useState } from 'react'

import Checkbox from '@/vibes/soul/components/checkbox'

export default function Preview() {
  const [checked, setChecked] = useState(true)

  return (
    <div className="flex h-screen items-center justify-center">
      <Checkbox checked={checked} setChecked={setChecked} label="Checkbox" />
    </div>
  )
}
