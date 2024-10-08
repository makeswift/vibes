'use client'

import Image from 'next/image'

import '@docsearch/css'
import { DocSearch } from '@docsearch/react'

import { ModeToggle } from '@/components/ui/mode-toggle'
import { Search } from '@/icons/generated'

import { Button } from '../ui/button'
import { GroupLink } from './group-link'
import { Link } from './link'
import { MobileMenu } from './mobile-menu'
import { navigation } from './navigation'
import { VibeSelect } from './vibe-select'

interface Props {
  vibeSlug: string
}

export function Header({ vibeSlug }: Props) {
  const vibe = navigation.vibes.find(vibe => vibe.slug === vibeSlug)

  return (
    <header className="sticky top-0 z-[60] h-14 border-b border-dashed border-contrast-300 bg-background @container md:h-16">
      <div className="mx-auto flex h-full items-center justify-between px-3 xl:container md:px-5 xl:px-8">
        <div className="flex flex-1 items-center gap-x-2 md:gap-x-3">
          <MobileMenu vibeSlug={vibeSlug} />

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

          <div className="flex items-center">
            <div className="w-2">
              <div className="mx-auto h-5 w-[1px] -skew-x-[20deg] bg-contrast-500" />
            </div>

            <VibeSelect vibeSlug={vibeSlug} />
          </div>
        </div>

        <nav className="hidden h-full gap-x-4 lg:flex">
          {vibe?.groups.map(group => (
            <GroupLink
              key={group.pages[0].slug}
              vibe={vibe}
              group={group}
              className="h-[calc(100%+1px)] place-content-center border-b-2 border-transparent"
            />
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-x-0 md:gap-x-1">
          {/* <Button variant="ghost" size="icon">
            <Search />
          </Button> */}

          <DocSearch
            appId="Q9L04M9AMF"
            indexName="vibes"
            apiKey="ef510190238e6bf2ae942046fd83e4b9"
          />

          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
