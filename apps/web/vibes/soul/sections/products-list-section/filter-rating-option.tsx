'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Checkbox } from '@/vibes/soul/components/checkbox'
import { Rating } from '@/vibes/soul/components/rating'

interface Props {
  value: number
  name: string
}

const createUrl = (pathname: string, params: URLSearchParams) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}

export function FilterRatingOption({ value, name }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const activeOptions = searchParams.getAll(name)
  const active = activeOptions.includes(value.toString())
  const currentParams = Array.from(searchParams.entries())
  const newParams = active
    ? currentParams.filter(([k, v]) => k !== name || v !== value.toString())
    : [...currentParams, [name, value.toString()]]

  const href = createUrl(pathname, new URLSearchParams(newParams))

  return (
    <Checkbox
      id={`${name}-${value}`}
      label={<Rating rating={value} />}
      checked={active}
      setChecked={() => {
        router.push(href, { scroll: false })
      }}
    />
  )
}
