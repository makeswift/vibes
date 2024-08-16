import React, { ComponentPropsWithRef } from 'react'

import { cn } from '@/lib/utils'

interface Props extends ComponentPropsWithRef<'input'> {
  error?: boolean
  icon?: React.ReactNode
  variant?: 'default' | 'success' | 'error'
  errorMessage?: string
  errorClassName?: string
}

export default function Input({
  className,
  variant = 'default',
  error,
  icon,
  errorMessage,
  errorClassName,
  ...props
}: Props) {
  return (
    <div className="w-full font-body text-sm font-medium leading-6">
      <div className="relative inline-block w-full">
        <input
          type="text"
          className={cn(
            'h-[3.75rem] w-[25rem] border-2 border-foreground bg-background px-4 py-2 text-foreground placeholder-foreground outline-none focus:border-solid focus:border-l-transparent focus:border-r-transparent focus:border-t-transparent focus:placeholder-transparent',
            {
              'border-contrast-300 text-contrast-300 placeholder-contrast-300': props.disabled,
              'hover:border-dashed': !props.disabled,
              'text-error placeholder-error': variant === 'error',
              'border-foreground': variant === 'success',
            },
            className
          )}
          {...props}
        />
        {icon && <div className="absolute right-4 top-1/2 -translate-y-1/2">{icon}</div>}
      </div>
      {error && errorMessage && (
        <div className={cn('mt-2 text-xs text-error', errorClassName)}>{errorMessage}</div>
      )}
    </div>
  )
}
