'use client'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import Newsletter from '@/vibes/soul/components/newsletter'

type FooterColumn = {
  category: string
  categoryLinks?: { text: string; href: string }[]
}

type Props = {
  className?: string
  logo?: {
    image?: { url: string; dimensions: { width: number; height: number } }
    alt?: string
    link?: { href: string; target?: '_self' | '_blank' }
  }
  links?: FooterColumn[]
  newsletter?: {
    heading: string
    description: string
  }
  companyName: string
}

export const Footer = function Footer({ links, logo, newsletter, companyName }: Props) {
  return (
    <footer className="border-b-[4px] border-primary bg-background text-foreground @container">
      {newsletter && (
        <Newsletter
          heading={newsletter.heading}
          description={newsletter.description}
          theme="brand"
        />
      )}

      <div
        className={clsx(
          'mx-3 flex flex-col justify-between gap-10 @xl:mx-20 @xl:py-20 @2xl:flex-row',
          newsletter && '@xl:border-t @xl:border-contrast-100'
        )}
      >
        {/* Logo */}
        <Link
          href={logo?.link?.href ?? '/'}
          target={logo?.link?.target}
          className="w-full text-2xl font-semibold @2xl:w-1/3 @5xl:w-full"
        >
          {logo?.image ? (
            <Image src={logo.image.url} height={29} width={64} alt={logo.alt ?? 'Logo'} />
          ) : (
            logo?.alt
          )}
        </Link>

        {/* Footer Columns of Links */}
        <div className="grid w-full grid-cols-2 justify-between gap-12 @md:grid-cols-3">
          {links?.length &&
            links.map(({ category, categoryLinks }, i) => {
              return (
                <div key={i} className="text-[15px]">
                  <span className="mb-8 block font-medium">{category}</span>
                  <ul>
                    {categoryLinks?.map((link, i) => {
                      return (
                        <li key={i}>
                          <Link
                            className="block py-2 font-medium opacity-50 transition-opacity duration-300 hover:opacity-100"
                            href={link.href || '/'}
                          >
                            {link.text}
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
      <span className="mb-8 block px-3 py-10 text-[15px] text-contrast-400 @xl:px-20">
        © {new Date().getFullYear()} {companyName} - Powered by BigCommerce
      </span>
    </footer>
  )
}

export default Footer
