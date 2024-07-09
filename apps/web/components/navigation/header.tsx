'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import * as Portal from '@radix-ui/react-portal'
import clsx from 'clsx'

import { ModeToggle } from '@/components/ui/mode-toggle'
import { Search } from '@/icons/generated'

interface Props {
  sidebar: React.ReactNode
}

export function Header({ sidebar }: Props) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', mobileNavOpen)
  }, [mobileNavOpen])

  useEffect(() => {
    setMobileNavOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-30 h-14 border-b border-dashed border-foreground/25 bg-background px-4 md:h-16 md:px-6">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between pb-0.5">
        <div className="flex items-center gap-x-3 md:gap-x-4">
          <button
            className="relative mt-0.5 block rounded-full px-1 py-1.5 md:hidden"
            role="button"
            aria-label="Open mobile navigation"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <div className="flex h-4 w-5 flex-col justify-between py-0.5 transition-transform">
              <div
                className={clsx(
                  'h-0.5 w-full bg-foreground transition-transform duration-200',
                  mobileNavOpen ? 'translate-y-[5px] rotate-45' : 'translate-y-0 rotate-0'
                )}
              ></div>
              <div
                className={clsx(
                  'h-0.5 w-full bg-foreground transition-transform duration-200',
                  mobileNavOpen ? '-translate-y-[5px] -rotate-45' : 'translate-y-0 rotate-0'
                )}
              ></div>
            </div>
          </button>

          {mobileNavOpen && (
            <Portal.Root asChild>
              <div className="fixed inset-x-0 bottom-0 top-14 z-20 flex flex-1 flex-col overflow-auto bg-background p-4 md:p-6">
                {sidebar}
              </div>
            </Portal.Root>
          )}

          <Link href="/" className="shrink-0">
            <Image src="/logo.svg" width={90} height={24} alt="Vibes logo" priority />
          </Link>
        </div>

        <div className="flex items-center gap-x-3">
          <Search />

          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
