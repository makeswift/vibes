'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Accordions } from '@/vibes/soul/components/accordions'
import { Button } from '@/vibes/soul/components/button'
import { SidePanelClose } from '@/vibes/soul/components/side-panel'

import { FilterCheckboxGroup } from './filter-checkbox-group'
import { FilterRange } from './filter-range'
import { FilterRating } from './filter-rating'
import { Filter } from './filters'

interface Props {
  filters: Filter[]
}

export function FiltersPanel({ filters }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const activeOptions = filters.flatMap(filter => searchParams.getAll(filter.name))

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-5">
        <h2 className="flex gap-2 text-xl font-medium @lg:text-2xl">
          Filters
          {activeOptions.length > 0 && (
            <span className="text-contrast-300">{activeOptions.length} applied</span>
          )}
        </h2>
        <SidePanelClose />
      </div>
      <Accordions
        className="mt-10"
        accordions={filters.map(filter => {
          switch (filter.type) {
            case 'checkbox-group':
              return {
                defaultOpen: true,
                title: filter.label,
                content: (
                  <FilterCheckboxGroup
                    key={filter.name}
                    name={filter.name}
                    options={filter.options}
                  />
                ),
              }
            case 'range':
              return {
                defaultOpen: true,
                title: filter.label,
                content: (
                  <FilterRange
                    name={filter.name}
                    min={filter.min}
                    max={filter.max}
                    minLabel={filter.minLabel}
                    maxLabel={filter.maxLabel}
                  />
                ),
              }
            case 'rating':
              return {
                defaultOpen: true,
                title: filter.label,
                content: <FilterRating name={filter.name} />,
              }
          }
        })}
      />
      <div className="mt-auto flex justify-center gap-2 pt-10">
        <Button
          variant="secondary"
          onClick={() => {
            console.log('clearing', { pathname })

            router.replace(pathname, { scroll: false })
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  )
}
