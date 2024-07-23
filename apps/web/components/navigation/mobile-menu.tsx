import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import clsx from 'clsx'

import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { navigation } from './navigation'
import { PageLink } from './page-link'

interface Props {
  vibeSlug: string
}

export function MobileMenu({ vibeSlug }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const vibe = navigation.vibes.find(vibe => vibe.slug === vibeSlug)
  const pathname = usePathname()

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen)
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  if (!vibe) return null

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="relative mr-1 mt-0.5 block rounded-full px-1 py-1.5 xl:hidden"
          role="button"
          aria-label="Open mobile navigation"
        >
          <div className="flex h-4 w-5 flex-col justify-between py-0.5 transition-transform">
            <div
              className={clsx(
                'h-0.5 w-full bg-foreground transition-transform duration-200',
                isOpen ? 'translate-y-[5px] rotate-45' : 'translate-y-0 rotate-0'
              )}
            ></div>
            <div
              className={clsx(
                'h-0.5 w-full bg-foreground transition-transform duration-200',
                isOpen ? '-translate-y-[5px] -rotate-45' : 'translate-y-0 rotate-0'
              )}
            ></div>
          </div>
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full md:w-72">
        <div className="space-y-4 text-foreground">
          {vibe?.groups.map(group => (
            <div key={group.title}>
              <div className="pb-1.5 text-sm font-bold leading-normal">{group.title}</div>

              <ul>
                {group.pages.map(page => (
                  <li key={page.slug}>
                    <PageLink className="block py-1.5" vibe={vibe} page={page} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
