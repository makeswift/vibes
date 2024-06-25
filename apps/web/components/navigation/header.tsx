'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import * as Portal from '@radix-ui/react-portal'
import clsx from 'clsx'

import { ModeToggle } from '@/components/ui/mode-toggle'

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
    <header className="border-docs-foreground/25 bg-docs-background sticky top-0 z-30 h-14 border-b border-dashed px-4 md:h-16 md:px-6">
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
                  'bg-docs-foreground h-0.5 w-full transition-transform duration-200',
                  mobileNavOpen ? 'translate-y-[5px] rotate-45' : 'translate-y-0 rotate-0'
                )}
              ></div>
              <div
                className={clsx(
                  'bg-docs-foreground h-0.5 w-full transition-transform duration-200',
                  mobileNavOpen ? '-translate-y-[5px] -rotate-45' : 'translate-y-0 rotate-0'
                )}
              ></div>
            </div>
          </button>

          {mobileNavOpen && (
            <Portal.Root asChild>
              <div className="bg-docs-background fixed inset-x-0 bottom-0 top-14 z-20 flex flex-1 flex-col overflow-auto p-4 md:p-6">
                {sidebar}
              </div>
            </Portal.Root>
          )}

          <Link href="/" className="shrink-0">
            <Image src="/logo.svg" width={90} height={24} alt="Vibes logo" priority />
          </Link>
        </div>

        <div className="flex items-center gap-x-3">
          <form className="hidden w-72 md:block">
            <label htmlFor="default-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-2">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  className="stroke-docs-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9" cy="9" r="6.5" stroke="inherit" />
                  <path d="M18 18L13.5 13.5" stroke="inherit" />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="border-docs-foreground/20 text-docs-foreground placeholder-docs-foreground/50 hover:border-docs-foreground bg-docs-background block w-full rounded-none border py-2 pr-3 ps-9 text-sm outline-none ring-0 transition-colors ease-linear"
                placeholder="Search"
                required
              />
              <div className="text-docs-foreground/50 absolute end-2.5 top-1/2 -translate-y-1/2 rounded-lg px-2 py-2 text-xs font-medium focus:outline-none">
                ⌘K
              </div>
            </div>
          </form>

          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
