'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import clsx from 'clsx'

import ChevronDown12 from '@/icons/generated/ChevronDown12'

import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { navigation } from './navigation'

interface Props {
  vibeSlug: string
}

export function VibeSelect({ vibeSlug }: Props) {
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
        <Button variant="ghost" size="small">
          <span className="text-sm">{vibe.name}</span>
          <ChevronDown12
            className={clsx(
              'stroke-foreground transition-transform',
              isOpen ? 'rotate-180' : 'rotate-0'
            )}
          />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="z-20 focus:outline-none">
        <div className="mx-auto grid grid-cols-1 gap-x-6 gap-y-8 xl:container md:grid-cols-2 md:gap-y-10 lg:gap-x-8 lg:py-2 xl:px-8 2xl:grid-cols-3">
          {navigation.vibes.map(vibe => (
            <Link
              key={vibe.slug}
              href={`/docs/${vibe.slug}`}
              className="group ring-primary ring-offset-8 focus:outline-none focus-visible:ring-2"
            >
              <div className="marching-ants mb-4 border border-dashed border-transparent [animation-play-state:paused] group-hover:[animation-play-state:running]">
                <img
                  src=""
                  alt=""
                  className="aspect-video bg-contrast-200 ring-0 ring-inset ring-background transition-all group-hover:ring-[12px]"
                />
              </div>

              <div className="mb-2 flex items-center gap-x-2">
                <span className="mb-0.5 text-xl font-bold">{vibe.name}</span>
                <span className="rounded-full border border-foreground px-2 py-0.5 text-xs font-bold text-foreground">
                  Ecommerce
                </span>
              </div>
              <p className="pr-4 font-light text-foreground">
                A sleek and modern SaaS website theme inspired by Linear, featuring minimalistic
                design, intuitive navigation, and a focus on user experience.
              </p>
            </Link>
          ))}
          {navigation.vibes.map(vibe => (
            <Link
              key={vibe.slug}
              href={`/docs/${vibe.slug}`}
              className="group ring-primary ring-offset-8 focus:outline-none focus-visible:ring-2"
            >
              <div className="marching-ants mb-4 border border-dashed border-transparent [animation-play-state:paused] group-hover:[animation-play-state:running]">
                <img
                  src=""
                  alt=""
                  className="aspect-video bg-contrast-200 ring-0 ring-inset ring-background transition-all group-hover:ring-[12px]"
                />
              </div>

              <div className="mb-2 flex items-center gap-x-2 text-xl font-bold">
                <span className="mb-0.5">{vibe.name}</span>
                <span className="rounded-full border border-foreground px-2 py-0.5 text-xs font-bold text-foreground">
                  Ecommerce
                </span>
              </div>
              <p className="pr-4 font-light text-foreground">
                A sleek and modern SaaS website theme inspired by Linear, featuring minimalistic
                design, intuitive navigation, and a focus on user experience.
              </p>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
