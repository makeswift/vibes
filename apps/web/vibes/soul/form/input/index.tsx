'use client'

import * as React from 'react'

import { clsx } from 'clsx'

import { ErrorMessage } from '@/vibes/soul/form/error-message'
import { Label } from '@/vibes/soul/form/label'

export const Input = React.forwardRef<
  React.ElementRef<'input'>,
  React.ComponentPropsWithoutRef<'input'> & {
    prepend?: React.ReactNode
    label?: string
    error?: string
  }
>(({ prepend, label, className, required, error, ...rest }, ref) => {
  return (
    <div className={clsx('w-full space-y-2', className)}>
      <div className="flex items-center justify-between">
        {label != null && label !== '' && <Label>{label}</Label>}
        {required === true && <span className="text-xs text-contrast-300">Required</span>}
      </div>
      <div
        className={clsx(
          'relative overflow-hidden rounded-lg border bg-background transition-colors duration-200 focus-within:border-foreground focus:outline-none',
          error != null && error !== '' ? 'border-error' : 'border-contrast-100'
        )}
      >
        {prepend != null && prepend !== '' && (
          <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2">
            {prepend}
          </span>
        )}
        <input
          {...rest}
          ref={ref}
          className={clsx(
            'placeholder-contrast-gray-500 w-full bg-transparent px-6 py-3 text-foreground [appearance:textfield] placeholder:font-normal focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
            { 'py-3 pl-10 pr-6': prepend }
          )}
        />
      </div>
      {error != null && error !== '' && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  )
})

Input.displayName = 'Input'
