'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Button } from '../ui/button'
import { useBrand } from './useBrand'

export function BrandSelect() {
  const { brands, activeBrand, setActiveBrand } = useBrand()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">{activeBrand?.name ?? 'Pick Brand'}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={2}>
        {brands.map(brand => (
          <DropdownMenuItem onClick={() => setActiveBrand(brand)}>{brand.name}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
