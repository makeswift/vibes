'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ReactNode } from 'react'

import clsx from 'clsx'

import XMark from '@/vibes/soul/components/icons/XMark'

type Props = {
  className?: string
  children?: ReactNode
}

export const AnnouncementBar = function AnnouncementBar({ className, children }: Props) {
  const [dismissed, setDismissed] = useState(false)

  return (
    <Link
      href="/"
      className={clsx(
        'relative w-full bg-primary transition-transform duration-300 @container',
        className,
        dismissed ? 'pointer-events-none scale-y-0' : 'scale-y-full'
      )}
    >
      <p className="line-clamp-2 p-2.5 pr-14 @lg:pr-14 @lg:text-center">{children}</p>
      <button
        role="button"
        aria-label="Dismiss banner"
        onClick={e => {
          e.preventDefault()
          setDismissed(true)
        }}
        className="absolute right-2.5 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full text-foreground transition-transform duration-300 hover:scale-125"
      >
        <XMark />
      </button>
    </Link>
  )
}

export default AnnouncementBar
