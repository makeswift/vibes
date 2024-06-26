'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, Ref, forwardRef } from 'react'

import clsx from 'clsx'

type FooterLink = {
  text?: string
  link?: {
    href: string
    target?: '_self' | '_blank'
  }
}

type FooterGroup = {
  heading?: string
  icon?: { url: string; dimensions: { width: number; height: number } }
  iconAlt: string
  footerLinks?: FooterLink[]
}

type Props = {
  className?: string
  logoImage?: { url: string; dimensions: { width: number; height: number } }
  logoWidth?: number
  logoAlt?: string
  logoLink?: {
    href: string
    target?: '_self' | '_blank'
  }
  footerGroups?: FooterGroup[]
}

export const Footer = forwardRef(function Footer(
  { className, footerGroups }: Props,
  ref: Ref<HTMLDivElement>
) {
  return (
    <footer ref={ref} className={clsx(className, '@container')}>
      <div className="flex w-full flex-col gap-x-10 gap-y-8 rounded-2xl bg-muted-background/50 p-6 ring-1 ring-foreground/20 @sm:rounded-3xl @xl:flex-row @xl:gap-x-16 @xl:p-8">
        <Link href="/">
          <Image src="/logo-placeholder.svg" alt="Logo" width={100} height={38} priority />
        </Link>

        <div className="flex flex-1 flex-wrap gap-y-8 @lg:gap-y-10">
          {footerGroups?.map((group, groupIndex) => {
            return (
              <div
                key={groupIndex}
                className="flex-1 basis-full pr-10 last:pr-0 @sm:basis-1/3 @2xl:pr-10 @4xl:basis-auto"
              >
                {group.heading && (
                  <div className="mb-3 flex items-center font-semibold text-foreground">
                    {group.icon && (
                      <Image
                        src={group.icon.url}
                        alt={group.iconAlt}
                        width={16}
                        height={16}
                        className="mr-2"
                        priority
                      />
                    )}

                    {group.heading}
                  </div>
                )}
                <ul className={clsx(group.icon && 'pl-6')}>
                  {group.footerLinks?.map((footerLink, i) => {
                    return (
                      <li key={i}>
                        <Link
                          href={footerLink.link?.href ?? '#'}
                          target={footerLink.link?.target}
                          className="relative block py-1.5 text-sm font-medium text-foreground/50 transition duration-300 after:pointer-events-none after:absolute after:right-full after:top-1/2 after:mr-2.5 after:h-0.5 after:w-5 after:origin-right after:-translate-y-1/2 after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-transparent after:to-primary after:opacity-50 after:transition-all after:duration-300 hover:text-foreground/100 hover:after:scale-x-100 hover:after:opacity-100"
                        >
                          {footerLink.text}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-x-4 gap-y-3 py-8 text-center text-sm text-foreground @xl:flex-row">
        <span className="opacity-50 [&_div]:inline">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </span>

        <Link
          href="/privacy-policy"
          className="opacity-50 transition duration-200 hover:opacity-100"
        >
          Privacy Policy
        </Link>

        <Link
          href="/terms-of-service"
          className="opacity-50 transition duration-200 hover:opacity-100"
        >
          Terms of Service
        </Link>
      </div>
    </footer>
  )
})
export default Footer
