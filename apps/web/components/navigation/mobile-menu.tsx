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
          className="inline-flex h-6 w-7 shrink-0 flex-col justify-between px-1 py-1.5 transition-transform xl:hidden"
          role="button"
          aria-label="Open mobile navigation"
        >
          <div
            className={clsx(
              'h-0.5 w-full bg-foreground transition-transform duration-200',
              isOpen ? 'translate-y-[5px] rotate-45' : 'translate-y-[1px] rotate-0'
            )}
          />
          <div
            className={clsx(
              'h-0.5 bg-foreground transition-all duration-200',
              isOpen ? 'w-full -translate-y-[5px] -rotate-45' : 'w-4/5 translate-y-[-1px] rotate-0'
            )}
          />
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
