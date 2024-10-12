'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { Checkbox } from '@/vibes/soul/components/checkbox'

const createUrl = (pathname: string, params: URLSearchParams) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}

interface Props {
  productId: string
  paramKey?: string
  label?: string
}

export const Compare = function Compare({
  productId,
  paramKey = 'compare',
  label = 'Compare',
}: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const activeOptions = searchParams.getAll(paramKey)
  const active = activeOptions.includes(productId)
  const currentParams = Array.from(searchParams.entries())
  const newParams = active
    ? currentParams.filter(([key, value]) => key !== paramKey || value !== productId)
    : [...currentParams, [paramKey, productId]]

  const href = createUrl(pathname, new URLSearchParams(newParams))

  return (
    <Link
      href={href}
      scroll={false}
      className="absolute right-1.5 top-1.5 flex cursor-pointer items-center gap-2 rounded-lg p-1 text-foreground transition-colors duration-300 hover:bg-background/80 @lg:bottom-4 @lg:right-4 @lg:top-auto"
      tabIndex={0}
    >
      <span className="hidden @lg:block">{label}</span>
      <Checkbox checked={active} />
    </Link>
  )
}
