'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Ref, forwardRef, useEffect, useRef, useState } from 'react'
import ReactHeadroom from 'react-headroom'

import clsx from 'clsx'

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
  links?: MainLink[]
  actions?: SecondaryLink[]
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
  { className, links, actions, ctaText, ctaLink, ...rest }: Props,
  ref: Ref<HTMLDivElement>
) {
  const [navOpen, setNavOpen] = useState(false)
  const pathname = usePathname()
  const container = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    setNavOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', navOpen)
  }, [navOpen])

  usePollAnimationFrame(() => {
    if (!container.current) return
  })

  useEffect(() => {
    const handleMouseEnter = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      setNavOpen(true)
    }
    const handleMouseLeave = () => {
      timeoutRef.current = window.setTimeout(() => {
        setNavOpen(false)
      }, 100)
    }
    const handleClick = () => setNavOpen(!navOpen)

    if (window.innerWidth >= 1536) {
      container.current?.addEventListener('mouseenter', handleMouseEnter)
      container.current?.addEventListener('mouseleave', handleMouseLeave)
      menuRef.current?.addEventListener('mouseenter', handleMouseEnter)
      menuRef.current?.addEventListener('mouseleave', handleMouseLeave)
    } else {
      container.current?.addEventListener('click', handleClick)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      container.current?.removeEventListener('mouseenter', handleMouseEnter)
      container.current?.removeEventListener('mouseleave', handleMouseLeave)
      container.current?.removeEventListener('click', handleClick)
      menuRef.current?.removeEventListener('mouseenter', handleMouseEnter)
      menuRef.current?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [navOpen])

  return (
    <ReactHeadroom {...rest} className="!h-24 w-full [&>div]:px-5 [&>div]:pt-5">
      <header
        ref={ref}
        className={clsx(className, 'w-full overflow-hidden text-foreground @container')}
      >
        <nav className="flex items-stretch justify-between gap-x-3 rounded-[24px] bg-background @4xl:justify-start">
          <div className="relative hidden items-stretch px-2.5 @4xl:flex" ref={container}>
            {links?.map((link, i) => (
              <Link
                key={i}
                href={link.link?.href ?? ''}
                target={link.link?.target}
                className="relative mx-0.5 my-2.5 inline-flex items-center rounded-xl p-2.5 text-sm font-medium transition-colors duration-200 hover:bg-contrast-100"
              >
                {link.text}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 py-3 text-2xl font-semibold text-foreground"
          >
            SOUL
          </Link>

          <div className="flex min-h-[60px] flex-1 items-center justify-end p-2 pl-5">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="relative mr-2 rounded-full p-2.5 @sm:mr-0 @4xl:hidden"
              role="button"
              aria-label="Toggle navigation"
            />

            {actions?.map((item, i) => (
              <Link
                key={i}
                href={item.link?.href ?? '#'}
                target={item.link?.target}
                className="block py-2 text-lg font-medium"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </nav>

        <div
          ref={menuRef}
          className={clsx(
            'mt-1.5 w-full overflow-y-auto rounded-[24px] transition-all duration-200 ease-in-out',
            navOpen ? 'max-h-96 bg-background' : 'pointer-events-none max-h-0 bg-transparent'
          )}
        >
          <div className="grid w-full divide-x divide-contrast-100 @xl:grid-cols-2 @3xl:grid-cols-3 @5xl:grid-cols-4 @7xl:grid-cols-5">
            <div className="flex flex-col gap-1 p-5">
              {links?.map((link, i) => (
                <Link
                  key={i}
                  href={link.link?.href ?? '#'}
                  target={link.link?.target}
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
