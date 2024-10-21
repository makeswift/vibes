'use client'

import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'

import { Brand, Vibe } from '@/vibes/schema'

type Context = {
  activeBrand?: Brand
  setActiveBrand: Dispatch<SetStateAction<Brand | undefined>>
  brands: Brand[]
}

const BrandContext = createContext<Context>({ setActiveBrand: () => {}, brands: [] })

interface Props {
  children: React.ReactNode
  vibeSlug: string
  vibes: Record<string, Vibe>
}

export function BrandProvider({ children, vibeSlug, vibes }: Props) {
  const vibe = Object.values(vibes).find(v => v.slug === vibeSlug)
  const brands = vibe?.brands ?? []
  const [activeBrand, setActiveBrand] = useState(brands[0])

  return (
    <BrandContext.Provider
      value={{
        brands,
        activeBrand,
        setActiveBrand,
      }}
    >
      {children}
    </BrandContext.Provider>
  )
}

export function useBrandContext() {
  return useContext(BrandContext)
}
