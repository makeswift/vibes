import Link from 'next/link'

import { cn } from '@/lib/utils'

export type Breadcrumb = {
  label: string
  link: Link
}

type Link = {
  href: string
  target: '_self' | '_blank'
}

interface Props {
  className?: string
  crumb: Breadcrumb[]
}

export default function Breadcrumbs({ className, crumb }: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="font-body text-xs font-medium leading-snug text-foreground"
    >
      <ul className={cn('flex flex-wrap items-center gap-4', className)}>
        {crumb.map((item, index) => {
          return (
            <>
              {index !== 0 && <div className="h-4 w-0.5 bg-foreground" />}
              <li key={index} className="flex h-4 items-center">
                <Link href={item.link.href}>{item.label}</Link>
              </li>
            </>
          )
        })}
      </ul>
    </nav>
  )
}
