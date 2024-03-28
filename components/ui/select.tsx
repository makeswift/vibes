'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import * as React from 'react'

import clsx from 'clsx'

import { Vibes } from '@/app/docs/layout'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type Props = {
  className?: string
  allVibes: Vibes
}

export function Select({ className, allVibes }: Props) {
  const vibeList = Object.keys(allVibes)

  const [vibe, setVibe] = React.useState(vibeList[0])
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={clsx(
            'flex cursor-pointer items-center gap-x-1 font-bold capitalize',
            className
          )}
        >
          {vibe}
          <Image src="/up-down-arrows.svg" alt="Up and down arrows" width={16} height={16} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {vibeList.map((v, i) => (
          <DropdownMenuItem
            key={`${v}-${i}`}
            onClick={() => {
              setVibe(v)
              router.push(`/docs/${allVibes[vibe][0].pages[0].href}`)
            }}
            asChild
          >
            <div>{v.charAt(0).toUpperCase() + v.slice(1)}</div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
