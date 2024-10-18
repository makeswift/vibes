'use client'

import { Suspense, use } from 'react'

import clsx from 'clsx'
import { parseAsArrayOf, parseAsInteger, parseAsString, useQueryStates } from 'nuqs'

import { Accordion, Accordions } from '@/vibes/soul/primitives/accordions'
import { Button } from '@/vibes/soul/primitives/button'

import { FilterRange } from './filter-range'
import { FilterRating } from './filter-rating'
import { FilterToggleGroup } from './filter-toggle-group'

export interface ToggleGroupFilter {
  type: 'toggle-group'
  paramName: string
  label: string
  options: { label: string; value: string }[]
}

export interface RatingFilter {
  type: 'rating'
  paramName: string
  label: string
}

export interface RangeFilter {
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

export type Filter = ToggleGroupFilter | RangeFilter | RatingFilter

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
  return (
    <div className="absolute top-0 w-full animate-pulse">
      {/* First Accordion Header */}
      <div className="mt-5 flex justify-between gap-2">
        <div className="h-4 w-9 rounded-md bg-contrast-100" />
        <div className="h-4 w-4 rounded-md bg-contrast-100" />
      </div>
      {/* First Accordion Content*/}
      <div className="mt-4 flex flex-wrap gap-2">
        <div className="h-10 w-16 rounded-full bg-contrast-100" />
        <div className="h-10 w-20 rounded-full bg-contrast-100" />
        <div className="h-10 w-32 rounded-full bg-contrast-100" />
      </div>

      {/* Second Accordion Header */}
      <div className="mt-9 flex justify-between gap-2">
        <div className="h-4 w-9 rounded-md bg-contrast-100" />
        <div className="h-4 w-4 rounded-md bg-contrast-100" />
      </div>
      {/* Second Accordion Content */}
      <div className="mt-5 flex flex-wrap gap-2">
        <div className="h-10 w-16 rounded-full bg-contrast-100" />
        <div className="h-10 w-16 rounded-full bg-contrast-100" />
        <div className="h-10 w-16 rounded-full bg-contrast-100" />
      </div>

      {/* Third Accordion Header */}
      <div className="mt-9 flex justify-between gap-2">
        <div className="h-4 w-9 rounded-md bg-contrast-100" />
        <div className="h-4 w-4 rounded-md bg-contrast-100" />
      </div>
      {/* Third Accordion Content */}
      <div className="relative z-30 mt-5 flex items-center gap-2">
        <div className="h-12 w-[90px] rounded-lg bg-contrast-100" />
        <div className="h-12 w-[90px] rounded-lg bg-contrast-100" />
        <div className="h-10 w-10 rounded-full bg-contrast-100" />
      </div>

      {/* Fourth Accordion Header */}
      <div className="mt-9 flex justify-between gap-2">
        <div className="h-4 w-9 rounded-md bg-contrast-100" />
        <div className="h-4 w-4 rounded-md bg-contrast-100" />
      </div>
      {/* Fourth Accordion Content */}
      <div className="relative z-30 mt-5 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-contrast-100" />
          <div className="h-5 w-24 rounded-md bg-contrast-100" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-contrast-100" />
          <div className="h-5 w-24 rounded-md bg-contrast-100" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-contrast-100" />
          <div className="h-5 w-24 rounded-md bg-contrast-100" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-contrast-100" />
          <div className="h-5 w-24 rounded-md bg-contrast-100" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-contrast-100" />
          <div className="h-5 w-24 rounded-md bg-contrast-100" />
        </div>
      </div>
    </div>
  )
}
