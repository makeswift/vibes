'use client'

import Image from 'next/image'
import Link from 'next/link'
import { forwardRef, useEffect, useState } from 'react'
import ReactHeadroom from 'react-headroom'

import * as Accordion from '@radix-ui/react-accordion'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'

import Button from '../button'

type SecondaryMenuItem = {
  title: string
  href: string
}

type InnerMenuItem = {
  title: string
  content: string
  href: string
  icon?: React.ReactNode
}

type SubMenuItem = {
  title?: string
  content?: string
  innerMenuItems?: InnerMenuItem[]
}

type imageContainer = {
  title: string
  description: string
  img: string
  alt: string
}

type MenuItem = {
  id: string
  title: string
  description: string
  href?: string
  subMenuItems: SubMenuItem[]
  img?: imageContainer[]
}

type NavigationProps = {
  logoImage: string
  mainMenuItems: MenuItem[]
  secondaryMenuItems: SecondaryMenuItem[]
  fixed?: boolean
  logoLink: string
  ctaText?: string
  ctaLink: string
}

const Navigation = ({
  logoImage,
  logoLink = '/',
  mainMenuItems,
  secondaryMenuItems,
  fixed,
  ctaText,
  ctaLink,
  ...rest
}: NavigationProps) => {
  const [innerItems, setInnerItems] = useState<InnerMenuItem[]>([])
  const [activeTitle, setActiveTitle] = useState<string>('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleMouseEnter = (menuItem: MenuItem) => {
    setActiveTitle(menuItem.subMenuItems[0].title || '')
    setInnerItems(menuItem.subMenuItems[0].innerMenuItems || [])
  }

  const handleClick = (title: string) => {
    setActiveTitle(title)
    const selectedMenuItem = mainMenuItems.find(item =>
      item.subMenuItems.some(subItem => subItem.title === title)
    )
    if (selectedMenuItem) {
      const selectedSubMenu = selectedMenuItem.subMenuItems.find(subItem => subItem.title === title)
      if (selectedSubMenu) {
        setInnerItems(selectedSubMenu.innerMenuItems || [])
      }
    }
  }

  return (
    <ReactHeadroom className="!h-24 w-full [&>div]:px-5 [&>div]:pt-5">
      <NavigationMenu.Root
        delayDuration={0}
        className="mx-auto max-w-6xl rounded-[28px] border border-contrast-400 bg-contrast-500/50 text-foreground backdrop-blur-xl @container"
      >
        <div className="flex min-h-14 items-stretch pl-3  pr-2">
          <div className="flex-1 shrink-0 place-content-center">
            <Link href={logoLink}>
              <Image src={logoImage} alt="Logo" width={88} height={24} />
            </Link>
          </div>

          <NavigationMenu.List className="hidden h-full items-stretch @5xl:flex" asChild>
            <div className="relative">
              {mainMenuItems.map((menuItem, index) => (
                <NavigationMenu.Item value={menuItem.id} key={index} asChild>
                  <>
                    {menuItem.href ? (
                      <NavigationMenu.Trigger>
                        <a
                          className="select-none px-3 py-2 text-sm font-normal leading-none text-foreground/70 outline-none transition-colors hover:text-foreground"
                          href={menuItem.href}
                        >
                          {menuItem.title}
                        </a>
                      </NavigationMenu.Trigger>
                    ) : (
                      <NavigationMenu.Trigger
                        onMouseEnter={() => handleMouseEnter(menuItem)}
                        className={`group flex select-none items-center justify-between gap-0.5 rounded-[4px] px-3 py-2 text-sm font-normal leading-none text-foreground/70 outline-none transition-colors hover:text-foreground ${menuItem.id}`}
                      >
                        {menuItem.title}
                        <ChevronDown
                          size={16}
                          className="relative top-[1px] transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
                          aria-hidden
                        />
                      </NavigationMenu.Trigger>
                    )}

                    {menuItem.subMenuItems.length > 0 && (
                      <NavigationMenu.Content className="duration-[250] pointer-events-auto absolute left-0 top-0 w-full rounded-2xl bg-contrast-500/50 backdrop-blur-xl ease-linear data-[motion=from-end]:animate-in data-[motion=from-start]:animate-in data-[motion=to-end]:animate-out data-[motion=to-start]:animate-out data-[motion=from-end]:fade-in data-[motion=from-start]:fade-in data-[motion=to-end]:fade-out data-[motion=to-start]:fade-out data-[motion=from-end]:slide-in-from-left-52 data-[motion=from-start]:slide-in-from-right-52 data-[motion=to-end]:slide-out-to-left-52 data-[motion=to-start]:slide-out-to-right-52 @2xl:w-auto">
                        <div
                          className={`content-container grid rounded-2xl border border-contrast-400 ${
                            menuItem.subMenuItems[0].title && menuItem.img
                              ? 'grid-cols-[250px_1fr_300px]'
                              : menuItem.subMenuItems[0].title
                                ? 'grid-cols-[250px_1fr]'
                                : menuItem.img
                                  ? 'grid-cols-[1fr_300px]'
                                  : 'grid-cols-[1fr]'
                          }`}
                        >
                          <div
                            className={`${
                              menuItem.subMenuItems[0].title ? '' : 'hidden'
                            } z-10 h-full rounded-l-2xl bg-background/50`}
                          >
                            <ul
                              className={clsx(
                                'list group m-0 grid w-full list-none gap-2 p-2',
                                'data-[enhanced=true]:after:opacity-[var(--opacity,0)] data-[enhanced=true]:after:[transition:opacity_0.025s,inset_0.025s_0.025s] data-[enhanced=true]:hover:after:opacity-[1] data-[enhanced=true]:hover:after:[transition:opacity_0.2s_0.2s,inset_0.2s]',
                                "after:pointer-events-none after:absolute after:bottom-[var(--bottom)] after:left-[var(--left)] after:right-[var(--right)] after:top-[var(--top)] after:z-[1] after:h-[var(--height)] after:w-[var(--width)] after:rounded-[0.5rem] after:bg-contrast-500/50 after:content-[''] after:[transition:inset_0.2s]"
                              )}
                            >
                              {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                                <ListItem
                                  key={subIndex}
                                  title={subMenuItem.title || ''}
                                  content={subMenuItem.content || ''}
                                  href="#"
                                  isActive={activeTitle === subMenuItem.title}
                                  onClick={() => handleClick(subMenuItem.title || '')}
                                />
                              ))}
                            </ul>
                          </div>

                          <ul
                            className={clsx(
                              `group grid ${
                                innerItems.length < 4 ? 'grid-cols-1' : 'grid-cols-1 xl:grid-cols-2'
                              } m-0 h-full w-full min-w-[400px] list-none items-start justify-between gap-2 p-2 xl:min-w-[500px]`,
                              'data-[enhanced=true]:after:opacity-[var(--opacity,0)] data-[enhanced=true]:after:[transition:opacity_0.025s,inset_0.025s_0.025s] data-[enhanced=true]:hover:after:opacity-[1] data-[enhanced=true]:hover:after:[transition:opacity_0.2s_0.2s,inset_0.2s]',
                              "after:pointer-events-none after:absolute after:bottom-[var(--bottom)] after:left-[var(--left)] after:right-[var(--right)] after:top-[var(--top)] after:z-[1] after:h-[var(--height)] after:w-[var(--width)] after:rounded-[0.5rem] after:content-[''] after:[transition:inset_0.2s]"
                            )}
                          >
                            {innerItems.map((item, innerIndex) => (
                              <ListItem
                                key={innerIndex}
                                title={item.title}
                                content={item.content}
                                href={item.href}
                                isActive={false}
                                onClick={() => {}}
                                isInnerMenuItem={true}
                                icon={item.icon}
                              />
                            ))}
                          </ul>

                          {menuItem.img && menuItem.img.length > 0 && (
                            <div className="relative m-2 ml-0 max-h-[250px] min-h-[200px] overflow-hidden rounded-lg bg-[#5F49F4]/25 p-3.5">
                              <div className="absolute left-1/2 right-1/2 top-32 h-full w-full rounded-full opacity-70" />
                              <p className="text-foreground">{menuItem.img[0].title}</p>
                              <p className="text-foreground/50">{menuItem.img[0].description}</p>
                              <img
                                className="absolute left-20 top-32"
                                src={menuItem.img[0].img}
                                alt={menuItem.img[0].alt}
                              />
                            </div>
                          )}
                        </div>
                      </NavigationMenu.Content>
                    )}
                  </>
                </NavigationMenu.Item>
              ))}

              <NavigationMenu.Indicator className="top-full z-10 flex h-[1px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 transition-all duration-300 data-[state=hidden]:opacity-0 data-[state=visible]:opacity-100" />
            </div>
          </NavigationMenu.List>

          <div className="flex flex-1 items-center justify-end gap-x-2 @5xl:gap-x-5">
            <div className="hidden gap-x-5 @5xl:flex">
              {secondaryMenuItems.map((menuItem, index) => (
                <Link
                  key={index}
                  className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                  href={menuItem.href}
                >
                  {menuItem.title}
                </Link>
              ))}
            </div>

            <div
              className="group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-md p-2 @5xl:hidden"
              onClick={handleMobileMenuToggle}
            >
              <span
                className={`absolute top-1/2 h-0.5 w-1/2 bg-foreground ${
                  isMobileMenuOpen ? 'translate-y-0 rotate-45 ' : '-translate-y-1'
                } transition-all duration-150`}
              ></span>
              <span
                className={`absolute top-1/2 h-0.5 w-1/2 -translate-y-1/2 bg-foreground transition-all duration-150 ${
                  isMobileMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1'
                }`}
              ></span>
            </div>

            <Button
              link={{ href: ctaLink }}
              variant="primary"
              size="small"
              className="hidden @2xl:inline-flex"
            >
              {ctaText}
            </Button>
          </div>
        </div>

        <div
          className={`w-full overflow-hidden transition-all duration-300 ease-in-out @5xl:hidden ${
            isMobileMenuOpen ? 'max-h-[calc(100svh-6rem)]' : 'max-h-0'
          }`}
        >
          <div className="max-h-[calc(100svh-1.25rem)] overflow-y-scroll border-t border-foreground/10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <MobileMenu mainMenuItems={mainMenuItems} secondaryMenuItems={secondaryMenuItems} />
          </div>

          <div className="w-full border-t border-foreground/10 p-4 @2xl:hidden">
            <Button link={{ href: ctaLink }} variant="primary" size="small" borderGlow={false}>
              {ctaText}
            </Button>
          </div>
        </div>

        <div className="absolute left-0 top-full flex w-full justify-center">
          <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top overflow-hidden rounded-[6px] transition-[width,_height] duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 @2xl:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </NavigationMenu.Root>
    </ReactHeadroom>
  )
}

const ListItem = ({
  title,
  content,
  href,
  isActive,
  onClick,
  isInnerMenuItem,
  icon,
}: {
  title: string
  content: string
  href: string
  isActive: boolean
  onClick: () => void
  isInnerMenuItem?: boolean
  icon?: React.ReactNode
}) => {
  useEffect(() => {
    const LIST = document.querySelectorAll('.list') as NodeListOf<HTMLElement>
    LIST.forEach(list => {
      list.dataset.enhanced = 'true'
    })
    let current: HTMLElement | null = null
    const sync = () => {
      if (current) {
        const parents = document.querySelectorAll('.content-container')
        parents.forEach(parent => {
          const parentBounds = parent.getBoundingClientRect()
          if (current) {
            const currentBounds = current.getBoundingClientRect()

            const relativeTop = currentBounds.top - parentBounds.top
            const relativeLeft = currentBounds.left - parentBounds.left
            const relativeRight = parentBounds.right - currentBounds.right
            const relativeBottom = parentBounds.bottom - currentBounds.bottom

            const relativeHeight = currentBounds.height
            const relativeWidth = currentBounds.width

            LIST.forEach(list => {
              list.dataset.enhanced = 'true'
              list.style.setProperty('--top', `${relativeTop}px`)
              list.style.setProperty('--right', `${relativeRight}px`)
              list.style.setProperty('--bottom', `${relativeBottom}px`)
              list.style.setProperty('--left', `${relativeLeft}px`)
              list.style.setProperty('--height', `${relativeHeight}px`)
              list.style.setProperty('--width', `${relativeWidth}px`)
            })
          }
        })
      }
    }
    const UPDATE = ({ x, y }: { x: number; y: number }) => {
      const ARTICLE = document
        .elementFromPoint(x, y)
        ?.closest('.listitem')
        ?.querySelector('.list-item-container') as HTMLElement | null
      if (ARTICLE !== current) {
        current = ARTICLE
        sync()
      }
    }
    LIST.forEach(list => {
      list.addEventListener('pointermove', UPDATE)
    })
    window.addEventListener('resize', sync)
  }, [])

  return (
    <li
      className={`listitem relative z-10 h-full cursor-pointer list-none rounded-lg transition-all duration-150 hover:[--li-active:1] ${
        isActive && 'bg-contrast-500/50 text-foreground'
      }`}
      key={title}
    >
      <a
        href={href}
        onClick={onClick}
        className={clsx(
          'list-item-container relative flex items-start gap-x-2 p-3 py-2.5',
          "group-[&:not([data-enhanced])]:after:absolute group-[&:not([data-enhanced])]:after:inset-0 group-[&:not([data-enhanced])]:after:-z-10 group-[&:not([data-enhanced])]:after:rounded-2xl group-[&:not([data-enhanced])]:after:bg-contrast-500/50 group-[&:not([data-enhanced])]:after:opacity-[var(--li-active,0)] group-[&:not([data-enhanced])]:after:transition-opacity group-[&:not([data-enhanced])]:after:duration-200 group-[&:not([data-enhanced])]:after:content-['']"
        )}
      >
        {isInnerMenuItem && icon && <div className="mt-0.5 h-4 w-4">{icon}</div>}

        <div className="space-y-0.5">
          <h3 className="text-sm text-foreground">{title}</h3>
          <p className="text-xs font-normal text-foreground/50">{content}</p>
        </div>
      </a>
    </li>
  )
}

const MobileMenu = ({
  mainMenuItems,
  secondaryMenuItems,
}: {
  mainMenuItems: MenuItem[]
  secondaryMenuItems: SecondaryMenuItem[]
}) => (
  <Accordion.Root
    className="px-4 py-2.5 text-base text-foreground"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <>
      {mainMenuItems.map((menuItem, index) => (
        <Accordion.Item value={menuItem.id} key={index}>
          {menuItem.href ? (
            <Link className="block py-2 outline-none" href={menuItem.href}>
              {menuItem.title}
            </Link>
          ) : (
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-x-5 py-2 outline-none">
                {menuItem.title}
                <ChevronDown
                  size={20}
                  className="transition-transform duration-300 group-data-[state=open]:rotate-180"
                  aria-hidden
                />
              </Accordion.Trigger>
            </Accordion.Header>
          )}
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-collapse data-[state=open]:animate-expand">
            {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
              <div key={subIndex}>
                {subMenuItem.innerMenuItems && (
                  <ul className="pl-4">
                    {subMenuItem.innerMenuItems.map((innerItem, innerIndex) => (
                      <li key={innerIndex}>
                        <Link
                          className="flex items-start gap-x-2.5 py-2 text-sm"
                          href={innerItem.href}
                        >
                          {innerItem.icon && <div className="mt-0.5">{innerItem.icon}</div>}
                          <div>
                            <div className="text-sm">{innerItem.title}</div>
                            <div className="text-xs text-foreground/50">{innerItem.content}</div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </Accordion.Content>
        </Accordion.Item>
      ))}
      {secondaryMenuItems.map((menuItem, index) => (
        <Link key={index} className="block py-2 outline-none" href={menuItem.href}>
          {menuItem.title}
        </Link>
      ))}
    </>
  </Accordion.Root>
)

export default Navigation
