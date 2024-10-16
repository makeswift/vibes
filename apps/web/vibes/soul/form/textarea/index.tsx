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
        {label != null && label !== '' && <Label>{label}</Label>}
        {required === true && <span className="text-xs text-contrast-300">Required</span>}
      </div>
      <textarea
        {...rest}
        ref={ref}
        className={clsx(
          'placeholder-contrast-gray-500 w-full rounded-lg border bg-background p-3 text-foreground transition-colors duration-200 placeholder:font-normal focus:border-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          error != null && error !== '' ? 'border-error' : 'border-contrast-100'
        )}
      />
      {error != null && error !== '' && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  )
})

Textarea.displayName = 'Textarea'
