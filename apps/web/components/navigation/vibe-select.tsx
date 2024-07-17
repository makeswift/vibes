'use client'

import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import ChevronDown12 from '@/icons/generated/ChevronDown12'

import { Button } from '../ui/button'
import { navigation } from './navigation'

interface Props {
  vibeSlug: string
}

export function VibeSelect({ vibeSlug }: Props) {
  const vibe = navigation.vibes.find(vibe => vibe.slug === vibeSlug)

  if (!vibe) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="medium">
          {vibe.name}
          <ChevronDown12 />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={2}>
        {navigation.vibes.map(vibe => (
          <Link key={vibe.slug} href={`/docs/${vibe.slug}`}>
            <DropdownMenuItem>{vibe.name}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
