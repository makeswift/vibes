'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import clsx from 'clsx'

import { Vibes } from '@/app/docs/layout'
import { cn } from '@/lib/utils'

import { Select } from './select'

function SubnavLink({
  children,
  href,
  active,
}: {
  children: React.ReactNode
  href: string
  active?: boolean
}) {
  return (
    <li>
      <Link
        href={`/docs/${href}`}
        className={clsx(
          'block py-1 pl-7 text-sm leading-normal transition-opacity',
          active ? 'font-semibold opacity-100' : 'opacity-50 hover:!opacity-100 dark:opacity-70'
        )}
      >
        {children}
      </Link>
    </li>
  )
}

export function Subnavigation({ className, allVibes }: { className?: string; allVibes: Vibes }) {
  const { slug } = useParams()
  const navGroup = allVibes[slug[0]]
  console.log({ allVibes })

  return (
    <div className={className}>
      {navGroup.map(group => (
        <div key={group.name} className="mb-2">
          <div className="flex items-center gap-2 py-1.5 text-sm font-bold leading-normal">
            <Image src={group.icon} width={20} height={20} alt="Icon" priority />
            {group.name}
          </div>

          <ul>
            {group.pages.map(link => (
              <SubnavLink key={link.title} href={link.href}>
                {link.title}
              </SubnavLink>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
