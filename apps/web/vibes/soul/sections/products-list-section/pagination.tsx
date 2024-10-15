'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, use } from 'react'

import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const createUrl = (pathname: string, params: URLSearchParams) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}

function updateParam(searchParams: URLSearchParams, key: string, value: string) {
  const newParams = new URLSearchParams(searchParams.toString())
  newParams.set(key, value)

  return newParams
}

export interface Pages {
  name: string
  previousPage?: string
  nextPage?: string
}

interface Props {
  pages: Pages | Promise<Pages>
}

export function Pagination({ pages }: Props) {
  return (
    <Suspense fallback={<PaginationSkeleton />}>
      <PaginationResolved pages={pages} />
    </Suspense>
  )
}

function PaginationResolved({ pages }: Props) {
  const { name, previousPage, nextPage } = use(Promise.resolve(pages))
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const prevHref =
    previousPage != null ? createUrl(pathname, updateParam(searchParams, name, previousPage)) : null
  const nextHref =
    nextPage != null ? createUrl(pathname, updateParam(searchParams, name, nextPage)) : null

  return (
    <div className="flex w-full justify-center bg-background py-10 text-xs">
      <div className="flex gap-2">
        {prevHref != null ? (
          <PaginationLink href={prevHref}>
            <ChevronLeft />
          </PaginationLink>
        ) : (
          <SkeletonLink>
            <ChevronLeft />
          </SkeletonLink>
        )}
        {nextHref != null ? (
          <PaginationLink href={nextHref}>
            <ChevronRight />
          </PaginationLink>
        ) : (
          <SkeletonLink>
            <ChevronRight />
          </SkeletonLink>
        )}
      </div>
    </div>
  )
}

function PaginationLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={clsx(
        'flex h-12 w-12 items-center justify-center rounded-full border border-contrast-100 text-foreground ring-primary transition-colors duration-300 hover:bg-contrast-100 focus-visible:outline-0 focus-visible:ring-2'
      )}
    >
      {children}
    </Link>
  )
}

function SkeletonLink({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-12 w-12 cursor-not-allowed items-center justify-center rounded-full border border-contrast-100 text-foreground opacity-50 duration-300">
      {children}
    </div>
  )
}

function PaginationSkeleton() {
  return (
    <div className="flex w-full justify-center bg-background py-10 text-xs">
      <div className="flex gap-2">
        <SkeletonLink>
          <ChevronLeft />
        </SkeletonLink>
        <SkeletonLink>
          <ChevronRight />
        </SkeletonLink>
      </div>
    </div>
  )
}
