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

type MenuItem = {
  title: string
  description: string
  href?: string
  subMenuItems: SubMenuItem[]
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
  ctaText,
  ctaLink,
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
                <NavigationMenu.Item key={index} asChild>
                  <>
                    {menuItem.href ? (
                      <NavigationMenu.Link asChild>
                        <Link
                          className="select-none place-content-center px-3 py-2 text-sm font-normal leading-none text-foreground/70 outline-none transition-colors hover:text-foreground"
                          href={menuItem.href}
                        >
                          {menuItem.title}
                        </Link>
                      </NavigationMenu.Link>
                    ) : (
                      <NavigationMenu.Trigger
                        onMouseEnter={() => handleMouseEnter(menuItem)}
                        className="group flex select-none items-center justify-between gap-0.5 rounded-[4px] px-3 py-2 text-sm font-normal leading-none text-foreground/70 outline-none transition-colors hover:text-foreground"
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
                      <NavigationMenu.Content className="pointer-events-auto absolute left-0 top-0 w-full data-[motion=from-end]:duration-300 data-[motion=from-start]:duration-300 data-[motion=to-end]:duration-300 data-[motion=to-start]:duration-300 data-[motion=from-end]:animate-in data-[motion=from-start]:animate-in data-[motion=to-end]:animate-out data-[motion=to-start]:animate-out data-[motion=from-end]:fade-in data-[motion=from-start]:fade-in data-[motion=to-end]:fade-out data-[motion=to-start]:fade-out data-[motion=from-end]:slide-in-from-left-20 data-[motion=from-start]:slide-in-from-right-20 data-[motion=to-end]:slide-out-to-left-20 data-[motion=to-start]:slide-out-to-right-20 @2xl:w-auto">
                        <div
                          className={clsx(
                            'grid',
                            `${
                              menuItem.subMenuItems[0].title
                                ? 'grid-cols-[250px_1fr]'
                                : 'grid-cols-[500px]'
                            }`
                          )}
                        >
                          <div
                            className={`${
                              !menuItem.subMenuItems[0].title && 'hidden'
                            } h-full border-r border-contrast-500 bg-background/50`}
                          >
                            <ul className="list group m-0 w-full list-none space-y-0.5 p-2">
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
                              'group min-w-[250px] gap-0 p-2 @2xl:columns-2 @5xl:min-w-[500px]',
                              `${innerItems.length > 4 && ''}`
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
              className="hidden @lg:inline-flex"
            >
              {ctaText}
            </Button>
          </div>
        </div>

        <div
          className={`w-full overflow-hidden transition-all duration-300 @5xl:hidden ${
            isMobileMenuOpen ? 'max-h-[calc(100svh-6rem)]' : 'max-h-0'
          }`}
        >
          <div className="max-h-[calc(100svh-1.25rem)] overflow-y-scroll border-t border-foreground/10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <MobileMenu mainMenuItems={mainMenuItems} secondaryMenuItems={secondaryMenuItems} />
          </div>

          <div className="w-full border-t border-foreground/10 p-4 @lg:hidden">
            <Button link={{ href: ctaLink }} variant="primary" size="small" borderGlow={false}>
              {ctaText}
            </Button>
          </div>
        </div>

        <div className="absolute left-0 top-full flex w-full justify-center">
          <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] origin-top overflow-hidden rounded-2xl border border-contrast-400 bg-contrast-500/50 shadow-xl backdrop-blur-xl transition-[width,_height] duration-200 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95" />
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
  return (
    <li
      className="cursor-pointer break-inside-avoid-column rounded-lg transition-all duration-150"
      key={title}
    >
      <Link
        href={href}
        onClick={onClick}
        className={clsx(
          'flex items-start gap-x-2.5 rounded-lg p-3 py-2.5 transition-colors hover:bg-contrast-500/50',
          `${isActive && 'bg-contrast-500/50'}`
        )}
      >
        {isInnerMenuItem && icon && <div className="mt-0.5 h-4 w-4">{icon}</div>}

        <div>
          <div className="text-sm">{title}</div>
          <div className="text-xs text-foreground/50">{content}</div>
        </div>
      </Link>
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
    className="px-5 py-2.5 text-base text-foreground"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <>
      {mainMenuItems.map((menuItem, index) => (
        <Accordion.Item value={`${index + 1}`} key={index}>
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
