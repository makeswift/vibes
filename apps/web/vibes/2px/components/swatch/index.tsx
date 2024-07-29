'use client'

import { cn } from '@/lib/utils'

interface Props {
  className?: string
  name: string
  disabled: boolean
  inStock: boolean
  color: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Swatch({
  className,
  name,
  disabled,
  inStock,
  color,
  checked,
  onChange,
}: Props) {
  return (
    <label
      htmlFor={color}
      className={cn(className, 'w-full', {
        'cursor-pointer': inStock && !disabled,
        'cursor-not-allowed': !inStock || disabled,
      })}
    >
      <input
        type="radio"
        name={name}
        className="hidden"
        value={color}
        id={color}
        checked={checked}
        disabled={disabled || !inStock}
        onChange={onChange}
      />
      <div
        className={cn(
          'relative h-[2.25rem] w-[2.25rem] rounded-full border-foreground hover:border-[2px] hover:border-dashed focus:ring-[2px] focus:ring-accent @lg:h-[4.75rem] @lg:w-[4.75rem]',
          checked && 'border-[2px] border-solid'
        )}
        style={{ backgroundColor: color }}
      >
        {' '}
        {disabled && (
          <div className="absolute left-0 right-0 top-1/2 w-[2.75rem] -translate-x-1 -translate-y-1/2 rotate-45 border border-foreground @lg:w-[5.5rem]" />
        )}
        {!inStock && (
          <div className="absolute left-0 right-0 top-1/2 w-[2.75rem] -translate-x-1 -translate-y-1/2 rotate-45 border-t-[2px] border-dashed border-foreground @lg:w-[5.5rem] " />
        )}
      </div>
    </label>
  )
}
