import * as React from 'react'

import clsx from 'clsx'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variant?: 'default' | 'ghost' | 'link'
  size?: 'large' | 'medium' | 'small' | 'icon'
  active?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = 'default', size = 'medium', active = true, children, ...props }, ref) => {
    return (
      <button
        className={clsx(
          'relative z-0 ring-offset-2 ring-offset-background focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
          className
        )}
        ref={ref}
        {...props}
      >
        <span
          className={clsx(
            'inline-flex items-center justify-center whitespace-nowrap rounded-full border font-bold outline-none ring-offset-background transition-colors',
            {
              default:
                'pattern-shadow pattern-shadow-sm pattern-shadow-hover border-foreground bg-background',
              ghost: 'border-transparent hover:bg-contrast-100',
              link: 'underline-offset-4 hover:underline',
            }[variant],
            {
              large: 'gap-x-2 px-4 py-2 text-base',
              medium: 'gap-x-2 px-4 py-2 text-sm',
              small: 'gap-x-1.5 px-3 py-1.5 text-xs',
              icon: 'p-2',
            }[size],
            active
              ? 'text-foreground'
              : 'text-contrast-300 hover:text-contrast-400 [&_svg]:stroke-current'
          )}
        >
          {children}
        </span>
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
