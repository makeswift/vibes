'use client'

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

  useEffect(() => {
    setMobileNavOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', mobileNavOpen)
  }, [mobileNavOpen])

  usePollAnimationFrame(() => {
    if (!container.current) return
  })

  return (
    <ReactHeadroom {...rest} className="!h-24 w-full [&>div]:px-5 [&>div]:pt-5">
      <header
        ref={ref}
        className={clsx(
          className,
          'w-full overflow-hidden rounded-[24px] border border-foreground/20 bg-background text-foreground backdrop-blur-xl @container'
        )}
      >
        <nav className="flex items-stretch justify-between gap-x-3 @4xl:justify-start">
          <div
            className="relative hidden items-stretch px-5 [clip-path:inset(0px_0px)] before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-[var(--active-item-width)] before:translate-x-[var(--active-item-left)] before:bg-gradient-to-r before:from-primary/0 before:via-primary/100 before:to-primary/0 before:transition-all before:duration-300 before:ease-in-out @4xl:flex"
            ref={container}
          >
            {mainLinks?.map((link, i) => (
              <Link
                key={i}
                href={link.link?.href ?? ''}
                target={link.link?.target}
                className="relative inline-flex items-center px-3 text-sm font-medium transition duration-200"
              >
                {link.text}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-foreground"
          >
            SOUL
          </Link>

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
            />
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
