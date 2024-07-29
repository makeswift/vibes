'use client'

import React from 'react'

import TextArea from '@/vibes/2px/components/text-area'

export default function Preview() {
  const [value, setValue] = React.useState('')
  return (
    <div className="flex min-h-48 items-center justify-center bg-white p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <TextArea
        required={false}
        value={value}
        setValue={setValue}
        variant="default"
        disabled={false}
      />
    </div>
  )
}
