import * as React from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import { ErrorMessage } from '@/vibes/soul/form/error-message'
import { Label } from '@/vibes/soul/form/label'

interface Option {
  value: string
  label: string
  disabled?: boolean
}

export const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    label?: string
    options: Option[]
    errors?: string[]
  }
>(({ id, label, options, errors, className, ...rest }, ref) => {
  return (
    <div className={clsx('space-y-2', className)}>
      {label !== undefined && label !== '' && <Label htmlFor={id}>{label}</Label>}
      <RadioGroupPrimitive.Root
        {...rest}
        ref={ref}
        aria-label={label}
        className="flex flex-wrap gap-x-1 gap-y-2"
      >
        {options.map(option => (
          <RadioGroupPrimitive.Item
            key={option.value}
            value={option.value}
            aria-label={option.label}
            disabled={option.disabled}
            className="whitespace-nowrap rounded-full border border-contrast-100 px-3 py-1.5 font-body text-sm font-normal leading-normal ring-primary transition-colors focus-visible:outline-0 focus-visible:ring-2 data-[disabled]:cursor-not-allowed data-[state=checked]:border-foreground data-[state=checked]:bg-foreground data-[state=unchecked]:bg-background data-[state=checked]:text-background data-[disabled]:opacity-50 data-[disabled]:hover:border-transparent data-[state=unchecked]:hover:border-contrast-200 data-[state=unchecked]:hover:bg-contrast-100"
          >
            {option.label}
          </RadioGroupPrimitive.Item>
        ))}
      </RadioGroupPrimitive.Root>
      {errors?.map(error => <ErrorMessage key={error}>{error}</ErrorMessage>)}
    </div>
  )
})

ToggleGroup.displayName = 'ToggleGroup'
