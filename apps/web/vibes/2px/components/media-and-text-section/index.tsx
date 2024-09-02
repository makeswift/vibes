import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface Props {
  className?: string
  subtitle?: string
  text: React.ReactElement
  reverse?: boolean
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

export default function MediaAndTextSection({
  className,
  subtitle,
  text,
  image,
  links,
  reverse = false,
}: Props) {
  return (
    <section
      className={cn(
        'flex border-b-2 border-foreground bg-primary text-xs text-foreground @2xl:text-sm',
        {
          'flex-col-reverse @2xl:flex-row-reverse': reverse,
          'flex-col @2xl:flex-row': !reverse,
        },
        className
      )}
    >
      <div className="flex w-full flex-col items-start justify-center gap-10 px-2 py-6 text-start @3xl:px-20 @3xl:py-20">
        {subtitle && <p className="font-mono uppercase @2xl:tracking-[0.02em]">{subtitle}</p>}
        {text}
        {links && (
          <div className="flex gap-6 font-mono uppercase underline @2xl:tracking-[0.02em]">
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
