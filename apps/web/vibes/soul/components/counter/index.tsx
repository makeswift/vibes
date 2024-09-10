'use client'

import { useState } from 'react'

import { Minus, Plus } from 'lucide-react'

interface Props {
  current?: number
  max?: number
}

export const Counter = function Counter({ current = 0, max = 20 }: Props) {
  const [count, setCount] = useState(current)

  const decrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1)
    }
  }
  const increment = () => {
    if (count < max) {
      setCount(prev => prev + 1)
    }
  }

  return (
    <div className="flex items-center rounded-lg border">
      <button
        className="group rounded-l-lg p-3 hover:bg-primary-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        onClick={decrement}
        aria-label="Decrease count"
      >
        <Minus
          className="text-contrast-300 transition-colors duration-300 group-hover:text-foreground"
          strokeWidth={1.5}
          size={18}
        />
      </button>
      <span className="flex w-8 select-none justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ">
        {count}
      </span>
      <button
        className="group rounded-r-lg p-3 transition-colors duration-300 hover:bg-primary-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        onClick={increment}
        aria-label="Increase count"
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
