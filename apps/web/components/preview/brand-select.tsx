'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown12 } from '@/icons/generated'

import { Button } from '../ui/button'
import { useBrandContext } from './brand-context'

export function BrandSelect() {
  const { brands, activeBrand, setActiveBrand } = useBrandContext()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="small">
          {activeBrand?.name ?? 'Pick a style'}
          <ChevronDown12 />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={2}>
        {brands.map(brand => (
          <DropdownMenuItem key={brand.name} onClick={() => setActiveBrand(brand)}>
            {brand.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
