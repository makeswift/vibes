'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Ref, forwardRef, useEffect, useRef, useState } from 'react'
import ReactHeadroom from 'react-headroom'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'
import { ArrowRight, ChevronDown, Search, SearchIcon, ShoppingBag, User } from 'lucide-react'

import { ProductCard } from '@/vibes/soul/primitives/product-card'
import { HamburgerMenuButton } from '@/vibes/soul/sections/header/hamburger-menu-button'

interface Image {
  src?: string
  alt: string
}

export interface Links {
  label: string
  href: string
  groups?: {
    label?: string
    href?: string
    links: {
      label: string
      href: string
    }[]
  }[]
}

interface Props {
  cartHref: string
  cartCount?: number
  accountHref: string
  links: Links[]
  // searchAction: (query: string) => Promise<SerializableProduct[]>
  logo?: string | Image
  activeLocale?: string
  locales?: { id: string; region: string; language: string }[]
}

export const Header = forwardRef(function Header(
  { cartHref, cartCount, accountHref, links, logo, activeLocale, locales, ...rest }: Props,
  ref: Ref<HTMLDivElement>
) {
  const [navOpen, setNavOpen] = useState(false)
  const pathname = usePathname()
  const container = useRef<HTMLUListElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLFormElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [selectedCategory, setSelectedCategory] = useState<number | null>(0)
  const [searchOpen, setSearchOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<string | undefined>(activeLocale)
  const [headerHeight, setHeaderHeight] = useState<number>(0)
  const menuTriggerRef = useRef<HTMLAnchorElement | null>(null)
  const firstCategoryLinkRef = useRef<HTMLAnchorElement>(null)

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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        event.target instanceof Node &&
        !searchRef.current.contains(event.target)
      ) {
        setSearchOpen(false)
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setSearchOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [searchRef])

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  // Set the dropdown menu height based on the announcement bar presence/height
  useEffect(() => {
    const announcementBar = document.querySelector('#announcement-bar')
    const navHeight = 72
    if (announcementBar) {
      const announcementBarHeight = announcementBar.clientHeight
      if (window.scrollY > announcementBarHeight) {
        setHeaderHeight(navHeight)
      } else {
        setHeaderHeight(announcementBarHeight + navHeight)
      }
    } else {
      setHeaderHeight(navHeight)
    }
  }, [navOpen])

  useEffect(() => {
    // TODO: trap focus in category menu when it's open
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setNavOpen(false)
        // Return focus to the menu item that opened the category menu
        if (menuTriggerRef.current) {
          menuTriggerRef.current.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuRef])

  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchTerm = searchInputRef.current?.value.trim() ?? ''

    if (searchTerm.length > 0) {
      router.push(`/search?term=${encodeURIComponent(searchTerm)}`)
    }
  }

  return (
    <ReactHeadroom
      {...rest}
      className="sticky top-0 z-30 !h-0 w-full @container"
      upTolerance={0}
      onUnpin={() => setSearchOpen(false)}
      style={{
        WebkitTransition: 'transform .5s ease-in-out',
        MozTransition: 'transform .5s ease-in-out',
        OTransition: 'transform .5s ease-in-out',
        transition: 'transform .5s ease-in-out',
      }}
    >
      <div
        ref={ref}
        onMouseLeave={() => setNavOpen(false)}
        className="relative mx-auto w-full max-w-screen-2xl text-foreground @4xl:mx-[max(20px,auto)] @4xl:mt-5"
      >
        <nav
          className="relative grid h-[60px] grid-cols-[1fr,2fr,1fr] items-center justify-between bg-background shadow-[2px_4px_24px_#00000010] @4xl:mx-5 
          @4xl:rounded-3xl md:grid-cols-[1fr,1fr,1fr]"
        >
          {/* Top Level Nav Links */}
          <ul className="relative flex items-stretch pl-2.5" ref={container}>
            {links.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  onMouseOver={() => {
                    setSelectedCategory(i)
                    setNavOpen(true)
                    setSearchOpen(false)
                  }}
                  onKeyDown={event => {
                    if (event.key === 'Enter') {
                      setSelectedCategory(i)
                      setNavOpen(true)
                      menuTriggerRef.current = event.currentTarget

                      setTimeout(() => {
                        if (firstCategoryLinkRef.current) {
                          firstCategoryLinkRef.current.focus()
                        }
                      }, 0)
                    }
                  }}
                  className="relative mx-0.5 my-2.5 hidden items-center whitespace-nowrap rounded-xl p-2.5 text-sm font-medium ring-primary transition-colors duration-200
                  hover:bg-contrast-100 focus-visible:outline-0 focus-visible:ring-2 @4xl:inline-flex"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Logo */}
          <Link
            href="/"
            className="relative mx-auto my-2 flex h-10 w-full max-w-56 items-center justify-center rounded-xl ring-primary focus-visible:outline-0 focus-visible:ring-2"
          >
            {typeof logo === 'object' && logo.src != null && logo.src !== '' ? (
              <Image src={logo.src} fill sizes="400px" alt={logo.alt} className="object-contain" />
            ) : (
              typeof logo === 'string' && (
                <span className="font-heading text-lg font-semibold leading-none text-foreground @xl:text-2xl">
                  {logo}
                </span>
              )
            )}
          </Link>

          <div className="ml-auto mr-1 flex items-center gap-0 transition-colors duration-300 @sm:mr-0 @4xl:mr-2.5">
            {/* Mobile Buttons */}
            <div className="absolute left-1 flex items-center @4xl:relative @4xl:left-0">
              {/* Hamburger Menu Button */}
              <HamburgerMenuButton
                navOpen={navOpen}
                setNavOpen={setNavOpen}
                searchOpen={searchOpen}
              />

              <button
                aria-label="Search"
                className="rounded-lg p-1.5 ring-primary transition-colors focus-visible:outline-0 focus-visible:ring-2 @4xl:hover:bg-contrast-100"
                onClick={() => {
                  setNavOpen(false)
                  setSearchOpen(!searchOpen)
                }}
              >
                <Search className="w-5" strokeWidth={1} />
              </button>
            </div>
            <Link
              href={accountHref}
              aria-label="Profile"
              className="rounded-lg p-1.5 ring-primary focus-visible:outline-0 focus-visible:ring-2 @4xl:hover:bg-contrast-100"
            >
              <User className={clsx('w-5', searchOpen && 'stroke-contrast-300')} strokeWidth={1} />
            </Link>
            <Link
              href={cartHref}
              aria-label="Cart"
              className="relative rounded-lg p-1.5 ring-primary focus-visible:outline-0 focus-visible:ring-2 @4xl:hover:bg-contrast-100"
            >
              <ShoppingBag
                className={clsx('w-5', searchOpen && 'stroke-contrast-300')}
                strokeWidth={1}
              />
              {cartCount != null && cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-xs text-background">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Locale / Language Dropdown */}
            {locales && locales.length > 1 ? (
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={clsx(
                    'hidden items-center gap-1 rounded-lg bg-white p-2 text-xs uppercase hover:bg-contrast-100',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary @sm:flex',
                    searchOpen ? 'text-contrast-300' : 'text-foreground'
                  )}
                >
                  {selectedLanguage}
                  <ChevronDown
                    className={clsx('w-4', searchOpen && 'stroke-contrast-300')}
                    strokeWidth={1.5}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="z-50 mt-4 max-h-80 w-20 overflow-y-scroll rounded-xl bg-background p-2 shadow-[2px_4px_24px_#00000010] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 @4xl:-ml-14 @4xl:w-32 @4xl:rounded-3xl @4xl:p-4">
                  {locales.map(({ id, language }) => (
                    <DropdownMenuItem
                      className={clsx(
                        'cursor-default rounded-xl px-3 py-2 text-sm font-medium uppercase text-contrast-400 outline-none transition-colors',
                        'hover:text-foreground focus:bg-contrast-100 @4xl:text-base',
                        { 'text-foreground': selectedLanguage === language }
                      )}
                      key={id}
                      onSelect={() => {
                        setSelectedLanguage(language)
                        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                        // router.replace('/', { locale: id as LocaleType })
                      }}
                    >
                      {language}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : null}
          </div>
        </nav>

        {/* Search Dropdown */}
        <div
          className={clsx(
            'absolute inset-x-0 mx-1.5 mt-1.5 overflow-y-auto rounded-3xl shadow-[2px_4px_24px_#00000010] transition-all duration-300 ease-in-out @4xl:mx-5',
            searchOpen
              ? 'scale-100 bg-background opacity-100'
              : 'pointer-events-none scale-[0.99] select-none bg-transparent opacity-0'
          )}
        >
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-3 px-3 py-4 @xl:px-5"
            ref={searchRef}
          >
            <SearchIcon
              strokeWidth={1}
              className="hidden w-5 shrink-0 text-contrast-500 @xl:block"
            />
            <input
              ref={searchInputRef}
              name="searchTerm"
              type="text"
              placeholder="Search Products"
              className="flex-grow bg-transparent pl-2 text-lg font-medium outline-0 focus-visible:outline-none @xl:pl-0"
            />
            <button
              type="submit"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground text-background ring-primary focus:outline-none focus:ring-[1px]"
            >
              <ArrowRight strokeWidth={1.5} size={20} aria-label="Submit" />
            </button>
          </form>

          {/* Search Results */}
          <div className="flex flex-col border-t border-contrast-100 @2xl:flex-row">
            <div className="flex w-full flex-col gap-1 border-b border-contrast-100 p-5 @2xl:max-w-80 @2xl:border-b-0 @2xl:border-r">
              <span className="mb-4 font-mono text-[13px] uppercase">Suggestions</span>
              {[
                { name: 'T-Shirts', href: '#' },
                { name: 'Shirts', href: '#' },
                { name: 'Short Sleeve', href: '#' },
                { name: 'Long Sleeve', href: '#' },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="block rounded-lg px-3 py-4 font-semibold text-contrast-500 ring-primary transition-colors hover:bg-contrast-100 hover:text-foreground focus-visible:outline-0 focus-visible:ring-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex w-full flex-col gap-5 p-5">
              <span className="font-mono text-[13px] uppercase">Products</span>
              <div className="grid w-fit grid-cols-2 gap-5 @xl:grid-cols-4 @2xl:grid-cols-2 @4xl:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <ProductCard
                    key={`Product ${i + 1}`}
                    product={{
                      id: `productName`,
                      title: 'Product Name',
                      href: '#',
                      price: '$123.99',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* View all items */}
          <div className="w-full border-t border-contrast-100 p-4">
            <Link
              href="/"
              className="group flex w-fit items-center gap-1 rounded-md p-1 text-[15px] font-semibold ring-primary hover:text-foreground focus-visible:outline-0 focus-visible:ring-2"
            >
              View all items
              <ArrowRight className="h-5 w-5 p-0.5 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Menu Dropdown */}
        <div
          ref={menuRef}
          className={clsx(
            'mx-1.5 mt-1.5 overflow-y-auto rounded-3xl shadow-[2px_4px_24px_#00000010] transition-all duration-300 ease-in-out @4xl:mx-5 @4xl:max-h-96',
            navOpen
              ? 'scale-100 bg-background opacity-100 @4xl:h-full'
              : 'pointer-events-none h-0 scale-[0.99] select-none bg-transparent opacity-0'
          )}
          style={{ maxHeight: `calc(100dvh - ${headerHeight}px)` }}
        >
          <div className="flex flex-col divide-y divide-contrast-100 @4xl:hidden">
            {/* Mobile Dropdown Links */}
            {links.map((item, i) => (
              <ul key={i} className="flex flex-col gap-1 p-3 @4xl:gap-2 @4xl:p-5">
                {item.label !== '' && (
                  <li>
                    {item.href !== '' ? (
                      <Link
                        href={item.href}
                        className="block rounded-lg px-3 py-2 font-semibold ring-primary transition-colors hover:bg-contrast-100 
                          focus-visible:outline-0 focus-visible:ring-2 @4xl:py-4"
                        tabIndex={navOpen ? 0 : -1}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span
                        className="block rounded-lg px-3 py-2 font-semibold ring-primary transition-colors hover:bg-contrast-100 
                          focus-visible:outline-0 focus-visible:ring-2 @4xl:py-4"
                      >
                        {item.label}
                      </span>
                    )}
                  </li>
                )}
                {item.groups
                  ?.flatMap(group => group.links)
                  .map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.href}
                        className="block rounded-lg px-3 py-2 font-medium text-contrast-500 ring-primary transition-colors hover:bg-contrast-100 
                        hover:text-foreground focus-visible:outline-0 focus-visible:ring-2 
                        @4xl:py-4"
                        tabIndex={navOpen ? 0 : -1}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            ))}
          </div>
          <div className="hidden w-full divide-x divide-contrast-100 @4xl:grid @4xl:grid-cols-4">
            {/* Desktop Dropdown Links */}
            {selectedCategory !== null &&
              links[selectedCategory]?.groups?.map((group, columnIndex) => (
                <ul key={columnIndex} className="flex flex-col gap-1 p-5">
                  {/* Second Level Links */}
                  {group.label != null && group.label !== '' && (
                    <li>
                      {group.href != null && group.href !== '' ? (
                        <Link
                          href={group.href}
                          className="block rounded-lg px-3 py-2 font-medium ring-primary transition-colors hover:bg-contrast-100 focus-visible:outline-0 focus-visible:ring-2"
                          tabIndex={navOpen ? 0 : -1}
                          ref={columnIndex === 0 ? firstCategoryLinkRef : undefined}
                        >
                          {group.label}
                        </Link>
                      ) : (
                        <span
                          className="block rounded-lg px-3 py-2 font-medium ring-primary transition-colors hover:bg-contrast-100 focus-visible:outline-0 focus-visible:ring-2"
                          ref={columnIndex === 0 ? firstCategoryLinkRef : undefined}
                        >
                          {group.label}
                        </span>
                      )}
                    </li>
                  )}
                  {group.links.map((link, idx) => (
                    // Third Level Links
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="block rounded-lg px-3 py-2 font-medium text-contrast-500 ring-primary transition-colors hover:bg-contrast-100 hover:text-foreground focus-visible:outline-0 focus-visible:ring-2"
                        tabIndex={navOpen ? 0 : -1}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
          </div>
        </div>
      </div>
    </ReactHeadroom>
  )
})
