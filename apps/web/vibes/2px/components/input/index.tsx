'use client'

import React from 'react'

import { cn } from '@/lib/utils'
import { CheckIcon, CrossIcon } from '@/vibes/2px/components/icons'

interface Props extends Omit<React.HTMLProps<HTMLInputElement>, 'type'> {
  variant?: 'default' | 'success' | 'error'
  errorMessage?: string
}

export default function Input({ className, variant = 'default', errorMessage, ...props }: Props) {
  return (
    <div className="font-body text-sm font-medium leading-6">
      <div className="relative flex items-center justify-between">
        <input
          type="text"
          className={cn(
            className,
            'custom-caret h-[3.75rem] w-[25rem] border-2 border-foreground bg-background px-4 py-2 text-foreground placeholder-foreground outline-none focus:border-solid focus:border-l-transparent focus:border-r-transparent focus:border-t-transparent focus:placeholder-transparent',
            {
              'border-contrast-300 text-contrast-300 placeholder-contrast-300': props.disabled,
              'hover:border-dashed': !props.disabled,
              'text-error placeholder-error': variant === 'error',
              'border-foreground': variant === 'success',
            }
          )}
          {...props}
        />
        {variant === 'success' && <CheckIcon className="absolute right-4 h-6 w-6 text-success" />}
        {variant === 'error' && <CrossIcon className="absolute right-4 h-6 w-6 text-error" />}
      </div>
      {errorMessage && <div className="mt-2 text-xs text-error">{errorMessage}</div>}
    </div>
  )
}
