'use client'

import { ComponentPropsWithoutRef } from 'react'

import { getCssVars } from '@/lib/registry'

import Card from '../ui/card'
import { BrandSelect } from './brand-select'
import { useBrand } from './useBrand'

interface Props extends ComponentPropsWithoutRef<typeof Card> {}

export function Frame({ children }: Props) {
  const { activeBrand } = useBrand()
  const style = activeBrand ? getCssVars(activeBrand) : {}

  return (
    <div className="relative">
      <div className="absolute bottom-full flex w-full justify-end">
        <BrandSelect />
      </div>
      <Card style={style}>{children}</Card>
    </div>
  )
}
