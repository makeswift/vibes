'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, Ref, forwardRef, useEffect, useRef, useState } from 'react'
import ReactHeadroom from 'react-headroom'

import clsx from 'clsx'

import Search from '@/vibes/soul/components/icons/Search'
import ShoppingBag from '@/vibes/soul/components/icons/ShoppingBag'
import User from '@/vibes/soul/components/icons/User'

import HamburgerMenuButton from './HamburgerMenuButton'

type NavItem = {
  text: string
  link: {
    href: string
    target?: '_self' | '_blank'
  }
}

type Action = {
  text: string
  icon: ReactNode
}

type Category = {
  category: NavItem
  links: NavItem[]
}

type Props = {
  className?: string
  logo?: {
    image?: { url: string; dimensions: { width: number; height: number } }
    alt?: string
    link?: { href: string; target?: '_self' | '_blank' }
  }
  links?: Category[]
  actions?: Action[]
}

export const Navigation = forwardRef(function Navigation(
  { className, logo, links, actions, ...rest }: Props,
  ref: Ref<HTMLDivElement>
) {
  const [navOpen, setNavOpen] = useState(false)
  const pathname = usePathname()
  const container = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [selectedCategory, setSelectedCategory] = useState<number | null>(0)

  useEffect(() => {
    setNavOpen(false)
  }, [pathname])

  useEffect(() => {
    if (selectedCategory === null) {
      setNavOpen(false)
    }
  }, [selectedCategory])

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', navOpen)
  }, [navOpen])

  return (
    <ReactHeadroom {...rest} className="!h-24 w-full [&>div]:px-5 [&>div]:pt-5">
      <header
        ref={ref}
        onMouseLeave={() => setNavOpen(false)}
        className={clsx(className, 'w-full overflow-hidden text-foreground @container')}
      >
        <nav className="grid h-[60px] grid-cols-3 items-stretch justify-between gap-x-3 bg-background @4xl:rounded-[24px]">
          <div className="relative flex items-stretch px-2.5" ref={container}>
            {links?.map((category, i) => (
              <Link
                key={i}
                href={category.category.link.href}
                target={category.category.link.target}
                onMouseOver={() => {
                  setSelectedCategory(i)
                  setNavOpen(true)
                }}
                className="relative mx-0.5 my-2.5 hidden items-center rounded-xl p-2.5 text-sm font-medium transition-colors duration-200 hover:bg-contrast-100 @4xl:inline-flex"
              >
                {category.category.text}
              </Link>
            ))}
          </div>

          <Link
            href={logo?.link?.href ?? '/'}
            target={logo?.link?.target}
            className="mx-auto py-3 text-2xl font-semibold text-foreground"
          >
            {logo?.image ? (
              <Image src={logo.image.url} height={29} width={64} alt={logo.alt ?? 'Logo'} />
            ) : (
              logo?.alt
            )}
          </Link>

          <div className="ml-auto flex items-center gap-2 px-3.5 @4xl:px-6">
            <div className="absolute left-5 flex items-center @4xl:relative @4xl:left-0">
              <HamburgerMenuButton navOpen={navOpen} setNavOpen={setNavOpen} />
              <button
                role="button"
                aria-label="Search"
                className="rounded-lg p-1.5 transition-colors @4xl:hover:bg-contrast-100"
              >
                <Search />
              </button>
            </div>
            <button
              role="button"
              aria-label="Profile"
              className="rounded-lg p-1.5 transition-colors @4xl:hover:bg-contrast-100"
            >
              <User />
            </button>
            <button
              role="button"
              aria-label="Cart"
              className="rounded-lg p-1.5 transition-colors @4xl:hover:bg-contrast-100"
            >
              <ShoppingBag />
            </button>
          </div>
        </nav>
        <div
          ref={menuRef}
          className={clsx(
            'mt-1.5 h-full max-h-96 w-full overflow-y-auto rounded-[24px] transition-all duration-300 ease-in-out',
            navOpen
              ? 'scale-100 bg-background opacity-100'
              : 'pointer-events-none scale-[0.99] select-none bg-transparent opacity-0'
          )}
        >
          <div className="grid w-full divide-x divide-contrast-100 @xl:grid-cols-2 @3xl:grid-cols-3 @5xl:grid-cols-4 @7xl:grid-cols-5">
            <div className="flex flex-col gap-1 p-5">
              {selectedCategory !== null &&
                links?.[selectedCategory]?.links?.map((link, i) => (
                  <Link
                    key={i}
                    href={link.link.href}
                    target={link.link.target}
                    className="block rounded-lg px-3 py-4 font-medium text-contrast-500 transition-colors hover:bg-contrast-100 hover:text-foreground"
                  >
                    {link.text}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </header>
    </ReactHeadroom>
  )
})

export default Navigation
