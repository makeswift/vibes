import Link from 'next/link'
import * as React from 'react'

import clsx from 'clsx'

export interface Props extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode
  variant?: 'default' | 'ghost' | 'link'
  size?: 'large' | 'medium' | 'small' | 'icon'
}

export interface Props {
  className?: string
  href?: string
  children?: React.ReactNode
  variant?: 'default' | 'ghost' | 'link'
  size?: 'large' | 'medium' | 'small' | 'icon'
}

const ButtonLink = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, href, variant = 'default', size = 'medium', children = 'Button' }) => {
    return (
      <Link
        className={clsx(
          'relative z-0 ring-offset-2 ring-offset-background before:hidden focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
          className
        )}
        href={href ?? '#'}
      >
        <span
          className={clsx(
            'inline-flex items-center justify-center whitespace-nowrap rounded-full border stroke-foreground font-bold text-foreground outline-none ring-offset-background transition-colors',
            {
              default:
                'pattern-shadow pattern-shadow-sm pattern-shadow-hover border-foreground bg-background',
              ghost: 'border-transparent hover:bg-contrast-100',
              link: 'underline-offset-4 hover:underline',
            }[variant],
            {
              large: 'gap-x-2 px-4 py-2 text-base',
              medium: 'h-10 gap-x-2 px-4 py-2 text-sm',
              small: 'h-8 gap-x-1.5 px-3 py-1.5 text-xs',
              icon: 'p-1.5',
            }[size]
          )}
        >
          {children}
        </span>
      </Link>
    )
  }
)

ButtonLink.displayName = 'ButtonLink'
export { ButtonLink }
