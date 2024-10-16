'use client'

import { Suspense, use } from 'react'

import clsx from 'clsx'
import { parseAsArrayOf, parseAsInteger, parseAsString, useQueryStates } from 'nuqs'

import { Accordions } from '@/vibes/soul/primitives/accordions'
import { Button } from '@/vibes/soul/primitives/button'

import { FilterRange } from './filter-range'
import { FilterRating } from './filter-rating'
import { FilterToggleGroup } from './filter-toggle-group'

interface ToggleGroupFilter {
  type: 'toggle-group'
  label: string
  paramName: string
  options: { label: string; value: string }[]
}

interface RangeFilter {
  type: 'range'
  label: string
  minParamName: string
  maxParamName: string
  min?: number
  max?: number
  minLabel?: string
  maxLabel?: string
  minPrepend?: React.ReactNode
  maxPrepend?: React.ReactNode
  minPlaceholder?: string
  maxPlaceholder?: string
}

interface RatingFilter {
  type: 'rating'
  label: string
  paramName: string
}

export type Filter = ToggleGroupFilter | RangeFilter | RatingFilter

interface Props {
  className?: string
  filters: Filter[] | Promise<Filter[]>
}

export function FiltersPanel({ className, filters }: Props) {
  return (
    <Suspense fallback={<FiltersSkeleton />}>
      <FiltersPanelInner className={className} filters={filters} />
    </Suspense>
  )
}

export function FiltersPanelInner({ className, filters }: Props) {
  const resolved = filters instanceof Promise ? use(filters) : filters
  const [params, setParams] = useQueryStates(
    resolved.reduce((acc, filter) => {
      switch (filter.type) {
        case 'range':
          return {
            ...acc,
            [filter.minParamName]: parseAsInteger,
            [filter.maxParamName]: parseAsInteger,
          }
        default:
          return { ...acc, [filter.paramName]: parseAsArrayOf(parseAsString) }
      }
    }, {})
  )
  // const paramCount = Object.values(params).reduce<number>((acc, param) => {
  //   if (Array.isArray(param)) return acc + param.length
  //   else if (param != null) return acc + 1
  //   else return acc
  // }, 0)

  return (
    <div className={clsx('w-full space-y-10', className)}>
      <Accordions
        accordions={resolved.map(filter => {
          switch (filter.type) {
            case 'toggle-group':
              return {
                defaultOpen: true,
                title: filter.label,
                content: (
                  <FilterToggleGroup paramName={filter.paramName} options={filter.options} />
                ),
              }
            case 'range':
              return {
                defaultOpen: true,
                title: filter.label,
                content: (
                  <FilterRange
                    min={filter.min}
                    max={filter.max}
                    minLabel={filter.minLabel}
                    maxLabel={filter.maxLabel}
                    minPrepend={filter.minPrepend}
                    maxPrepend={filter.maxPrepend}
                    minPlaceholder={filter.minPlaceholder}
                    maxPlaceholder={filter.maxPlaceholder}
                    minParamName={filter.minParamName}
                    maxParamName={filter.maxParamName}
                  />
                ),
              }
            case 'rating':
              return {
                defaultOpen: true,
                title: filter.label,
                content: <FilterRating paramName={filter.paramName} />,
              }
          }
        })}
      />
      <div className="flex justify-center">
        <Button
          variant="secondary"
          onClick={() => {
            setParams(null).catch(() => console.error('Failed to reset filters'))
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  )
}

export function FiltersSkeleton() {
  return <div>Skeleton!</div>
}
