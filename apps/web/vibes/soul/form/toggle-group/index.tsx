'use client'

import * as React from 'react'

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'

interface Option {
  value: string
  label: string
  disabled?: boolean
}

export const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & {
    label?: string
    options: Option[]
  }
>(({ label, options, ...rest }, ref) => {
  return (
    <ToggleGroupPrimitive.Root {...rest} ref={ref} aria-label={label} className="flex gap-2">
      {options.map(option => (
        <ToggleGroupPrimitive.Item
          value={option.value}
          aria-label={option.label}
          className="whitespace-nowrap rounded-full border border-transparent px-3 py-2 font-body text-sm font-normal ring-primary transition-colors focus-visible:outline-0 focus-visible:ring-2 data-[state=off]:bg-contrast-100 data-[state=on]:bg-foreground data-[state=on]:text-background data-[state=off]:hover:border-contrast-300"
        >
          {option.label}
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  )
})

ToggleGroup.displayName = 'ToggleGroup'
