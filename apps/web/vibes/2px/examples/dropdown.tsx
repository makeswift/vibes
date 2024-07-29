'use client'

import { useState } from 'react'

import Dropdown from '../components/dropdown'

export default function Preview() {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')

  const options = [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
  ]

  return (
    <div className="flex min-h-48 flex-col items-center justify-center gap-2 bg-white p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Dropdown
        options={options}
        placeholder="Select value"
        value={value1}
        setValue={setValue1}
        className="z-[4]"
      />
      <Dropdown
        options={options}
        placeholder="Select value"
        status="error"
        value={value2}
        setValue={setValue2}
        className="z-[3]"
      />
      <Dropdown
        options={options}
        placeholder="Select value"
        status="success"
        value={value3}
        setValue={setValue3}
        className="z-[2]"
      />
      <Dropdown
        options={options}
        placeholder="Select value"
        disabled
        value={value4}
        setValue={setValue4}
        className="z-[1]"
      />
    </div>
  )
}
