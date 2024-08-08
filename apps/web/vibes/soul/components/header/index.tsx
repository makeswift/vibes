'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Ref, forwardRef, useEffect, useRef, useState } from 'react'
import ReactHeadroom from 'react-headroom'

import clsx from 'clsx'
import { Search, ShoppingBag, User } from 'lucide-react'

import HamburgerMenuButton from '@/vibes/soul/components/header/hamburger-menu-button'

type NavItem = {
  text: string
  link: {
    href: string
    target?: '_self' | '_blank'
  }
}

type Category = {
  item: NavItem
  links?: NavItem[][]
}

type Props = {
  className?: string
  logo?: {
    image?: { url: string; dimensions: { width: number; height: number } }
    alt?: string
    link?: { href: string; target?: '_self' | '_blank' }
  }
  links?: Category[]
}

export const Header = forwardRef(function Header(
  { className, logo, links, ...rest }: Props,
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
    <ReactHeadroom
      {...rest}
      className="sticky top-0 z-30 !h-0 w-full @container"
      upTolerance={0}
      style={{
        WebkitTransition: 'transform .5s ease-in-out',
        MozTransition: 'transform .5s ease-in-out',
        OTransition: 'transform .5s ease-in-out',
        transition: 'transform .5s ease-in-out',
      }}
    >
      <header
        ref={ref}
        onMouseLeave={() => setNavOpen(false)}
        className={clsx(
          'mx-auto w-full max-w-7xl text-foreground @4xl:mx-[max(20px,auto)] @4xl:mt-5',
          className
        )}
      >
        <nav className="grid h-[60px] grid-cols-3 items-stretch justify-between gap-x-3 bg-background shadow-[2px_4px_24px_#00000010] @4xl:mx-5 @4xl:rounded-[24px]">
          <div className="relative flex items-stretch px-2.5" ref={container}>
            {links?.map((item, i) => (
              <Link
                key={i}
                href={item.item.link.href}
                target={item.item.link.target}
                onMouseOver={() => {
                  setSelectedCategory(i)
                  setNavOpen(true)
                }}
                className="relative mx-0.5 my-2.5 hidden items-center rounded-xl p-2.5 text-sm font-medium transition-colors duration-200 hover:bg-contrast-100 @4xl:inline-flex"
              >
                {item.item.text}
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
                <Search className="h-5 w-5" strokeWidth={1} />
              </button>
            </div>
            <button
              role="button"
              aria-label="Profile"
              className="rounded-lg p-1.5 transition-colors @4xl:hover:bg-contrast-100"
            >
              <User className="h-5 w-5" strokeWidth={1} />
            </button>
            <button
              role="button"
              aria-label="Cart"
              className="rounded-lg p-1.5 transition-colors @4xl:hover:bg-contrast-100"
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1} />
            </button>
          </div>
        </nav>

        <div
          ref={menuRef}
          className={clsx(
            'mx-1.5 mt-1.5 overflow-y-auto rounded-[24px] shadow-[2px_4px_24px_#00000010] transition-all duration-300 ease-in-out @4xl:mx-5',
            navOpen
              ? 'h-[calc(100dvh-66px)] scale-100 bg-background opacity-100 @4xl:h-full @4xl:max-h-96'
              : 'pointer-events-none h-0 scale-[0.99] select-none bg-transparent opacity-0'
          )}
        >
          <div className="flex flex-col divide-y divide-contrast-100 @4xl:hidden">
            {links?.map((item, i) => (
              <div key={i} className="flex flex-col gap-2 p-5">
                <Link
                  href={item.item.link.href}
                  target={item.item.link.target}
                  className="rounded-lg px-3 py-4 font-semibold transition-colors hover:bg-contrast-100"
                >
                  {item.item.text}
                </Link>
                {item.links?.flat().map((link, j) => (
                  <Link
                    key={j}
                    href={link.link.href}
                    target={link.link.target}
                    className="block rounded-lg px-3 py-4 font-medium text-contrast-500 transition-colors hover:bg-contrast-100 hover:text-foreground"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="hidden w-full divide-x divide-contrast-100 @4xl:grid @4xl:grid-cols-5">
            {selectedCategory !== null &&
              links?.[selectedCategory]?.links?.map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col gap-1 p-5">
                  {column.map((link, i) => (
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
              ))}
          </div>
        </div>
      </header>
    </ReactHeadroom>
  )
})

export default Header
