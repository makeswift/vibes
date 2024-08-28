import Link from 'next/link'
import { Fragment } from 'react'

import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'

export interface Breadcrumb {
  label: string
  href: string
}

export interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[]
  className?: string
}

export const Breadcrumbs = function Breadcrumbs({ breadcrumbs, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className={clsx('flex flex-wrap items-center gap-x-2 text-sm @4xl:text-base', className)}
    >
      {breadcrumbs.map(({ label, href }, idx) => (
        <Fragment key={idx}>
          <Link href={href} className={clsx(idx === breadcrumbs.length - 1 && 'text-contrast-500')}>
            {label}
          </Link>
          {idx < breadcrumbs.length - 1 && (
            <ChevronRight size={16} strokeWidth={1.5} className="text-contrast-500" />
          )}
        </Fragment>
      ))}
    </nav>
  )
}

export default Breadcrumbs
