'use client'

import * as React from 'react'

import { clsx } from 'clsx'

import { ErrorMessage } from '@/vibes/soul/form/error-message'
import { Label } from '@/vibes/soul/form/label'

export const Textarea = React.forwardRef<
  React.ElementRef<'textarea'>,
  React.ComponentPropsWithoutRef<'textarea'> & {
    prepend?: React.ReactNode
    label?: string
    error?: string
  }
>(({ label, className, required, error, ...rest }, ref) => {
  return (
    <div className={clsx('space-y-2', className)}>
      <div className="flex items-center justify-between">
        {label != null && label !== '' && (
          <Label className="mb-2 block text-foreground">{label}</Label>
        )}
        {required === true && <span className="text-xs text-contrast-300">Required</span>}
      </div>
      <div className="relative overflow-hidden rounded-lg border border-contrast-100 bg-background transition-colors duration-200 focus-within:border-foreground focus:outline-none">
        <textarea
          {...rest}
          ref={ref}
          className="placeholder-contrast-gray-500 w-full bg-transparent p-3 text-foreground placeholder:font-normal focus:outline-none"
        />
      </div>
      {error != null && error !== '' && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  )
})

Textarea.displayName = 'Textarea'
