'use client'

import React from 'react'

import { cn } from '@/lib/utils'
import { CheckIcon, CrossIcon } from '@/vibes/2px/components/icons'

interface Props {
  className?: string
  required: boolean
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  variant: 'default' | 'success' | 'error'
  errorMessage?: string
  disabled?: boolean
  placeholder?: string
}

export default function Input({
  className,
  required,
  value,
  setValue,
  variant = 'default',
  errorMessage,
  disabled = false,
  placeholder,
}: Props) {
  return (
    <div className="font-body text-sm font-medium leading-6">
      <div className="relative flex items-center justify-between">
        <input
          type="text"
          className={cn(
            className,
            'custom-caret  h-[3.75rem] w-[25rem] border-2 bg-background px-4 py-2 placeholder-foreground outline-none focus:border-l-transparent focus:border-r-transparent focus:border-t-transparent focus:placeholder-transparent',
            {
              'border-contrast-300 text-contrast-300 placeholder-contrast-300': disabled,
              'border-foreground text-foreground hover:border-dashed ':
                variant === 'default' && !disabled,
              'border-foreground  text-error !placeholder-error': variant === 'error',
              'border-foreground': variant === 'success',
            }
          )}
          required={required}
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={placeholder || 'Placeholder...'}
        />
        {variant === 'success' && <CheckIcon className="absolute right-4 h-6 w-6 text-success" />}
        {variant === 'error' && <CrossIcon className="absolute right-4 h-6 w-6 text-error" />}
      </div>
      {errorMessage && <div className="mt-2 text-xs text-error">{errorMessage}</div>}
    </div>
  )
}
