import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface Props {
  className?: string
  logo?: { url: string; alt: string; width: number; height: number; className?: string }
  title: JSX.Element | string
  subtitle?: string
  groups: LinkGroup[]
  footNote: JSX.Element | string
  socials: {
    icon: JSX.Element
    link: string
  }[]
}

type LinkGroup = {
  title: string
  links: {
    label: string
    href: string
    target: '_self' | '_blank'
  }[]
}

export default function FooterSection({
  className,
  logo,
  title,
  groups,
  footNote,
  socials,
}: Props) {
  return (
    <section
      className={cn('flex h-fit w-full flex-col gap-0.5 bg-background text-background', className)}
    >
      <div className="flex flex-col items-center gap-0.5 @md:flex-row">
        {logo && (
          <div className="flex h-96 w-full items-center justify-center bg-foreground p-10 @md:h-72 @md:grow @md:basis-1/2 @lg:h-80">
            <Image
              src={logo.url}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-auto max-h-full w-auto max-w-full object-contain"
            />
          </div>
        )}

        <div className="title flex h-96 w-full items-center justify-center bg-foreground p-10 text-center font-mono text-sm uppercase leading-[1.375rem] tracking-[0.02em] @md:h-72 @md:grow @md:basis-1/2 @lg:h-80">
          {title}
        </div>
      </div>
      <div className="link-groups flex flex-wrap justify-items-center gap-0.5">
        {groups.map((group, index) => {
          return (
            <div
              key={index}
              className={cn(
                'flex min-w-[18.75rem] flex-1 flex-col gap-4 bg-foreground px-4 pb-8 pt-6 text-start'
              )}
            >
              <h4 className="font-mono text-xs uppercase leading-[var(--line-height-xs)]">
                {group.title}
              </h4>
              <div className="flex flex-col gap-3 font-body text-base font-medium leading-6">
                {group.links.map((link, index) => (
                  <Link key={index} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="social-media flex flex-col items-start justify-between gap-6 bg-foreground p-6 font-body text-sm font-medium leading-[1.375rem] @md:flex-row @md:items-center @md:leading-6">
        {footNote}
        <div className="social-media-links flex gap-6 bg-foreground text-background">
          {socials.map(({ icon, link }) => (
            <Link key={link} href={link} target="_blank">
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
