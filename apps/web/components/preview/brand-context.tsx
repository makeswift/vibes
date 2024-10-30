'use client'

import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'

import { Brand, Vibe } from '@/vibes/schema'

interface Context {
  activeBrand?: Brand
  setActiveBrand: Dispatch<SetStateAction<Brand>>
  brands: Brand[]
}

const BrandContext = createContext<Context>({ setActiveBrand: () => {}, brands: [] })

interface Props {
  children: React.ReactNode
  brands: Brand[]
}

export function BrandProvider({ children, brands }: Props) {
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
