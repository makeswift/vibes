import { cn } from '@/lib/utils'
import FacebookIcon from '@/vibes/2px/components/icons/FacebookIcon'
import InstagramIcon from '@/vibes/2px/components/icons/InstagramIcon'
import PinterestIcon from '@/vibes/2px/components/icons/PinterestIcon'
import TwitterIcon from '@/vibes/2px/components/icons/TwitterIcon'

interface Props {
  className?: string
  logo?: { url: string; alt: string }
  title: string
  subtitle?: string
  groups: LinkGroup[]
  legal: {
    copyright?: string
    builtBy?: string
  }
  socials: {
    facebook?: string
    instagram?: string
    twitter?: string
    pinterest?: string
  }
}

type LinkGroup = {
  title: string
  links: {
    label: string
    href: string
    target: '_self' | '_blank'
  }[]
}

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  pinterest: PinterestIcon,
}

export default function FooterSection({ className, logo, title, groups, legal, socials }: Props) {
  return (
    <section className={cn('flex h-fit w-full flex-col bg-background text-background', className)}>
      <div className="brand flex h-[49.125rem] flex-col items-center gap-[2px]  @md:h-[17.11944rem] @md:flex-row @lg:h-[19.3125rem] ">
        {logo && (
          <div className="logo flex h-[24.5625rem] w-full items-center justify-center border-b-2 border-background bg-foreground @md:h-[17.11944rem]  @lg:h-[19.3125rem] ">
            <img
              src={logo.url}
              alt={logo.alt}
              className="h-[9.3125rem] w-[18.3125rem] @md:h-[7.11944rem] @md:w-[14rem] @lg:h-[9.3125rem] @lg:w-[18.3125rem]"
            />
          </div>
        )}

        <div className="title flex h-[24.5625rem] w-full items-center justify-center border-b-2 border-background bg-foreground text-center font-mono text-sm uppercase leading-[1.375rem] tracking-[0.0225rem] @md:h-[17.11944rem] @lg:h-[19.3125rem]">
          {title}
        </div>
      </div>
      <div className="link-groups flex  flex-wrap justify-items-center gap-[2px] border-b-2">
        {groups.map((group, index) => {
          return (
            <div
              key={index}
              className={cn(
                'flex min-w-[18.75rem] flex-1 flex-col gap-4 bg-foreground px-4 pb-8 pt-6 text-start '
              )}
            >
              <span className="font-mono text-xs uppercase leading-[1.125rem]">{group.title}</span>
              <div className="flex flex-col gap-3 font-body text-base font-medium leading-6">
                {group.links.map((link, index) => (
                  <a key={index} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="social-media flex flex-col items-start justify-between gap-6 bg-foreground p-6 font-body text-sm font-medium leading-[1.375rem] @md:flex-row @md:items-center @md:leading-6">
        <div className="legal flex gap-6">
          <span>{legal.copyright}</span>
          <span>{legal.builtBy}</span>
        </div>
        <div className="social-media-links flex gap-6 bg-foreground text-background">
          {Object.entries(socials).map(([key, value]) => {
            if (!(key in SOCIAL_ICONS)) return null
            const Icon = SOCIAL_ICONS[key as keyof typeof SOCIAL_ICONS]

            return (
              <a key={key} href={value} target="_blank">
                <Icon />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
