'use client'

import { useState } from 'react'

import Tabs from '@/vibes/2px/components/tabs'

const tabs = [
  {
    value: 'Tab 1',
    content: <div className="mt-4 p-2 text-center font-body text-2xl">Content of Tab 1!</div>,
  },
  {
    value: 'Tab 2',
    content: <div className="mt-4 p-2 text-center font-body text-2xl">Content of Tab 2!</div>,
  },
  {
    value: 'Tab 3',
    content: <div className="mt-4 p-2 text-center font-body text-2xl">Content of Tab 3!</div>,
  },
  {
    value: 'Tab 4',
    content: <div className="mt-4 p-2 text-center font-body text-2xl">Content of Tab 4!</div>,
  },
]

export default function Preview() {
  const [value, setValue] = useState('0')

  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Tabs tabs={tabs} value={value} onValueChange={setValue} />
    </div>
  )
}
