'use client'

import { Suspense, use } from 'react'

import clsx from 'clsx'
import { parseAsArrayOf, parseAsInteger, parseAsString, useQueryStates } from 'nuqs'

import { Accordion, Accordions } from '@/vibes/soul/primitives/accordions'
import { Button } from '@/vibes/soul/primitives/button'
import { Filter } from '@/vibes/soul/types'

import { FilterRange } from './filter-range'
import { FilterRating } from './filter-rating'
import { FilterToggleGroup } from './filter-toggle-group'

interface Props {
  className?: string
  filters: Filter[] | Promise<Filter[]>
}

function getParamCountLabel(params: Record<string, string | null | string[]>, key: string) {
  if (Array.isArray(params[key]) && params[key].length > 0) return `(${params[key].length})`
  else return ''
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
    }, {}),
    { shallow: false }
  )

  return (
    <div className={clsx('w-full space-y-5', className)}>
      <Accordions type="multiple" defaultValue={resolved.map((_, i) => i.toString())}>
        {resolved.map((filter, index) => {
          switch (filter.type) {
            case 'toggle-group':
              return (
                <Accordion
                  key={index}
                  title={`${filter.label}${getParamCountLabel(params, filter.paramName)}`}
                  value={index.toString()}
                >
                  <FilterToggleGroup paramName={filter.paramName} options={filter.options} />
                </Accordion>
              )
            case 'range':
              return (
                <Accordion key={index} title={filter.label} value={index.toString()}>
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
                </Accordion>
              )
            case 'rating':
              return (
                <Accordion key={index} title={filter.label} value={index.toString()}>
                  <FilterRating paramName={filter.paramName} />
                </Accordion>
              )
          }
        })}
      </Accordions>

      <Button
        variant="secondary"
        size="small"
        onClick={() => {
          setParams(null).catch(() => console.error('Failed to reset filters'))
        }}
      >
        Reset filters
      </Button>
    </div>
  )
}

export function FiltersSkeleton() {
  return <div>Skeleton!</div>
}
