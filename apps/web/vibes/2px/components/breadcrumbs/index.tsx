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
      className="font-body text-xs !leading-[var(--line-height-sm)] text-foreground"
    >
      <ul className={cn('flex flex-wrap items-center gap-4 ', className)}>
        {crumb.map((item, index) => {
          return (
            <>
              {index !== 0 && <div className="h-4 w-[2px] bg-foreground" />}
              <li key={index} className="flex h-4 items-center">
                <a href={item.link.href}>{item.label}</a>
              </li>
            </>
          )
        })}
      </ul>
    </nav>
  )
}
