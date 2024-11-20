'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export function AccountLayoutLink({
  className,
  href,
  ...rest
}: React.ComponentPropsWithoutRef<typeof Link>) {
  const pathname = usePathname()
  const linkPathname = typeof href === 'string' ? href : (href.pathname ?? null)

  return (
    <Link
      {...rest}
      className={clsx(
        'flex min-h-10 items-center rounded-md px-3 text-sm font-semibold',
        linkPathname !== null && pathname.includes(linkPathname)
          ? 'bg-contrast-100'
          : 'hover:bg-contrast-100',
        className
      )}
      href={href}
    />
  )
}
