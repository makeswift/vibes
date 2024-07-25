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
      <SheetContent side="top" className="z-20">
        <div className="mx-auto gap-5 px-5 xl:container lg:flex xl:px-8 ">
          {navigation.vibes.map(vibe => (
            <Link key={vibe.slug} href={`/docs/${vibe.slug}`} className="flex-1">
              <img src="" alt="" className="mb-4 aspect-video bg-contrast-100" />
              <div className="mb-2 flex gap-x-2 text-xl font-bold">{vibe.name}</div>
              <p className="text-foreground">
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
