'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import clsx from 'clsx'

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

export function Subnavigation({
  allVibes,
}: {
  allVibes: Record<string, { title: string; icon: string; href: string }[]>
}) {
  const { slug } = useParams()
  const components = allVibes[slug[0].charAt(0).toUpperCase() + slug[0].slice(1)]

  const subnavGroup = [
    {
      icon: '/play.svg',
      title: 'Getting started',
      links: [
        { title: 'Introduction', href: '/docs' },
        { title: 'Installation', href: '/docs' },
        { title: 'Usage', href: '/docs' },
        { title: 'Contributing', href: '/docs' },
      ],
    },
    {
      icon: '/cube.svg',
      title: 'Components',
      links: [...components],
    },
  ]
  return (
    <div className="sticky w-48 overflow-y-auto">
      <div className="mb-4 text-xl font-bold leading-normal">
        <VibeSelect allVibes={allVibes} />
      </div>

      {subnavGroup.map(group => (
        <div key={group.title} className="mb-2">
          <div className="flex items-center gap-2 py-1.5 text-sm font-bold leading-normal">
            <Image src={group.icon} width={20} height={20} alt="Icon" priority />
            {group.title}
          </div>

          <ul>
            {group.links.map(link => (
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
