'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import clsx from 'clsx'

import ChevronDown12 from '@/icons/generated/ChevronDown12'
import * as Vibes from '@/vibes'

import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

interface Props {
  vibeSlug: string
}

const vibes = Object.values(Vibes)

export function VibeSelect({ vibeSlug }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const activeVibe = vibes.find(vibe => vibe.slug === vibeSlug)

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen)
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  if (!activeVibe) return null

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="small">
            <span className="text-sm">{activeVibe.name}</span>
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
            {Object.values(Vibes).map(vibe => (
              <div key={vibe.slug}>
                <Link
                  href={`/docs/${vibe.slug}`}
                  className="group ring-primary ring-offset-8 focus:outline-none focus-visible:ring-2"
                >
                  <div className="relative mb-4 aspect-video">
                    <div className="marching-ants absolute inset-0 border border-dashed border-transparent bg-transparent opacity-50 transition-all [animation-play-state:paused] group-hover:-inset-1 group-hover:opacity-100 group-hover:[animation-play-state:running]" />
                    <Image
                      fill
                      priority
                      src={vibe.thumbnail}
                      alt={`Thumbnail of ${vibe.name} vibe`}
                      className="bg-contrast-100"
                    />
                  </div>
                </Link>
                <div className="mb-2 flex justify-between">
                  <div className="mb-1">
                    <Link className="text-xl font-bold" href={`/docs/${vibe.slug}`}>
                      {vibe.name}
                    </Link>
                    <div className="text-xs">
                      <span className="text-contrast-400">by </span>
                      <Link
                        href={vibe.author.url}
                        target="_blank"
                        className="marching-ants-link text-contrast-500"
                      >
                        {vibe.author.name}
                      </Link>
                    </div>
                  </div>
                  <div>
                    {vibe.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-foreground px-2 py-0.5 text-xs font-bold text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="pr-4 font-light text-foreground">{vibe.description}</p>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden" aria-hidden="true">
        {Object.values(Vibes).map(vibe => (
          <Image
            key={vibe.slug}
            fill
            priority
            src={vibe.thumbnail}
            alt={`Preload thumbnail of ${vibe.name} vibe`}
          />
        ))}
      </div>
    </>
  )
}
