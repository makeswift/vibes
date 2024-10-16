import { Suspense, use } from 'react'

import { Sliders } from 'lucide-react'

import { Button } from '@/vibes/soul/primitives/button'
import { SidePanel } from '@/vibes/soul/primitives/side-panel'

import { FiltersPanel } from './filters-panel'

interface CheckboxGroupFilterOption {
  label: string
  value: string
}

interface CheckboxGroupFilter {
  type: 'checkbox-group'
  label: string
  name: string
  options: CheckboxGroupFilterOption[]
}

interface RangeFilter {
  type: 'range'
  label: string
  name: string
  min?: number
  max?: number
  minLabel?: string
  maxLabel?: string
}

interface RatingFilter {
  type: 'rating'
  label: string
  name: string
}

export type Filter = CheckboxGroupFilter | RangeFilter | RatingFilter

interface Props {
  filters: Filter[] | Promise<Filter[]>
  label?: string
}

export function Filters({ filters, label = 'Filter' }: Props) {
  return (
    <Suspense fallback={<FiltersSkeleton label={label} />}>
      <FiltersResolved filters={filters} label={label} />
    </Suspense>
  )
}

function FiltersResolved({ filters, label = 'Filter' }: Props) {
  const resolved = use(Promise.resolve(filters))

  return (
    <SidePanel
      title={label}
      trigger={
        <Button variant="secondary" size="small" asChild>
          <div className="flex gap-2">
            <span className="hidden @xl:block">{label}</span>
            <Sliders size={18} />
          </div>
        </Button>
      }
      content={<FiltersPanel filters={resolved} />}
    />
  )
}

export function FiltersSkeleton({ label = 'Filter' }: { label?: string }) {
  return (
    <Button variant="secondary" size="small" asChild disabled>
      <div className="flex gap-2">
        <span className="hidden @xl:block">{label}</span>
        <Sliders size={18} />
      </div>
    </Button>
  )
}
