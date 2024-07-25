'use client'

import { useState } from 'react'

import { MinusDashedIcon, MinusSolidIcon, PlusDashedIcon, PlusSolidIcon } from '../icons'

interface Props {
  initialValue: number
  minValue?: number
  maxValue?: number
}

export default function Counter({ initialValue = 0, minValue, maxValue }: Props) {
  const [count, setCount] = useState(initialValue)
  return (
    <div className="w-full text-foreground @container">
      <div className="mx-auto flex w-fit items-center font-body">
        <button
          className="minus-button group"
          onClick={() => setCount(count => Math.max(count - 1, minValue ?? -Infinity))}
        >
          <MinusSolidIcon className="block h-5 w-5 group-hover:hidden @md:h-10 @md:w-10 @lg:h-20 @lg:w-20" />
          <MinusDashedIcon className="hidden  h-5 w-5 group-hover:block @md:h-10 @md:w-10 @lg:h-20 @lg:w-20" />
        </button>
        <span className="w-8 text-center text-sm @md:w-16  @md:text-lg @lg:w-[7.5rem] @lg:text-6xl">
          {count}
        </span>
        <button
          className="plus-button group"
          onClick={() => setCount(count => Math.min(count + 1, maxValue ?? Infinity))}
        >
          <PlusSolidIcon className="block h-5 w-5 group-hover:hidden @md:h-10 @md:w-10 @lg:h-20 @lg:w-20" />
          <PlusDashedIcon className="hidden h-5 w-5 group-hover:block @md:h-10 @md:w-10 @lg:h-20 @lg:w-20" />
        </button>
      </div>
    </div>
  )
}
