'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

export function SidebarLink(props: ComponentPropsWithoutRef<typeof Link>) {
  const pathname = usePathname()

  return (
    <Link
      {...props}
      className={clsx(
        props.className,
        'block py-1 pl-7 text-sm leading-normal transition-opacity',
        pathname === props.href
          ? 'font-semibold opacity-100'
          : 'opacity-60 hover:!opacity-100 dark:opacity-70'
      )}
    />
  )
}
