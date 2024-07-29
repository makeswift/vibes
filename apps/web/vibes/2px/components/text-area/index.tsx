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
              'text-error  !placeholder-error border-foreground': variant === 'error',
              'text-success !placeholder-success border-foreground': variant === 'success',
            }
          )}
          required={required}
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={placeholder || 'Placeholder...'}
        />
        <span className="pointer-events-none absolute bottom-0.5 right-0.5 flex h-5 w-5 items-center justify-center bg-background bg-white">
          <span className="shrink-0 -rotate-45">
            <span className="mx-auto mb-1 block h-0.5 w-3 shrink-0 bg-foreground" />
            <span className="mx-auto block h-0.5 w-2 shrink-0 bg-foreground" />
          </span>
        </span>
      </div>
      {errorMessage && <div className="text-error mt-2 text-xs">{errorMessage}</div>}
    </div>
  )
}
