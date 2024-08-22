import Link from 'next/link'

import { cn } from '@/lib/utils'

export type Breadcrumb = {
  name: string
  link: Link
}

type Link = {
  href: string
}

interface Props {
  className?: string
  breadcrumbs: Breadcrumb[]
}

export default function Breadcrumbs({ className, breadcrumbs }: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="font-body text-xs font-medium leading-snug text-foreground"
    >
      <ul className={cn('flex flex-wrap items-center gap-4', className)}>
        {breadcrumbs.map((item, index) => {
          return (
            <>
              {index !== 0 && <div className="h-4 w-0.5 bg-foreground" />}
              <li key={index} className="flex h-4 items-center">
                <Link href={item.link.href}>{item.name}</Link>
              </li>
            </>
          )
        })}
      </ul>
    </nav>
  )
}
