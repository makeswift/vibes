import { Sliders } from 'lucide-react'

import { Filter, FiltersPanel } from './filters-panel'
import { Button } from '@/vibes/soul/primitives/button'
import * as SidePanel from '@/vibes/soul/primitives/side-panel'


interface Props {
  filters: Filter[] | Promise<Filter[]>
  label?: string
}

export function MobileFilters({ filters, label = 'Filters' }: Props) {
  return (
    <SidePanel.Root>
      <SidePanel.Trigger asChild>
        <Button variant="secondary" size="medium">
          {label}
          <span className="hidden @xl:block">
            <Sliders size={20} />
          </span>
        </Button>
      </SidePanel.Trigger>
      <SidePanel.Content title={label}>
        <FiltersPanel filters={filters} />
      </SidePanel.Content>
    </SidePanel.Root>
  )
}
