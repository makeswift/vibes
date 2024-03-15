'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import clsx from 'clsx'

import { Vibes } from '@/app/docs/layout'

import { VibeSelect } from './vibe-select'

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
          'block py-1 pl-7 text-sm leading-normal opacity-50 transition-colors hover:opacity-100',
          active && 'font-semibold opacity-100'
        )}
      >
        {children}
      </Link>
    </li>
  )
}

export function Subnavigation({ allVibes }: { allVibes: Vibes }) {
  const { slug } = useParams()
  const navGroup = allVibes[slug[0]]
  console.log({ allVibes })

  return (
    <aside className="fixed top-16 z-10 hidden h-[calc(100vh-4rem)] w-full md:sticky md:block">
      <div className="h-full overflow-y-scroll py-6 lg:py-8">
        <div className="mb-4 text-xl font-bold leading-normal">
          <VibeSelect allVibes={allVibes} />
        </div>

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
    </aside>
  )
}
