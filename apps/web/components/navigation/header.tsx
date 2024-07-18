'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import * as Portal from '@radix-ui/react-portal'
import clsx from 'clsx'

import { ModeToggle } from '@/components/ui/mode-toggle'
import { Search } from '@/icons/generated'

import { Button } from '../ui/button'
import { GroupLink } from './group-link'
import { Link } from './link'
import { Group, Vibe, navigation } from './navigation'
import { PageLink } from './page-link'
import { VibeSelect } from './vibe-select'

interface Props {
  vibeSlug: string
}

export function Header({ vibeSlug }: Props) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const vibe = navigation.vibes.find(vibe => vibe.slug === vibeSlug)
  const pathname = usePathname()

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', mobileNavOpen)
  }, [mobileNavOpen])

  useEffect(() => {
    setMobileNavOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-30 h-14 border-b border-dashed border-contrast-400 bg-background md:h-16">
      <div className="mx-auto flex h-full items-center justify-between px-5 xl:container xl:px-8">
        <div className="flex flex-1 items-center gap-x-3 md:gap-x-4">
          <button
            className="relative mt-0.5 block rounded-full px-1 py-1.5 xl:hidden"
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

          <Link href="/" className="shrink-0">
            <Image
              src="/logo.svg"
              width={80}
              height={22}
              alt="Vibes logo"
              priority
              className="mb-0.5"
            />
          </Link>

          <div className="flex items-center gap-x-0.5">
            <div className="w-2">
              <div className="mx-auto h-5 w-[1px] -skew-x-[20deg] bg-contrast-500" />
            </div>

            <VibeSelect vibeSlug={vibeSlug} />
          </div>
        </div>

        <nav className="hidden h-full gap-x-4 xl:flex">
          {vibe?.groups.map(group => (
            <GroupLink
              key={group.pages[0].slug}
              vibe={vibe}
              group={group}
              className="h-[calc(100%+1px)] place-content-center border-b-2 border-transparent"
            />
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-x-1">
          <Button variant="ghost" size="icon">
            <Search />
          </Button>

          <ModeToggle />
        </div>
      </div>

      {mobileNavOpen && (
        <Portal.Root asChild>
          <div className="fixed inset-x-0 bottom-0 top-14 z-20 flex flex-1 flex-col overflow-auto bg-background p-4 md:p-6">
            <div className="space-y-2 text-foreground">
              {vibe?.groups.map(group => (
                <div key={group.title}>
                  <div className="font-docs-heading flex items-center gap-2 py-1.5 text-sm leading-normal">
                    {group.title}
                  </div>

                  <ul>
                    {group.pages.map(page => (
                      <li key={page.slug}>
                        <PageLink className="block py-1 pl-7" vibe={vibe} page={page} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Portal.Root>
      )}
    </header>
  )
}
