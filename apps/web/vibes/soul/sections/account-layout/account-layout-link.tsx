'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import clsx from 'clsx'

export function AccountLayoutLink({
  className,
  href,
  ...rest
}: React.ComponentPropsWithoutRef<typeof Link>) {
  const pathname = usePathname()

  console.log({ pathname })

  return (
    <Link
      {...rest}
      href={href}
      className={clsx(
        'flex min-h-10 items-center rounded-md px-3 text-sm font-semibold',
        pathname.includes(href.toString()) ? 'bg-contrast-100' : 'hover:bg-contrast-100',
        className
      )}
    />
  )
}
