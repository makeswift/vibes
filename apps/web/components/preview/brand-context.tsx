'use client'

import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'

import { Brand } from '@/vibes/schema'

interface Context {
  activeBrand?: Brand
  setActiveBrand: Dispatch<SetStateAction<Brand>>
  brands: Brand[]
}

const BrandContext = createContext<Context>({ setActiveBrand: () => void 0, brands: [] })

interface Props {
  children: React.ReactNode
  brands: Brand[]
}

export function BrandProvider({ children, brands }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [activeBrand, setActiveBrand] = useState(brands[0]!)

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
