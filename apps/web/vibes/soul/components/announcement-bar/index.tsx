'use client'

import { useCallback, useEffect, useState } from 'react'
import { ReactNode } from 'react'

import clsx from 'clsx'
import { X } from 'lucide-react'

interface Props {
  className?: string
  children?: ReactNode
}

export const AnnouncementBar = function AnnouncementBar({ className, children }: Props) {
  const [banner, setBanner] = useState({ dismissed: false, initialized: false })

  useEffect(() => {
    const hidden = localStorage.getItem('hidden-banner') === 'true'
    setBanner({ dismissed: hidden, initialized: true })
  }, [])

  const hideBanner = useCallback(() => {
    setBanner(prev => ({ ...prev, dismissed: true }))
    localStorage.setItem('hidden-banner', 'true')
  }, [])

  if (!banner.initialized) return null

  return (
    <div
      id="announcement-bar"
      className={clsx(
        'relative w-full overflow-hidden bg-primary transition-all duration-300 ease-in @container',
        banner.dismissed ? 'pointer-events-none max-h-0' : 'max-h-32',
        className
      )}
    >
      <p className="p-2.5 pr-14 text-sm text-foreground @lg:text-center @xl:text-base">
        {children}
      </p>
      <button
        role="button"
        aria-label="Dismiss banner"
        onClick={e => {
          e.preventDefault()
          hideBanner()
        }}
        className="absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full text-foreground @lg:top-1/2 @lg:-translate-y-1/2"
      >
        <X />
      </button>
    </div>
  )
}

export default AnnouncementBar
