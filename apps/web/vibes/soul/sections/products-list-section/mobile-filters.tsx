import { Sliders } from 'lucide-react'

import { Button } from '@/vibes/soul/primitives/button'
import * as SidePanel from '@/vibes/soul/primitives/side-panel'
import { Filter } from '@/vibes/soul/types'

import { FiltersPanel } from './filters-panel'

interface Props {
  filters: Filter[] | Promise<Filter[]>
  label?: string
}

export function MobileFilters({ filters, label = 'Filters' }: Props) {
  return (
    <SidePanel.Root>
      <SidePanel.Trigger asChild>
        <Button variant="secondary" size="small">
          <div className="flex gap-2">
            <span className="hidden @xl:block">{label}</span>
            <Sliders size={16} />
          </div>
        </Button>
      </SidePanel.Trigger>
      <SidePanel.Content title={label}>
        <FiltersPanel filters={filters} />
      </SidePanel.Content>
    </SidePanel.Root>
  )
}
