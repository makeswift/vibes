import Link from 'next/link'
import * as React from 'react'

import clsx from 'clsx'

const VARIANT_STYLES = {
  default:
    'bg-docs-background text-docs-foreground border-docs-foreground pattern-shadow pattern-shadow-sm hover:pattern-shadow-hover',
  ghost: 'hover:bg-docs-foreground/5 border-transparent',
  link: 'text-docs-foreground underline-offset-4 hover:underline',
}

const SIZE_STYLES = {
  default: 'h-10 px-4 py-2',
  small: 'h-8 py-1 text-xs px-3',
  icon: 'h-10 w-10',
}

export interface Props {
  className?: string
  href?: string
  variant?: 'default' | 'ghost' | 'link'
  size?: 'default' | 'small' | 'icon'
  children?: React.ReactNode
}

const ButtonLink = ({
  className,
  href,
  variant = 'default',
  size = 'default',
  children = 'Button',
}: Props) => {
  const buttonClasses = clsx(
    'inline-flex items-center justify-center whitespace-nowrap rounded-full border text-sm font-semibold outline-none transition-colors before:hidden',
    VARIANT_STYLES[variant],
    SIZE_STYLES[size]
  )

  return (
    <Link
      className={clsx(
        'not-prose relative z-0 inline-block ring-offset-2 ring-offset-docs-background focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-docs-ring',
        className
      )}
      href={href ?? '#'}
    >
      <div className={buttonClasses}>{children}</div>
    </Link>
  )
}

export { ButtonLink }
