'use client'

import { useState } from 'react'

import Counter from '@/vibes/2px/components/counter'

export default function Preview() {
  const [count, setCount] = useState(0)
  const onChange = (value: number | '') => setCount(Number(value))

  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Counter defaultValue={0} min={0} max={10} />

      <Counter value={count} step={2} min={0} max={10} onChange={onChange} />
    </div>
  )
}
