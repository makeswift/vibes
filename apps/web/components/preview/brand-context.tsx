'use client'

import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'

import { Brand } from '@/vibes/schema'
import { getVibe } from '@/vibes/utils'

type Context = {
  activeBrand?: Brand
  setActiveBrand: Dispatch<SetStateAction<Brand | undefined>>
  brands: Brand[]
}

const BrandContext = createContext<Context>({ setActiveBrand: () => {}, brands: [] })

interface Props {
  children: React.ReactNode
  vibeSlug: string
}

export function BrandProvider({ children, vibeSlug }: Props) {
  const vibe = getVibe(vibeSlug)
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
