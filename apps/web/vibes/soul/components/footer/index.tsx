import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

import clsx from 'clsx'

interface Image {
  src: string
  altText: string
}

interface Link {
  href: string
  label: string
}

interface Section {
  title?: string
  links: Link[]
}

interface SocialMediaLink {
  href: string
  icon: ReactNode
}

interface ContactInformation {
  address?: string
  phone?: string
}

interface Props {
  logo?: string | Image

  sections: Section[]
  copyright?: string
  contactInformation?: ContactInformation
  paymentIcons?: ReactNode[]
  socialMediaLinks?: SocialMediaLink[]
  className?: string
}

export const Footer = function Footer({
  logo,
  sections,
  contactInformation,
  paymentIcons,
  socialMediaLinks,
  copyright,
  className = '',
}: Props) {
  return (
    <footer
      className={clsx(
        'border-b-[4px] border-b-primary bg-background text-foreground @container',
        className
      )}
    >
      {/* TODO: @sami, when designs are available, add:  
        contactInformation,
        paymentIcons,
        socialMediaLinks,
      */}

      <div className="mx-3 flex flex-col justify-between gap-10 border-t border-t-contrast-100 pt-16 @xl:mx-6 @xl:py-20 @2xl:flex-row @5xl:mx-20">
        {/* Logo */}
        <div className="@2xl:w-1/3 @5xl:w-full">
          <Link
            href="#"
            className="relative inline-block h-5 w-32 rounded-lg ring-primary focus-visible:outline-0 focus-visible:ring-2"
          >
            {typeof logo === 'string' ? (
              <span className="text-2xl font-semibold">{logo}</span>
            ) : (
              logo?.src && (
                <Image
                  src={logo.src}
                  fill
                  alt={logo.altText ?? 'Logo'}
                  className="object-contain"
                />
              )
            )}
          </Link>
        </div>

        {/* Footer Columns of Links */}
        <div className="grid w-full grid-cols-2 justify-between gap-12 @md:grid-cols-3">
          {sections?.length &&
            sections.map(({ title, links }, i) => {
              return (
                <div key={i} className="text-[15px]">
                  {title && <span className="mb-8 block font-medium">{title}</span>}

                  <ul>
                    {links?.map((link, i) => {
                      return (
                        <li key={i}>
                          <Link
                            className="block rounded-lg py-2 font-medium opacity-50 ring-primary transition-opacity duration-300 hover:opacity-100 focus-visible:outline-0 focus-visible:ring-2"
                            href={link.href}
                          >
                            {link.label}
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

      {/* Copyright */}
      {copyright && (
        <span className="mb-8 block px-3 py-10 text-[15px] text-contrast-400 @xl:px-20">
          {copyright}
        </span>
      )}
    </footer>
  )
}

export default Footer
