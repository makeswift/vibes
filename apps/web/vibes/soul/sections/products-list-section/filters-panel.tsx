'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Accordions } from '@/vibes/soul/components/accordions'
import { Button } from '@/vibes/soul/components/button'
import { Input } from '@/vibes/soul/components/input'
import { SidePanelClose } from '@/vibes/soul/components/side-panel'

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
    <div>
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
        defaultValue={['1', '2', '3']}
        accordions={filters.map(filter => {
          switch (filter.type) {
            case 'checkbox-group':
              return {
                title: filter.label,
                content: <div>Checkbox Group!</div>,
              }
            case 'range':
              return {
                title: filter.label,
                content: <div>Range!</div>,
              }
            case 'rating':
              return {
                title: filter.label,
                content: <div>Rating!</div>,
              }
          }
        })}
      />
      <div className="mt-auto flex justify-center gap-2 pt-10">
        <Button variant="tertiary" onClick={() => router.push(pathname, { scroll: false })}>
          Reset
        </Button>
      </div>
    </div>
  )
}
