import Link from 'next/link'
import * as React from 'react'

import clsx from 'clsx'

const VARIANT_STYLES = {
  default:
    'bg-background text-foreground border-foreground pattern-shadow pattern-shadow-sm hover:pattern-shadow-hover',
  ghost: 'hover:bg-foreground/5 border-transparent',
  link: 'text-primary underline-offset-4 hover:underline',
}

const SIZE_STYLES = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  icon: 'h-10 w-10',
}

export interface Props {
  href?: string
  variant?: 'default' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'icon'
  children?: React.ReactNode
}

const Button = React.forwardRef<HTMLAnchorElement | HTMLButtonElement>(
  ({ href, variant = 'default', size = 'default', children = 'Button' }: Props, ref) => {
    const buttonClasses = clsx(
      'inline-flex items-center justify-center whitespace-nowrap rounded-full border text-sm font-semibold outline-none ring-offset-background transition-colors before:hidden disabled:pointer-events-none disabled:opacity-50',
      VARIANT_STYLES[variant],
      SIZE_STYLES[size]
    )

    return href ? (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        className="not-prose relative z-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/30 focus-visible:ring-offset-1"
        href={href}
      >
        <div className={buttonClasses}>
          <span className="shrink-0">{children}</span>
        </div>
      </Link>
    ) : (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className="not-prose relative z-0 focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <div className={buttonClasses}>
          <span className="shrink-0">{children}</span>
        </div>
      </button>
    )
  }
)

export { Button }
