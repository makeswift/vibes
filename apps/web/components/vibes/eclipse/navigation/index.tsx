'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CSSProperties, Ref, forwardRef, useEffect, useRef, useState } from 'react'
import ReactHeadroom from 'react-headroom'

import clsx from 'clsx'

import Button from '../button'

type MainLink = {
  text?: string
  link?: {
    href: string
    target?: '_self' | '_blank'
  }
}

type SecondaryLink = {
  text?: string
  link?: {
    href: string
    target?: '_self' | '_blank'
  }
}

type Props = {
  className?: string
  navWidth?: number
  logoImage?: { url: string; dimensions: { width: number; height: number } }
  logoWidth?: number
  logoAlt?: string
  logoLink?: {
    href: string
    target?: '_self' | '_blank'
  }
  mainLinks?: MainLink[]
  secondaryLinks?: SecondaryLink[]
  linkGap?: number
  ctaLink?: {
    href: string
    target?: '_self' | '_blank'
  }
  ctaText?: string
}

function usePollAnimationFrame(callback: (timestamp: number) => unknown) {
  useEffect(() => {
    let requestId: number

    function poll(timestamp: number) {
      requestId = requestAnimationFrame(poll)

      callback(timestamp)
    }

    requestId = requestAnimationFrame(poll)

    return () => {
      cancelAnimationFrame(requestId)
    }
  })
}

export const Navigation = forwardRef(function Navigation(
  { className, mainLinks, secondaryLinks, ctaText, ctaLink, ...rest }: Props,
  ref: Ref<HTMLDivElement>
) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const pathname = usePathname()
  const container = useRef<HTMLDivElement>(null)
  const [activeItemLeft, setActiveItemLeft] = useState(0)
  const [activeItemWidth, setActiveItemWidth] = useState(0)

  useEffect(() => {
    setMobileNavOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', mobileNavOpen)
  }, [mobileNavOpen])

  usePollAnimationFrame(() => {
    if (!container.current) return

    const activeItem = container.current.querySelector(`.active-link`)

    if (!activeItem) {
      setActiveItemLeft(0)
      setActiveItemWidth(0)

      return
    }

    const activeItemRect = activeItem.getBoundingClientRect()
    const containerRect = container.current.getBoundingClientRect()

    setActiveItemLeft(activeItemRect.left - containerRect.left + container.current.scrollLeft)
    setActiveItemWidth(activeItemRect.width)
  })

  return (
    <ReactHeadroom {...rest} className="!h-24 w-full [&>div]:px-5 [&>div]:pt-5">
      <header
        ref={ref}
        className={clsx(
          className,
          'w-full overflow-hidden rounded-[28px] border border-foreground/20 bg-muted-foreground/50 text-foreground backdrop-blur-xl @container'
        )}
      >
        <nav className="flex items-stretch justify-between gap-x-3 @4xl:justify-start">
          <div className="flex items-center pl-3 @4xl:flex-1">
            <Link href="/">
              <Image src="/logo-placeholder.svg" alt="Logo" width={90} height={34} priority />
            </Link>
          </div>

          <div
            className="relative hidden items-stretch px-5 [clip-path:inset(0px_0px)] before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-[var(--active-item-width)] before:translate-x-[var(--active-item-left)] before:bg-gradient-to-r before:from-primary/0 before:via-primary/100 before:to-primary/0 before:transition-all before:duration-300 before:ease-in-out @4xl:flex"
            ref={container}
            style={
              {
                '--active-item-left': `${activeItemLeft}px`,
                '--active-item-width': `${activeItemWidth}px`,
              } as CSSProperties
            }
          >
            {mainLinks?.map((link, i) => (
              <Link
                key={i}
                href={link.link?.href ?? ''}
                target={link.link?.target}
                className={clsx(
                  'relative inline-flex items-center px-3 text-sm font-medium transition duration-200 after:pointer-events-none after:absolute after:left-1/2 after:top-full after:-z-10 after:h-[8px] after:w-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-primary/70 after:opacity-0 after:blur-[12px] after:transition-all after:duration-500 after:ease-out hover:opacity-100',
                  link.link?.href && pathname.startsWith(link.link?.href)
                    ? 'active-link opacity-100 after:opacity-100 after:delay-300'
                    : 'opacity-70'
                )}
              >
                {link.text}
              </Link>
            ))}
          </div>

          <div className="flex flex-1 items-center justify-end p-2 pl-5">
            {secondaryLinks?.map((link, i) => (
              <Link
                key={i}
                href={link.link?.href ?? ''}
                target={link.link?.target}
                className={clsx(
                  'hidden px-3 text-sm font-medium opacity-70 transition duration-200 hover:opacity-100 @4xl:block',
                  link.link?.href && pathname.startsWith(link.link?.href) && 'opacity-100'
                )}
              >
                {link.text}
              </Link>
            ))}

            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="relative mr-2 block rounded-full p-2.5 @sm:mr-0 @4xl:hidden"
              role="button"
              aria-label="Open mobile navigation"
            >
              <div className="flex h-4 w-4 flex-col justify-between py-0.5 transition-transform">
                <div
                  className={clsx(
                    'h-0.5 w-full bg-foreground transition-transform duration-200',
                    mobileNavOpen && 'translate-y-[5px]'
                  )}
                ></div>
                <div
                  className={clsx(
                    'h-0.5 w-full bg-foreground transition-transform duration-200',
                    mobileNavOpen && '-translate-y-[5px]'
                  )}
                ></div>
              </div>
            </button>

            <Button
              link={ctaLink}
              variant="primary"
              size="small"
              borderGlow={false}
              className="ml-2 hidden @sm:inline-block"
            >
              Contact us
            </Button>
          </div>
        </nav>

        <div
          className={clsx(
            'w-full transition-all duration-300 @4xl:hidden',
            mobileNavOpen ? 'max-h-96' : 'max-h-0'
          )}
        >
          <div className="w-full border-t border-foreground/20 p-5 text-center text-foreground">
            {mainLinks?.map((link, i) => (
              <Link
                key={i}
                href={link.link?.href ?? '#'}
                target={link.link?.target}
                className="block py-2 text-lg font-medium"
              >
                {link.text}
              </Link>
            ))}

            {secondaryLinks?.map((link, i) => (
              <Link
                key={i}
                href={link.link?.href ?? '#'}
                target={link.link?.target}
                className="block py-2 text-lg font-medium"
              >
                {link.text}
              </Link>
            ))}

            <Button link={ctaLink} className="ml-2 mt-3 @sm:hidden">
              {ctaText}
            </Button>
          </div>
        </div>
      </header>
    </ReactHeadroom>
  )
})

export default Navigation
