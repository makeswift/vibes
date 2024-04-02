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

const Button = ({ href, variant = 'default', size = 'default', children = 'Button' }: Props) => {
  const buttonClasses = clsx(
    'inline-flex items-center justify-center whitespace-nowrap rounded-full border text-sm font-semibold outline-none ring-offset-background transition-colors before:hidden',
    VARIANT_STYLES[variant],
    SIZE_STYLES[size]
  )

  return (
    <Link
      className="not-prose relative z-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/30 focus-visible:ring-offset-1"
      href={href ?? '#'}
    >
      <div className={buttonClasses}>{children}</div>
    </Link>
  )
}

export { Button }
