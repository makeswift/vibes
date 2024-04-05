'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CSSProperties, Ref, forwardRef, useEffect, useRef, useState } from 'react'
import ReactHeadroom from 'react-headroom'

import clsx from 'clsx'

import { usePollAnimationFrame } from '@/lib/utils'

type MainLink = {
  text?: string
  link?: {
    href: string
    target?: '_self' | '_blank'
  }
  external?: boolean
}

type SecondaryLink = {
  icon?: { url: string; dimensions: { width: number; height: number } }
  iconAlt?: string
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
}

const Navigation = forwardRef(function Navigation(
  {
    className,
    logoImage,
    logoAlt,
    logoWidth = 120,
    logoLink,
    mainLinks,
    secondaryLinks,
    ...rest
  }: Props,
  ref: Ref<HTMLDivElement>
) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const router = useRouter()
  const container = useRef<HTMLDivElement>(null)
  const [activeItemLeft, setActiveItemLeft] = useState(0)
  const [activeItemWidth, setActiveItemWidth] = useState(0)

  useEffect(() => {
    const handleRouteChange = () => setMobileNavOpen(false)

    router.events.on('routeChangeStart', handleRouteChange)

    return () => router.events.off('routeChangeStart', handleRouteChange)
  }, [router])

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
    <ReactHeadroom {...rest} className="!h-16 w-full">
      <header
        ref={ref}
        className={clsx(
          className,
          '@container w-full overflow-hidden border-b border-primary/30 bg-background/80 backdrop-blur-xl'
        )}
      >
        <nav className="@4xl:justify-start @4xl:py-0 flex items-stretch justify-between gap-x-3 px-3 py-3">
          {logoImage && (
            <div className="@4xl:flex-1 flex items-center">
              <Link href={logoLink?.href ?? ''} target={logoLink?.target}>
                <Image
                  src={logoImage.url}
                  alt={logoAlt ?? 'Logo'}
                  width={logoWidth}
                  height={logoWidth / (logoImage.dimensions.width / logoImage.dimensions.height)}
                  priority
                />
              </Link>
            </div>
          )}

          <div
            className="@4xl:flex relative hidden items-stretch [clip-path:inset(0px_0px)] before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-[var(--active-item-width)] before:translate-x-[var(--active-item-left)] before:bg-gradient-to-r before:from-primary/0 before:via-primary/100 before:to-primary/0 before:transition-all before:duration-300 before:ease-in-out"
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
                  'after:rounded-circle group relative inline-flex items-center px-4 py-6 text-sm font-medium text-foreground transition duration-200 after:pointer-events-none after:absolute after:left-1/2 after:top-full after:-z-10 after:h-[8px] after:w-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-primary/70 after:opacity-0 after:blur-[12px] after:transition-all after:duration-500 after:ease-out hover:opacity-100',
                  link.link?.href && router.asPath.startsWith(link.link?.href)
                    ? 'active-link opacity-100 after:opacity-100 after:delay-300'
                    : 'opacity-70'
                )}
              >
                {link.text}

                {link.external && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.75 1.25H2.25V2.75H8.18946L0.939346 10.0001L2.00001 11.0608L9.25 3.81078V9.75H10.75V1.25Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </Link>
            ))}
          </div>

          <div className="flex flex-1 items-center justify-end gap-x-3 px-2">
            {secondaryLinks?.map((link, i) => (
              <Link
                key={i}
                href={link.link?.href ?? ''}
                target={link.link?.target}
                className="@4xl:block hidden transition duration-300 hover:drop-shadow-[0_0_4px_#03EADA]"
              >
                {link.icon && (
                  <Image
                    src={link.icon.url}
                    alt={link.iconAlt ?? 'Icon'}
                    width={24}
                    height={24}
                    priority
                  />
                )}
              </Link>
            ))}

            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="@sm:mr-0 @4xl:hidden relative mr-2 block rounded-full p-2.5"
              role="button"
              aria-label="Open mobile navigation"
            >
              <div className="flex h-4 w-5 flex-col justify-between py-0.5 transition-transform">
                <div
                  className={clsx(
                    'h-0.5 w-full bg-primary transition-transform duration-200',
                    mobileNavOpen && 'translate-y-[5px]'
                  )}
                ></div>
                <div
                  className={clsx(
                    'h-0.5 w-full bg-primary transition-transform duration-200',
                    mobileNavOpen && '-translate-y-[5px]'
                  )}
                ></div>
              </div>
            </button>
          </div>
        </nav>

        <div
          className={clsx(
            '@4xl:hidden w-full overflow-hidden transition-all duration-300',
            mobileNavOpen ? 'max-h-96' : 'max-h-0'
          )}
        >
          <div className="w-full px-4 pb-6 text-center">
            {mainLinks?.map((link, i) => (
              <Link
                key={i}
                href={link.link?.href ?? '#'}
                target={link.link?.target}
                className="flex w-full items-center justify-center py-2 text-base font-medium text-foreground"
              >
                {link.text}

                {link.external && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.75 1.25H2.25V2.75H8.18946L0.939346 10.0001L2.00001 11.0608L9.25 3.81078V9.75H10.75V1.25Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </Link>
            ))}

            <div className="flex items-center justify-center gap-x-4 pt-6">
              {secondaryLinks?.map((link, i) => (
                <Link key={i} href={link.link?.href ?? '#'} target={link.link?.target}>
                  {link.icon && (
                    <Image
                      src={link.icon.url}
                      alt={link.iconAlt ?? 'Icon'}
                      width={24}
                      height={24}
                      priority
                    />
                  )}
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
