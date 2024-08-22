'use client'

import { ComponentPropsWithRef, FormEventHandler, useState } from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { cn } from '@/lib/utils'

interface Swatch {
  className?: string
  color?: string
  label?: string
  onMouseEnter?: () => void
  value: string
  inStock: boolean
  disabled: boolean
}

interface Props extends ComponentPropsWithRef<typeof RadioGroupPrimitive.Root> {
  error?: boolean
  swatches: Swatch[]
}

export default function Swatch({ className, swatches, ...props }: Props) {
  const [selectedValue, setSelectedValue] = useState('')
  return (
    <RadioGroupPrimitive.Root {...props} className={className} role="radiogroup">
      {swatches.map(swatch => (
        <SwatchItem
          key={swatch.value}
          {...swatch}
          checked={selectedValue === swatch.value}
          onClick={() => setSelectedValue(swatch.value)}
        />
      ))}
    </RadioGroupPrimitive.Root>
  )
}

function SwatchItem({
  className,
  disabled,
  value,
  inStock,
  color,
  checked,
  onClick,
}: Swatch & { checked: boolean; onClick: FormEventHandler }) {
  const hexColorRegex = /^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/
  const style = !color
    ? { backgroundColor: 'transparent' }
    : hexColorRegex.test(color)
      ? { backgroundColor: color }
      : {
          backgroundImage: `url(${color})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }
  return (
    <RadioGroupPrimitive.Item
      className={cn(className, 'group/item gap-3', {
        'cursor-not-allowed': disabled || !inStock,
        'inline-flex cursor-pointer items-center': !disabled && inStock,
      })}
      value={value}
      disabled={disabled || !inStock}
      onClick={onClick}
    >
      <span className="relative grid grid-cols-[2.25rem] grid-rows-[2.25rem] @lg:grid-cols-[4.75rem] @lg:grid-rows-[4.75rem]">
        <span
          className={cn(
            'absolute left-0 right-0 col-span-1 col-start-1 row-span-1 row-start-1 h-full w-full rounded-full ',
            {
              'group-hover/item:border-2 group-hover/item:border-dashed group-hover/item:border-foreground':
                !disabled && inStock,
            }
          )}
        />
        <span
          className={cn(
            'invisible absolute left-0 right-0 col-span-1 col-start-1 row-span-1 row-start-1 h-full w-full place-self-center rounded-full border-2 border-accent',
            { 'group-focus-within/item:visible': !disabled }
          )}
        />

        <span
          className={cn(
            'absolute  left-0 right-0 col-span-1 col-start-1 row-span-1 row-start-1 h-full w-full rounded-full border-2 border-foreground',
            {
              'border-foreground': checked,
              'border-transparent': !checked,
            }
          )}
          style={style}
        />
        {disabled || !inStock ? (
          <span
            className={cn(
              'absolute top-1/2 w-full rotate-45 scale-x-[120%] border-t-2 border-foreground',
              {
                'border-dashed': !inStock,
              }
            )}
          />
        ) : null}
      </span>
    </RadioGroupPrimitive.Item>
  )
}
