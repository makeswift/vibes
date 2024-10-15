'use client'

import { useState } from 'react'

import clsx from 'clsx'
import { Minus, Plus } from 'lucide-react'

interface Props {
  current?: number
  max?: number
  type?: 'button' | 'submit'
}

export const Counter = function Counter({ current = 0, max = 20, type = 'button' }: Props) {
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
        className={clsx(
          'group rounded-l-lg p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          { 'hover:bg-contrast-100/50': count > 0 }
        )}
        onClick={decrement}
        aria-label="Decrease count"
        type={type}
        disabled={count === 0}
      >
        <Minus
          className={`text-contrast-300 transition-colors duration-300 ${count > 0 ? 'group-hover:text-foreground' : ''}`}
          strokeWidth={1.5}
          size={18}
        />
      </button>
      <span className="flex w-8 select-none justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ">
        {count}
      </span>
      <button
        className="group rounded-r-lg p-3 transition-colors duration-300 hover:bg-contrast-100/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        onClick={increment}
        aria-label="Increase count"
        type={type}
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
