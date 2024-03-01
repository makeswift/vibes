import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

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
        href={href}
        className={clsx(
          'block py-1.5 pl-7 text-sm leading-normal opacity-50 transition-colors hover:opacity-100',
          active && 'font-semibold opacity-100'
        )}
      >
        {children}
      </Link>
    </li>
  )
}

export function Subnavigation() {
  return (
    <div className="sticky w-48 overflow-y-auto">
      <div className="mb-4 text-xl font-bold leading-normal">Vibe name</div>

      <ul>
        <li>
          <Link href="" className="flex items-center gap-2 py-1.5 text-sm font-bold leading-normal">
            <Image src="/play.svg" width={20} height={20} alt="Icon" priority />
            Getting started
          </Link>
        </li>

        <li>
          <Link href="" className="flex items-center gap-2 py-1.5 text-sm font-bold leading-normal">
            <Image src="/cube.svg" width={20} height={20} alt="Icon" priority />
            Components
          </Link>

          <ul className="py-1">
            <SubnavLink href="">Accordions</SubnavLink>
            <SubnavLink href="" active>
              Button
            </SubnavLink>
            <SubnavLink href="">Button group</SubnavLink>
            <SubnavLink href="">Card</SubnavLink>
            <SubnavLink href="">Carousel</SubnavLink>
            <SubnavLink href="">Component</SubnavLink>
            <SubnavLink href="">Component</SubnavLink>
            <SubnavLink href="">Component</SubnavLink>
            <SubnavLink href="">Component</SubnavLink>
            <SubnavLink href="">Component</SubnavLink>
          </ul>
        </li>
      </ul>
    </div>
  )
}
