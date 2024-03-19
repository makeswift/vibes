'use client'

import { useRouter } from 'next/navigation'
import * as React from 'react'

import { Vibes } from '@/app/docs/layout'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type Props = {
  allVibes: Vibes
}

export function VibeSelect({ allVibes }: Props) {
  const vibeList = Object.keys(allVibes)

  const [vibe, setVibe] = React.useState(vibeList[0])
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {vibe}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {vibeList.map((v, i) => (
          <DropdownMenuItem
            key={`${v}-${i}`}
            onClick={() => {
              setVibe(v)
              router.push(`/docs/${allVibes[vibe][0].pages[0].href}`)
            }}
          >
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
