'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { use } from 'react'

import { Select } from '@/vibes/soul/form/select'

const createUrl = (pathname: string, params: URLSearchParams) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}

export interface Option {
  label: string
  value: string
}

interface Props {
  options: Option[] | Promise<Option[]>
  label?: string
  sortParam?: string
}

export function Sorting({ label = 'Sort', options, sortParam }: Props) {
  return (
    <Suspense fallback={<SortingSkeleton placeholder={label} />}>
      <SortingInner options={options} label={label} sortParam={sortParam} />
    </Suspense>
  )
}

function SortingInner({ label = 'Sort', options, sortParam = 'sort' }: Props) {
  const resolved = use(Promise.resolve(options))
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const value = searchParams.get(sortParam) ?? undefined

  return (
    <Select
      placeholder={label}
      variant="round"
      options={resolved}
      value={value}
      onValueChange={value => {
        const params = new URLSearchParams(searchParams.toString())

        params.set(sortParam, value)

        router.replace(createUrl(pathname, params), { scroll: false })
      }}
    />
  )
}

function SortingSkeleton({ placeholder }: { placeholder: string }) {
  return <Select placeholder={placeholder} disabled options={[]} variant="round" />
}
