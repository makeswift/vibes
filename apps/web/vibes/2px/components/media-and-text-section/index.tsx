import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface Props {
  className?: string
  subtitle?: string
  text: string
  image: {
    url: string
    alt: string
    width: number
    height: number
  }
  links?: {
    label: string
    href: string
  }[]
}

export default function MediaAndTextSection({ className, subtitle, text, image, links }: Props) {
  return (
    <section
      className={cn(
        'grid grid-cols-1 bg-primary text-xs leading-[1.125rem] text-foreground @2xl:grid-cols-2 @2xl:text-sm @2xl:leading-snug',
        className
      )}
    >
      <div className="flex w-full flex-col items-start justify-center gap-10 px-2 py-6 text-start @3xl:px-20 @3xl:py-20">
        {subtitle && <p className="font-mono uppercase @2xl:tracking-[0.0225rem]">{subtitle}</p>}
        <span className="text-body font-medium @2xl:text-2xl @2xl:leading-[2.25rem] @2xl:-tracking-[0.0175rem]">
          {text}
        </span>
        {links && (
          <div className="flex gap-6 font-mono uppercase underline @2xl:tracking-[0.0225rem]">
            {links?.map(({ label, href }) => (
              <Link key={label} href={href} target="_blank">
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Image
        src={image.url}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="h-full w-full object-cover"
      />
    </section>
  )
}