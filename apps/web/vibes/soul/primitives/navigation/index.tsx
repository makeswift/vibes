'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Ref, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as Popover from '@radix-ui/react-popover'
import { clsx } from 'clsx'
import debounce from 'lodash.debounce'
import { ArrowRight, ChevronDown, Search, SearchIcon, ShoppingBag, User } from 'lucide-react'

import { Button } from '@/vibes/soul/primitives/button'
import { Spinner } from '@/vibes/soul/primitives/spinner'

import { type SearchResult, SearchResults } from './search-results'

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
  accountHref: string
  activeLocale?: string
  cartCount?: number
  cartHref: string
  links: Links[]
  locales?: { id: string; region: string; language: string }[]
  logo?: string | Image
  searchHref: string
  searchParamName?: string
  searchAction?: (term: string) => Promise<SearchResult[]>
  searchInputPlaceholder?: string
  searchCtaLabel?: string
  emptySearchTitleLabel?: string
  emptySearchSubtitleLabel?: string
}

export const Navigation = forwardRef(function Navigation(
  {
    cartHref,
    cartCount,
    accountHref,
    links,
    logo,
    activeLocale,
    locales,
    searchHref,
    searchParamName = 'term',
    searchAction,
    searchInputPlaceholder = 'Search Products',
    searchCtaLabel,
    emptySearchTitleLabel,
    emptySearchSubtitleLabel,
    ...rest
  }: Props,
  ref: Ref<HTMLDivElement>
) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const pathname = usePathname()
  const container = useRef<HTMLUListElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string | undefined>(activeLocale)
  const firstCategoryLinkRef = useRef<HTMLAnchorElement>(null)
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(null)
  const [term, setTerm] = useState('')
  const [searchPending, setSearchPending] = useState(false)

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsSearchOpen(false)
  }, [pathname])

  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchTerm = searchInputRef.current?.value.trim() ?? ''

    if (searchTerm.length > 0) {
      router.push(`${searchHref}?${searchParamName}=${encodeURIComponent(searchTerm)}`)
    }
  }

  const debouncedOnSearch = useMemo(
    () =>
      debounce(async (query: string) => {
        if (searchAction) {
          const results = await searchAction(query)

          setSearchResults(results)
        }
      }, 1000),
    [searchAction]
  )

  const fetchSearchResults = useCallback(
    async (query: string) => {
      await debouncedOnSearch(query)
    },
    [debouncedOnSearch]
  )

  useEffect(() => {
    if (term.length < 3 || !searchAction) {
      setSearchResults(null)
    } else {
      setSearchPending(true)

      void fetchSearchResults(term)
    }
  }, [term, fetchSearchResults, searchAction])

  useEffect(() => {
    setSearchPending(false)
  }, [searchResults])

  const handleTermChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTerm(e.currentTarget.value)
  }

  return (
    <NavigationMenu.Root
      ref={ref}
      onValueChange={() => setIsSearchOpen(false)}
      delayDuration={0}
      className="relative mx-auto w-full max-w-screen-2xl text-foreground @container"
    >
      <div className="relative flex h-14 items-center bg-background pl-3 pr-2 @4xl:rounded-2xl @4xl:px-2 @4xl:pl-6 @4xl:pr-2.5">
        {/* Logo */}
        <div className="flex flex-1 items-center">
          <Popover.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <Popover.Trigger asChild>
              <HamburgerMenuButton
                className="mr-3 @4xl:hidden"
                open={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(prev => !prev)}
              />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                sideOffset={12}
                className="max-h-[var(--radix-popover-content-available-height)] w-[var(--radix-popover-content-available-width)] px-4 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
              >
                <div className="max-h-[inherit] divide-y divide-contrast-100 overflow-y-auto bg-background">
                  {links.map((item, i) => (
                    <ul key={i} className="flex flex-col p-2 @4xl:gap-2 @4xl:p-5">
                      {item.label !== '' && (
                        <li>
                          {item.href !== '' ? (
                            <Link
                              href={item.href}
                              className="block rounded-lg px-3 py-2 font-semibold ring-primary transition-colors hover:bg-contrast-100 
                          focus-visible:outline-0 focus-visible:ring-2 @4xl:py-4"
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
                              className="block rounded-lg px-3 py-2 text-sm font-medium text-contrast-500 ring-primary transition-colors hover:bg-contrast-100 
                        hover:text-foreground focus-visible:outline-0 focus-visible:ring-2 
                        @4xl:py-4"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  ))}
                </div>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>

          <Link
            href="/"
            className="relative rounded outline-0 ring-primary ring-offset-4 focus-visible:ring-2"
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
        </div>

        {/* Top Level Nav Links */}
        <ul className="relative flex" ref={container}>
          {links.map((item, i) => (
            <NavigationMenu.Item key={i} value={i.toString()}>
              <NavigationMenu.Trigger asChild>
                <Link
                  href={item.href}
                  className="mx-0.5 my-2.5 hidden items-center whitespace-nowrap rounded-xl p-2.5 text-sm font-medium ring-primary transition-colors duration-200
                  hover:bg-contrast-100 focus-visible:outline-0 focus-visible:ring-2 @4xl:inline-flex"
                >
                  {item.label}
                </Link>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="max-h-96 overflow-y-auto rounded-2xl bg-background shadow-xl shadow-foreground/5 ring-1 ring-foreground/5">
                <div className="grid w-full grid-cols-4 divide-x divide-contrast-100">
                  {item.groups?.map((group, columnIndex) => (
                    <ul key={columnIndex} className="flex flex-col gap-1 p-5">
                      {/* Second Level Links */}
                      {group.label != null && group.label !== '' && (
                        <li>
                          {group.href != null && group.href !== '' ? (
                            <Link
                              href={group.href}
                              className="block rounded-lg px-3 py-2 font-medium ring-primary transition-colors hover:bg-contrast-100 focus-visible:outline-0 focus-visible:ring-2"
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
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end transition-colors duration-300">
          <Popover.Root open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <Popover.Trigger asChild>
              <button
                aria-label="Search"
                className="rounded-lg p-1.5 ring-primary transition-colors focus-visible:outline-0 focus-visible:ring-2 @4xl:hover:bg-contrast-100"
                onPointerEnter={e => e.preventDefault()}
                onPointerMove={e => e.preventDefault()}
                onPointerLeave={e => e.preventDefault()}
              >
                <Search strokeWidth={1} size={20} />
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                sideOffset={16}
                className="w-[var(--radix-popover-content-available-width)] px-4 py-2 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
              >
                <div className="overflow-y-auto rounded-2xl bg-background shadow-xl shadow-foreground/5 ring-1 ring-foreground/5 transition-all duration-200 ease-in-out @4xl:inset-x-0">
                  <form
                    onSubmit={handleSearch}
                    className="flex items-center gap-3 px-3 py-3 @4xl:px-5 @4xl:py-4"
                  >
                    <SearchIcon
                      strokeWidth={1}
                      size={20}
                      className="hidden shrink-0 text-contrast-500 @xl:block"
                    />
                    <input
                      ref={searchInputRef}
                      name="searchTerm"
                      type="text"
                      placeholder="Search Products"
                      className="flex-grow bg-transparent pl-2 text-lg font-medium outline-0 focus-visible:outline-none @xl:pl-0"
                      onChange={handleTermChange}
                    />
                    <Button type="submit" variant="secondary" size="icon">
                      {searchPending ? (
                        <Spinner size="xs" />
                      ) : (
                        <ArrowRight strokeWidth={1.5} size={20} aria-label="Submit" />
                      )}
                    </Button>
                  </form>

                  {/* Search Results */}
                  {searchResults && term.length > 2 && !searchPending ? (
                    <SearchResults
                      searchResults={searchResults}
                      searchCtaLabel={searchCtaLabel}
                      emptySearchTitleLabel={emptySearchTitleLabel}
                      emptySearchSubtitleLabel={emptySearchSubtitleLabel}
                      term={term}
                      searchHref={searchHref}
                    />
                  ) : null}
                </div>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>

          <Link
            href={accountHref}
            aria-label="Profile"
            className="rounded-lg p-1.5 ring-primary focus-visible:outline-0 focus-visible:ring-2 @4xl:hover:bg-contrast-100"
          >
            <User strokeWidth={1} size={20} />
          </Link>
          <Link
            href={cartHref}
            aria-label="Cart"
            className="relative rounded-lg p-1.5 ring-primary focus-visible:outline-0 focus-visible:ring-2 @4xl:hover:bg-contrast-100"
          >
            <ShoppingBag strokeWidth={1} size={20} />
            {cartCount != null && cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-xs text-background">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Locale / Language Dropdown */}
          {locales && locales.length > 1 ? (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger
                className={clsx(
                  'hidden items-center gap-1 rounded-lg p-2 text-xs hover:bg-contrast-100',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary @sm:flex'
                )}
              >
                {selectedLanguage}
                <ChevronDown strokeWidth={1.5} size={16} />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  align="end"
                  sideOffset={16}
                  className="z-50 max-h-80 w-20 overflow-y-scroll rounded-xl bg-background p-2 shadow-xl shadow-foreground/10 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 @4xl:w-32 @4xl:rounded-2xl @4xl:p-2"
                >
                  {locales.map(({ id, language }) => (
                    <DropdownMenu.Item
                      className={clsx(
                        'cursor-default rounded-lg px-2.5 py-2 text-sm font-medium text-contrast-400 outline-none transition-colors',
                        'hover:text-foreground focus:bg-contrast-100',
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
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          ) : null}
        </div>
      </div>

      <div className="perspective-[2000px] absolute left-0 right-0 top-full flex w-full justify-center">
        <NavigationMenu.Viewport className="relative mt-2 w-full data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95" />
      </div>
    </NavigationMenu.Root>
  )
})

export function HamburgerMenuButton({
  open,
  className,
  ...rest
}: { open: boolean } & React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      {...rest}
      className={clsx(
        'group relative rounded-lg p-2 outline-0 ring-primary transition-colors focus-visible:ring-2',
        className
      )}
    >
      <div className="flex h-4 w-4 origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
        <div
          className={clsx(
            'h-px origin-left transform bg-foreground transition-all duration-300',
            open ? 'translate-x-10' : 'w-7'
          )}
        />
        <div
          className={clsx(
            'h-px transform rounded bg-foreground transition-all delay-75 duration-300',
            open ? 'translate-x-10' : 'w-7'
          )}
        />
        <div
          className={clsx(
            'h-px origin-left transform bg-foreground transition-all delay-150 duration-300',
            open ? 'translate-x-10' : 'w-7'
          )}
        />

        <div
          className={clsx(
            'absolute top-2 flex transform items-center justify-between bg-foreground transition-all duration-500',
            open ? 'w-12 translate-x-0' : 'w-0 -translate-x-10'
          )}
        >
          <div
            className={clsx(
              'absolute h-px w-4 transform bg-foreground transition-all delay-300 duration-500 ',
              open ? 'rotate-45' : 'rotate-0'
            )}
          />
          <div
            className={clsx(
              'absolute h-px w-4 transform bg-foreground transition-all delay-300 duration-500',
              open ? '-rotate-45' : 'rotate-0'
            )}
          />
        </div>
      </div>
    </button>
  )
}
