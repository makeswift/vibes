'use client'

import * as React from 'react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as LabelPrimitive from '@radix-ui/react-label'
import { clsx } from 'clsx'
import { Check } from 'lucide-react'

import { ErrorMessage } from '@/vibes/soul/form/error-message'

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    label?: string
    error?: string
  }
>(({ id, label, error, className, ...rest }) => {
  return (
    <div className="space-y-2">
      <div className={clsx('flex items-center gap-2', className)}>
        <CheckboxPrimitive.Root
          {...rest}
          id={id}
          className={clsx(
            'flex h-6 w-6 items-center justify-center rounded-md border transition-colors duration-150 focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-primary data-[state=checked]:border-foreground data-[state=unchecked]:border-contrast-300 data-[state=checked]:bg-foreground data-[state=unchecked]:bg-background',
            error != null && error !== '' ? 'border-error' : 'border-contrast-300'
          )}
        >
          <CheckboxPrimitive.Indicator>
            <Check color="white" className="h-4 w-4" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        {label != null && label !== '' && (
          <LabelPrimitive.Root className="cursor-pointer font-body text-sm" htmlFor={id}>
            {label}
          </LabelPrimitive.Root>
        )}
      </div>
      {error != null && error !== '' && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  )
})

Checkbox.displayName = 'Checkbox'
