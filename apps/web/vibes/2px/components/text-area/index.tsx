'use client'

import React from 'react'

import { cn } from '@/lib/utils'

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

export default function TextArea({
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
      <div className="relative flex">
        <textarea
          className={cn(
            className,
            'min-h-[8rem] min-w-[25rem] border-2 bg-background px-4 py-2 placeholder-foreground outline-none focus:border-l-transparent focus:border-r-transparent focus:border-t-transparent ',
            {
              'border-foreground/50 text-foreground/50': disabled,
              'border-foreground text-foreground hover:border-dashed ':
                variant === 'default' && !disabled,
              'border-foreground  text-error !placeholder-error': variant === 'error',
              'border-foreground text-success !placeholder-success': variant === 'success',
            }
          )}
          required={required}
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={placeholder || 'Placeholder...'}
        />
        <div className="pointer-events-none absolute bottom-0.5 right-0.5 flex h-6 w-6 items-center justify-center bg-white text-foreground">
          <ResizerIcon />
        </div>
      </div>
      {errorMessage && <div className="mt-2 text-xs text-error">{errorMessage}</div>}
    </div>
  )
}

function ResizerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M1 11L11 1" stroke="currentColor" />
      <path d="M6 12L12 6" stroke="currentColor" />
    </svg>
  )
}
