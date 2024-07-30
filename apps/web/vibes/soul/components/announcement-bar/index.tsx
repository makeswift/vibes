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
        'relative w-full overflow-hidden bg-primary transition-all duration-300 ease-out @container',
        className,
        dismissed ? 'pointer-events-none max-h-0' : 'max-h-32'
      )}
    >
      <p className="p-2.5 pr-14 text-foreground @lg:text-center">{children}</p>
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
