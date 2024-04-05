'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, Ref, forwardRef } from 'react'

import clsx from 'clsx'

type LegalLink = {
  text?: string
  link?: {
    href: string
    target?: '_self' | '_blank'
  }
}

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
  copyright?: ReactNode
  legalLinks?: LegalLink[]
}

const Footer = forwardRef(function Footer(
  {
    className,
    footerGroups,
    legalLinks,
    logoImage,
    logoAlt = 'Logo',
    logoWidth = 120,
    logoLink,
    copyright,
  }: Props,
  ref: Ref<HTMLDivElement>
) {
  return (
    <footer ref={ref} className={clsx(className, '@container')}>
      <div className="card @xl:flex-row @xl:gap-x-24 @xl:p-8 flex flex-col gap-x-16 gap-y-8 p-6">
        {logoImage && (
          <Link href={logoLink?.href ?? '#'} target={logoLink?.target}>
            <Image
              src={logoImage.url}
              alt={logoAlt}
              width={logoWidth}
              height={logoWidth / (logoImage.dimensions.width / logoImage.dimensions.height)}
              priority
            />
          </Link>
        )}

        <div className="@lg:gap-y-10 flex flex-1 flex-wrap gap-y-8">
          {footerGroups?.map((group, groupIndex) => {
            if (footerGroups.length === 0) {
              return (
                <div key={groupIndex} className="text-foreground">
                  No footer groups added
                </div>
              )
            }

            return (
              <div
                key={groupIndex}
                className="@sm:basis-1/2 @2xl:px-5 @4xl:basis-auto flex-1 basis-full last:pr-0"
              >
                {group.heading && (
                  <div className="mb-3 flex items-center pt-1 font-semibold text-foreground">
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

      <div className="@xl:flex-row flex flex-col items-center justify-center gap-x-4 gap-y-3 py-8 text-center text-sm text-foreground">
        <span className="opacity-50 [&_div]:inline">
          © {new Date().getFullYear()}&nbsp;{copyright}
        </span>

        {legalLinks?.map((link, i) => (
          <Link
            key={i}
            href={link.link?.href ?? '#'}
            target={link.link?.target}
            className="opacity-50 transition duration-200 hover:opacity-100"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </footer>
  )
})
export default Footer
