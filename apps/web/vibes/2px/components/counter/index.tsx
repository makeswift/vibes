'use client'

import { useRef } from 'react'

import { MinusDashedIcon, MinusSolidIcon, PlusDashedIcon, PlusSolidIcon } from '../icons'

interface Props
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'type' | 'className' | 'onChange'> {
  step?: number
  min?: number
  max?: number
  value?: number
  onChange?: (value: number) => void
}

export default function Counter({
  defaultValue = 0,
  step = 1,
  min,
  max,
  onChange,
  value,
  ...props
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null)

  const increment = () => {
    if (onChange) {
      onChange(Math.min(Number(inputRef.current?.value) + step, max ?? Infinity))

      return
    }

    if (!inputRef.current) return

    inputRef.current.value = Math.min(
      Number(inputRef.current?.value) + step,
      max ?? Infinity
    ).toString()
  }

  const decrement = () => {
    if (onChange) {
      onChange(Math.max(Number(inputRef.current?.value) - step, min ?? -Infinity))

      return
    }

    if (!inputRef.current) return

    inputRef.current.value = Math.max(
      Number(inputRef.current?.value) - step,
      min ?? -Infinity
    ).toString()
  }

  return (
    <div className="w-full text-foreground @container">
      <div className="mx-auto flex w-fit items-center font-body">
        <button className="minus-button group" onClick={decrement}>
          <MinusSolidIcon className="block h-5 w-5 group-hover:hidden @md:h-10 @md:w-10 @lg:h-20 @lg:w-20" />
          <MinusDashedIcon className="hidden  h-5 w-5 group-hover:block @md:h-10 @md:w-10 @lg:h-20 @lg:w-20" />
        </button>
        <input
          className="w-6 appearance-none overflow-hidden border-none bg-background px-1 text-center text-sm outline-none @md:w-12 @md:px-2 @md:text-lg @lg:w-28 @lg:text-6xl"
          ref={inputRef}
          type="text"
          readOnly
          {...props}
          {...(value !== undefined ? { value } : { defaultValue })}
        />
        <button className="plus-button group" onClick={increment}>
          <PlusSolidIcon className="block h-5 w-5 group-hover:hidden @md:h-10 @md:w-10 @lg:h-20 @lg:w-20" />
          <PlusDashedIcon className="hidden h-5 w-5 group-hover:block @md:h-10 @md:w-10 @lg:h-20 @lg:w-20" />
        </button>
      </div>
    </div>
  )
}
