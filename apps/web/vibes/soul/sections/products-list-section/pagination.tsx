'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import clsx from 'clsx'
import { ChevronLeft } from 'lucide-react'

export interface Props {
  previousPage?: string
  nextPage?: string
}

export function Pagination({ previousPage, nextPage }: Props) {
  const pathname = usePathname()

  return (
    <div className="flex w-full justify-center bg-background py-10 text-xs">
      <div className="flex gap-2">
        <Link
          href={`${pathname}?page=${previousPage}`}
          className={clsx(
            'flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300',
            'ring-primary focus-visible:outline-0 focus-visible:ring-2',
            'border-contrast-100 text-foreground hover:bg-contrast-100'
          )}
        >
          <ChevronLeft />
        </Link>
        <Link
          href={`${pathname}?page=${nextPage}`}
          className={clsx(
            'flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300',
            'ring-primary focus-visible:outline-0 focus-visible:ring-2',
            'border-contrast-100 text-foreground hover:bg-contrast-100'
          )}
        >
          {nextPage}
        </Link>
      </div>
    </div>
  )
}
