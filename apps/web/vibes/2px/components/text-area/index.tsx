import { ComponentPropsWithRef } from 'react'

import { cn } from '@/lib/utils'

export interface Props extends React.HTMLProps<HTMLTextAreaElement> {
  variant?: 'default' | 'success' | 'error'
  error?: boolean
  errorMessage?: string
}

export default function TextArea({
  className,
  variant = 'default',
  error = false,
  errorMessage,
  disabled = false,
  ...props
}: Props) {
  return (
    <div className="font-body text-sm font-medium leading-6">
      <div className={cn('relative flex', className)}>
        <textarea
          className={cn(
            'min-h-[8rem] w-full border-2 bg-background px-4 py-2 placeholder-foreground outline-none focus:border-l-transparent focus:border-r-transparent focus:border-t-transparent focus:placeholder-transparent',
            {
              'border-foreground/50 text-foreground/50 placeholder-foreground/50': disabled,
              'border-foreground text-foreground hover:border-dashed ': !disabled,
              'border-foreground text-error placeholder-error': variant === 'error',
              'border-foreground text-success placeholder-success': variant === 'success',
            }
          )}
          disabled={disabled}
          {...props}
        />
        <div
          className={cn(
            'absolute bottom-0.5 right-0.5 flex h-6 w-6 items-center justify-center bg-background',
            {
              'pointer-events-none text-foreground': !disabled,
              'cursor-not-allowed text-foreground/50': disabled,
            }
          )}
        >
          <ResizerIcon />
        </div>
      </div>
      {errorMessage && error && <div className="mt-2 text-xs text-error">{errorMessage}</div>}
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
