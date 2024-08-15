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
          'not-prose group relative z-0 inline-block rounded-full outline-none',
          className
        )}
        href={href ?? '#'}
      >
        <span
          className={clsx(
            'inline-flex items-center justify-center whitespace-nowrap rounded-full border stroke-foreground font-bold text-foreground ring-1 ring-inset ring-transparent ring-offset-0 transition-colors group-focus-visible:border-primary group-focus-visible:ring-primary',
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
