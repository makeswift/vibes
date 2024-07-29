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
      <textarea
        className={cn(
          className,
          'min-h-[8rem] min-w-[25rem] border-[2px] px-4 py-2 placeholder-foreground outline-none focus:border-l-transparent focus:border-r-transparent focus:border-t-transparent ',
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
      {errorMessage && <div className="mt-2 text-xs text-error">{errorMessage}</div>}
    </div>
  )
}
