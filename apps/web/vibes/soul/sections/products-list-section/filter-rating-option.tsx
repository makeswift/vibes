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

  return (
    <Checkbox
      id={`${name}-${value}`}
      label={<Rating rating={value} />}
      checked={active}
      setChecked={() => {
        const params = Array.from(searchParams.entries())
        const newParams = active
          ? params.filter(([k, v]) => k !== name || v !== value.toString())
          : [...params, [name, value.toString()]]

        const href = createUrl(pathname, new URLSearchParams(newParams))

        router.replace(href, { scroll: false })
      }}
    />
  )
}
