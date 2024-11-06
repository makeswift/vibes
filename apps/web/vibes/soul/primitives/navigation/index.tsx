'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Ref,
  forwardRef,
  startTransition,
  useActionState,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { SubmissionResult } from '@conform-to/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as Popover from '@radix-ui/react-popover'
import { clsx } from 'clsx'
import debounce from 'lodash.debounce'
import { ArrowRight, ChevronDown, Search, SearchIcon, ShoppingBag, User } from 'lucide-react'

import { Button } from '@/vibes/soul/primitives/button'

import { Price } from '../price-label'
import { ProductCard } from '../product-card'

type Link = {
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

type Locale = { id: string; label: string }

type Action<State, Payload> = (
  state: Awaited<State>,
  payload: Awaited<Payload>
) => State | Promise<State>

export type SearchResult =
  | {
      type: 'products'
      title: string
      products: {
        id: string
        title: string
        href: string
        price?: Price
        image?: { src: string; alt: string }
      }[]
    }
  | {
      type: 'links'
      title: string
      links: { label: string; href: string }[]
    }

type LocaleAction = Action<SubmissionResult | null, FormData>
type SearchAction = Action<
  { searchResults: SearchResult[] | null; lastResult: SubmissionResult | null },
  FormData
>

type Props = {
  accountHref: string
  cartCount?: number
  cartHref: string
  links: Link[]
  locales?: Locale[]
  activeLocaleId?: string
  localeAction: LocaleAction
  logo?: string | { src?: string; alt: string }
  logoHref?: string
  searchHref: string
  searchParamName?: string
  searchAction?: SearchAction
  searchCtaLabel?: string
  searchInputPlaceholder?: string
  emptySearchTitle?: string
  emptySearchSubtitle?: string
}

export const Navigation = forwardRef(function Navigation(
  {
    cartHref,
    cartCount,
    accountHref,
    links,
    logo,
    logoHref = '/',
    activeLocaleId,
    localeAction,
    locales,
    searchHref,
    searchParamName = 'query',
    searchAction,
    searchCtaLabel,
    searchInputPlaceholder,
    emptySearchTitle,
    emptySearchSubtitle,
  }: Props,
  ref: Ref<HTMLDivElement>
) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const pathname = usePathname()
  const container = useRef<HTMLUListElement>(null)

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsSearchOpen(false)
  }, [pathname])

  return (
    <NavigationMenu.Root
      ref={ref}
      onValueChange={() => setIsSearchOpen(false)}
      delayDuration={0}
      className="relative mx-auto w-full max-w-screen-2xl text-foreground @container"
    >
      <div className="flex h-14 items-center justify-between bg-background pl-3 pr-2 @4xl:rounded-2xl @4xl:px-2 @4xl:pl-6 @4xl:pr-2.5">
        {/* Logo */}
        <Popover.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <Popover.Anchor className="absolute left-0 right-0 top-full" />
          <Popover.Trigger asChild>
            <HamburgerMenuButton
              className="mr-3 @4xl:hidden"
              open={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
            />
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="max-h-[calc(var(--radix-popover-content-available-height)-8px)] w-[var(--radix-popper-anchor-width)] @container data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
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
        <div className="flex flex-1 items-center self-stretch py-2">
          <Link
            href={logoHref}
            className="relative flex size-full max-w-[80%] items-center outline-0 ring-primary ring-offset-4 focus-visible:ring-2 @4xl:max-w-[50%]"
          >
            {typeof logo === 'object' && logo.src != null && logo.src !== '' ? (
              <Image
                src={logo.src}
                fill
                sizes="25vw"
                alt={logo.alt}
                className="object-contain object-left"
              />
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
        <ul className="hidden @4xl:flex" ref={container}>
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
                            >
                              {group.label}
                            </Link>
                          ) : (
                            <span className="block rounded-lg px-3 py-2 font-medium ring-primary transition-colors hover:bg-contrast-100 focus-visible:outline-0 focus-visible:ring-2">
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
          {searchAction && (
            <Popover.Root open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <Popover.Anchor className="absolute left-0 right-0 top-full" />
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
                <Popover.Content className="max-h-[calc(var(--radix-popover-content-available-height)-16px)] w-[var(--radix-popper-anchor-width)] py-2 @container data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
                  <div className="flex max-h-[inherit] flex-col rounded-2xl bg-background shadow-xl shadow-foreground/5 ring-1 ring-foreground/5 transition-all duration-200 ease-in-out @4xl:inset-x-0">
                    <SearchForm
                      searchHref={searchHref}
                      searchParamName={searchParamName}
                      searchAction={searchAction}
                      searchCtaLabel={searchCtaLabel}
                      searchInputPlaceholder={searchInputPlaceholder}
                      emptySearchTitle={emptySearchTitle}
                      emptySearchSubtitle={emptySearchSubtitle}
                    />
                  </div>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          )}

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
            <LocaleForm action={localeAction} locales={locales} activeLocaleId={activeLocaleId} />
          ) : null}
        </div>
      </div>

      <div className="perspective-[2000px] absolute left-0 right-0 top-full z-50 flex w-full justify-center">
        <NavigationMenu.Viewport className="relative mt-2 w-full data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95" />
      </div>
    </NavigationMenu.Root>
  )
})

Navigation.displayName = 'Navigation'

function HamburgerMenuButton({
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

function SearchForm({
  searchAction,
  searchParamName = 'query',
  searchHref = '/search',
  searchInputPlaceholder = 'Search Products',
  searchCtaLabel = 'View more',
  emptySearchTitle,
  emptySearchSubtitle,
}: {
  searchAction: SearchAction
  searchParamName?: string
  searchHref?: string
  searchCtaLabel?: string
  searchInputPlaceholder?: string
  emptySearchTitle?: string
  emptySearchSubtitle?: string
}) {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const debouncedOnChange = useMemo(() => debounce(setDebouncedQuery, 300), [])
  const [{ searchResults, lastResult }, formAction, isPending] = useActionState(searchAction, {
    searchResults: null,
    lastResult: null,
  })

  useEffect(() => {
    if (lastResult?.error) console.log(lastResult.error)
  }, [lastResult])

  useEffect(() => {
    if (debouncedQuery === '') return

    startTransition(() => {
      const formData = new FormData()
      formData.append(searchParamName, debouncedQuery)

      formAction(formData)
    })
  }, [searchParamName, debouncedQuery])

  return (
    <>
      <form action={searchHref} className="flex items-center gap-3 px-3 py-3 @4xl:px-5 @4xl:py-4">
        <SearchIcon
          strokeWidth={1}
          size={20}
          className="hidden shrink-0 text-contrast-500 @xl:block"
        />
        <input
          type="text"
          name={searchParamName}
          placeholder={searchInputPlaceholder}
          className="flex-grow bg-transparent pl-2 text-lg font-medium outline-0 focus-visible:outline-none @xl:pl-0"
          value={query}
          onChange={e => {
            setQuery(e.currentTarget.value)
            debouncedOnChange(e.currentTarget.value)
          }}
        />
        <Button type="submit" variant="secondary" size="icon" loading={isPending}>
          <ArrowRight strokeWidth={1.5} size={20} aria-label="Submit" />
        </Button>
      </form>

      {/* Search Results */}
      {searchResults && (
        <SearchResults
          query={query}
          searchResults={searchResults}
          searchParamName={searchParamName}
          emptySearchTitle={emptySearchTitle}
          emptySearchSubtitle={emptySearchSubtitle}
          stale={isPending}
        />
      )}
    </>
  )
}

function SearchResults({
  query,
  searchResults,
  stale,
  emptySearchTitle = 'No results were found for',
  emptySearchSubtitle = 'Please try another search.',
}: {
  query: string
  searchParamName: string
  searchCtaLabel?: string
  emptySearchTitle?: string
  emptySearchSubtitle?: string
  searchResults: SearchResult[]
  stale: boolean
}) {
  if (query === '') return null

  if (searchResults.length === 0) {
    return (
      <div className="flex flex-col border-t border-contrast-100 p-6">
        <h1 className="text-2xl font-medium text-foreground">
          {emptySearchTitle} '{query}'.
        </h1>
        <p className="text-contrast-500">{emptySearchSubtitle}</p>
      </div>
    )
  }

  return (
    <div
      className={clsx(
        'flex flex-1 flex-col overflow-y-auto border-t border-contrast-100 @2xl:flex-row',
        stale && 'opacity-50'
      )}
    >
      {searchResults.map((result, index) => {
        if (result.type === 'links') {
          return (
            <div
              className="flex w-full flex-col gap-1 border-b border-contrast-100 p-5 @2xl:max-w-80 @2xl:border-b-0 @2xl:border-r"
              key={`result-${index}`}
            >
              <span className="mb-4 font-mono text-sm uppercase">{result.title}</span>
              {result.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="block rounded-lg px-3 py-4 font-semibold text-contrast-500 ring-primary transition-colors hover:bg-contrast-100 hover:text-foreground focus-visible:outline-0 focus-visible:ring-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )
        }

        if (result.type === 'products') {
          return (
            <div className="flex w-full flex-col gap-5 p-5" key={`result-${index}`}>
              <span className="font-mono text-sm uppercase">{result.title}</span>
              <div className="grid w-fit grid-cols-2 gap-5 @xl:grid-cols-4 @2xl:grid-cols-2 @4xl:grid-cols-4">
                {result.products.map(product => (
                  <ProductCard
                    key={product.id}
                    product={{
                      id: product.id,
                      title: product.title,
                      href: product.href,
                      price: product.price,
                      image: product.image,
                    }}
                  />
                ))}
              </div>
            </div>
          )
        }

        return null
      })}
    </div>
  )
}

function LocaleForm({
  action,
  locales,
  activeLocaleId,
}: {
  activeLocaleId?: string
  action: LocaleAction
  locales: Locale[]
}) {
  const [lastResult, formAction, isPending] = useActionState(action, null)
  const activeLocale = locales.find(locale => locale.id === activeLocaleId)

  useEffect(() => {
    if (lastResult?.error) console.log(lastResult.error)
  }, [lastResult?.error])

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={clsx(
          'items-center gap-1 rounded-lg p-2 text-xs hover:bg-contrast-100',
          'flex uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
        )}
      >
        {activeLocale?.id ?? locales[0].id}
        <ChevronDown strokeWidth={1.5} size={16} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={16}
          className="z-50 max-h-80 overflow-y-scroll rounded-xl bg-background p-2 shadow-xl shadow-foreground/10 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 @4xl:w-32 @4xl:rounded-2xl @4xl:p-2"
        >
          {locales.map(({ id, label }) => (
            <DropdownMenu.Item
              className={clsx(
                'cursor-default rounded-lg px-2.5 py-2 text-sm font-medium text-contrast-400 outline-none transition-colors',
                'hover:text-foreground focus:bg-contrast-100',
                { 'text-foreground': id === activeLocaleId }
              )}
              key={id}
              onSelect={() => {
                startTransition(async () => {
                  const formData = new FormData()

                  formData.append('id', id)
                  formAction(formData)
                })
              }}
            >
              {label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
