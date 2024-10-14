'use client'

import { useState } from 'react'

import { Minus, Plus } from 'lucide-react'

interface Props {
  current?: number
  max?: number
  decrementAriaLabel?: string
  incrementAriaLabel?: string
}

export const Counter = function Counter({
  current = 0,
  max,
  decrementAriaLabel,
  incrementAriaLabel,
}: Props) {
  const [count, setCount] = useState(current)
  const decrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1)
    }
    return current - 1
  }
  const increment = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div className="flex items-center justify-between rounded-lg border">
      <button
        className="group rounded-l-lg p-3 hover:bg-contrast-100/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        onClick={decrement}
        aria-label={decrementAriaLabel ?? 'Decrease count'}
      >
        <Minus
          className="text-contrast-300 transition-colors duration-300 group-hover:text-foreground"
          strokeWidth={1.5}
          size={18}
        />
      </button>
      <input
        className="w-8 select-none text-center focus-visible:outline-none"
        // type="number"
        // style={{
        //   appearance: 'none', // Remove default styling
        //   MozAppearance: 'textfield', // For Firefox
        //   WebkitAppearance: 'none', // For Chrome and Safari
        // }}
        value={count}
      />

      <button
        className="group rounded-r-lg p-3 transition-colors duration-300 hover:bg-contrast-100/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        onClick={increment}
        aria-label={incrementAriaLabel ?? 'Increase count'}
      >
        <Plus
          className="text-contrast-300 transition-colors duration-300 group-hover:text-foreground"
          strokeWidth={1.5}
          size={18}
        />
      </button>
    </div>
  )
}
