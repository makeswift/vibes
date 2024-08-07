'use client'

import { useRef } from 'react'

import { cn } from '@/lib/utils'
import { MinusDashedIcon } from '@/vibes/2px/components/icons/MinusDashedIcon'
import { MinusSolidIcon } from '@/vibes/2px/components/icons/MinusSolidIcon'
import { PlusDashedIcon } from '@/vibes/2px/components/icons/PlusDashedIcon'
import { PlusSolidIcon } from '@/vibes/2px/components/icons/PlusSolidIcon'

interface Props
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'type' | 'className' | 'onChange'> {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  step?: number
  min?: number
  max?: number
  value?: number
  onChange?: (value: number) => void
}

export default function Counter({
  size = 'md',
  defaultValue = 0,
  step = 1,
  min,
  max,
  onChange,
  value,
  className,
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
    <div className={cn('w-full font-medium text-foreground', className)}>
      <div className="flex w-fit items-center font-body">
        <button className="minus-button group" onClick={decrement}>
          <MinusSolidIcon
            className={cn('block group-hover:hidden', {
              'h-5 w-5 ': size === 'sm',
              'h-10 w-10': size === 'md',
              'h-20 w-20': size === 'lg',
            })}
          />
          <MinusDashedIcon
            className={cn('hidden  group-hover:block', {
              'h-5 w-5 ': size === 'sm',
              'h-10 w-10': size === 'md',
              'h-20 w-20': size === 'lg',
            })}
          />
        </button>
        <input
          className={cn(
            'appearance-none overflow-hidden border-none bg-inherit  text-center outline-none',
            {
              'w-6 px-1  text-sm': size === 'sm',
              'w-12 px-2 text-lg': size === 'md',
              'w-28 px-2 text-6xl': size === 'lg',
            }
          )}
          ref={inputRef}
          type="text"
          readOnly
          {...props}
          {...(value !== undefined ? { value } : { defaultValue })}
        />
        <button className="plus-button group" onClick={increment}>
          <PlusSolidIcon
            className={cn('block group-hover:hidden', {
              'h-5 w-5 ': size === 'sm',
              'h-10 w-10': size === 'md',
              'h-20 w-20': size === 'lg',
            })}
          />
          <PlusDashedIcon
            className={cn('hidden group-hover:block', {
              'h-5 w-5 ': size === 'sm',
              'h-10 w-10': size === 'md',
              'h-20 w-20': size === 'lg',
            })}
          />
        </button>
      </div>
    </div>
  )
}
