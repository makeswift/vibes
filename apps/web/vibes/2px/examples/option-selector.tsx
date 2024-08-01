'use client'

import { useState } from 'react'

import OptionSelector from '@/vibes/2px/components/option-selector'

export default function Preview() {
  const [value, setValue] = useState('')

  return (
    <div className="flex min-h-48 items-center justify-center gap-5 bg-white p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <OptionSelector
        name="size"
        label="S"
        checked={value === 's'}
        onChange={() => setValue('s')}
      />
      <OptionSelector
        name="size"
        label="M"
        checked={value === 'm'}
        onChange={() => setValue('m')}
      />
      <OptionSelector
        name="size"
        label="L"
        checked={value === 'l'}
        onChange={() => setValue('l')}
        unavailable={true}
      />
      <OptionSelector
        name="size"
        label="XL"
        checked={value === 'xl'}
        onChange={() => setValue('xl')}
        disabled={true}
      />
    </div>
  )
}
