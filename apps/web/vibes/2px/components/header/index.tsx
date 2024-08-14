'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { cn } from '@/lib/utils'
import Badge from '@/vibes/2px/components/badge'

import { ChevronDownIcon } from '../icons/ChevronDownIcon'
import { CrossIcon } from '../icons/CrossIcon'
import { SearchIcon } from '../icons/SearchIcon'

interface Image {
  url: string
  altText: string
}

interface Links {
  label: string
  href?: string
  groups?: {
    label: string
    href: string
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
  searchAction: (query: string) => Promise<any[]>
  links: Links[]
  logo?: string | Image
  activeLocale?: string
  locales?: { id: string; region: string; language: string }[]
}

function LanguageSelector({
  activeLocale,
  locales,
}: {
  activeLocale?: string
  locales?: Props['locales']
}) {
  const [isOpen, setIsOpen] = useState(false)

  if (!locales?.length) return null

  return (
    <div className="relative h-full">
      <button onClick={() => setIsOpen(!isOpen)} className="flex h-full items-center gap-2">
        <span>{activeLocale}</span>
        <ChevronDownIcon />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-0.5 flex flex-col gap-3 border-x-2 border-b-2 border-foreground bg-background px-10 py-8">
          {locales?.map(locale => (
            <button
              key={locale.id}
              className={cn('h-6 text-sm', {
                'border-b-2 border-foreground text-start': locale.language === activeLocale,
              })}
            >
              {locale.language}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const MegaMenu = ({ href, label, groups }: Links) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="group h-full">
      <div className="flex h-full cursor-pointer items-center gap-2">
        {href ? <Link href={href}>{label}</Link> : <span>{label}</span>}

        {groups && (
          <button onClick={() => setIsOpen(!isOpen)} className="rotate-45 @2xl:rotate-0">
            <ChevronDownIcon />
          </button>
        )}
      </div>

      {groups?.length ? (
        <div
          className={cn(
            'absolute left-0 top-full mt-0.5 hidden w-screen border-x-2 border-b-2 border-foreground bg-background px-10 pb-10 pt-8 group-hover:flex',
            {
              'flex @2xl:hidden': isOpen,
            }
          )}
        >
          {groups.map(group => (
            <div key={group.label} className="flex flex-1 flex-col gap-4 @2xl:flex-row @2xl:gap-8">
              <div className="flex flex-col gap-3 text-sm">
                <h3 className="mb-5 font-mono font-normal uppercase tracking-[0.02em]">
                  {group.href ? (
                    <Link href={group.href}>{group.label}</Link>
                  ) : (
                    <span>{group.label}</span>
                  )}
                </h3>
                {group.links.map(({ href, label }) => (
                  <Link key={label} href={href}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function MobileMenu({
  links,
  languageAndSearch,
}: {
  links: Links[]
  languageAndSearch: JSX.Element
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeGroup, setActiveGroup] = useState<number | null>(null)
  const [activeSubGroup, setActiveSubGroup] = useState<number | null>(null)

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <span>Menu</span>
      </button>

      {isOpen ? (
        <div className="fixed bottom-0 left-0 right-0 top-[3.875rem] flex h-[calc(100vh-3.875rem)] flex-col overflow-auto">
          <div className="flex items-center gap-8 border-b-2 border-foreground px-2 py-4">
            {activeGroup === null ? (
              languageAndSearch
            ) : (
              <button
                onClick={() => {
                  setActiveGroup(null)
                  setActiveSubGroup(null)
                }}
              >
                <ChevronDownIcon className="h-12 w-12 rotate-90" />
              </button>
            )}

            <button
              onClick={() => {
                setIsOpen(false)
                setActiveGroup(null)
                setActiveSubGroup(null)
              }}
              className="ml-auto"
            >
              <CrossIcon className="h-12 w-12" />
            </button>
          </div>

          {activeGroup === null ? (
            links.map(({ label, href, groups }, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 border-b-2 border-foreground px-2 py-5 text-sm"
              >
                {href ? (
                  <Link href={href}>{label}</Link>
                ) : groups?.length ? (
                  <button
                    onClick={() => setActiveGroup(index)}
                    className="flex items-center justify-between gap-2"
                  >
                    <span>{label}</span>
                    <ChevronDownIcon className="-rotate-90" />
                  </button>
                ) : null}
              </div>
            ))
          ) : (
            <div className="flex flex-col pb-5">
              <p className="border-b-2 border-foreground px-2 py-3 text-2xl leading-9 -tracking-[.01em]">
                {links[activeGroup].label}
              </p>

              {links[activeGroup].groups?.map((group, index) => (
                <div key={group.label} className="mt-10 flex flex-col gap-4 px-2">
                  <h3 className="flex items-center justify-between font-mono font-normal uppercase tracking-[0.02em]">
                    {group.href ? (
                      <Link href={group.href}>{group.label}</Link>
                    ) : (
                      <span>{group.label}</span>
                    )}

                    <button
                      onClick={() => setActiveSubGroup(activeSubGroup !== index ? index : null)}
                    >
                      <ChevronDownIcon
                        className={cn('h-2.5 w-2.5', {
                          'rotate-180': activeSubGroup === index,
                        })}
                      />
                    </button>
                  </h3>

                  {activeSubGroup === index &&
                    group.links.map(({ href, label }, index) => (
                      <Link
                        key={label}
                        href={href}
                        className={cn({
                          'mt-8': index === 0,
                        })}
                      >
                        {label}
                      </Link>
                    ))}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </>
  )
}

export default function Header({
  logo,
  cartHref,
  cartCount,
  activeLocale,
  locales,
  searchAction,
  links,
}: Props) {
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const query = formData.get('search') as string
    await searchAction(query)
  }

  const languageAndSearch = (
    <>
      <form className="flex items-center gap-2" onSubmit={handleSearch}>
        <input
          className="w-20 appearance-none border-none outline-none placeholder:text-foreground"
          placeholder="Search"
        />

        <button type="submit" className="flex items-center gap-2">
          <SearchIcon />
        </button>
      </form>

      <LanguageSelector activeLocale={activeLocale} locales={locales} />
    </>
  )

  return (
    <nav className="relative flex h-[3.75rem] w-full items-center border-b-2 border-foreground bg-background px-3 text-xs font-medium leading-snug @container @2xl:px-5 @3xl:h-20">
      <div className="mr-auto hidden h-full flex-1 items-center @2xl:flex @2xl:gap-6 @3xl:gap-8">
        {links.map(link => (
          <MegaMenu {...link} key={link.label} />
        ))}
      </div>

      <div className="mr-auto flex h-full flex-1 items-center @2xl:hidden @2xl:gap-6 @3xl:gap-8">
        <MobileMenu links={links} languageAndSearch={languageAndSearch} />
      </div>

      <div className="flex h-full flex-1 items-center justify-center">
        {typeof logo === 'string' ? (
          <span>{logo}</span>
        ) : logo ? (
          <Image src={logo.url} alt={logo.altText} height={28} width={55} />
        ) : null}
      </div>

      <div className="ml-auto flex h-full flex-1 items-center justify-end gap-6">
        <div className="hidden h-full items-center gap-6 @2xl:flex">{languageAndSearch}</div>

        <Link className="flex items-center gap-2" href={cartHref}>
          <span>Cart</span>
          <Badge>{cartCount}</Badge>
        </Link>
      </div>
    </nav>
  )
}
