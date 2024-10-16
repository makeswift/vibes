import { Image } from './image'

export interface Product {
  id: string
  title: string
  href: string
  image?: Image
  price?: ProductPrice
  subtitle?: string
  badge?: string
  rating?: number
}

export interface ProductPriceRange {
  type: 'range'
  minValue: string
  maxValue: string
}

export type ProductPrice = string | ProductPriceRange | SalePrice

export interface SalePrice {
  type: 'sale'
  previousValue: string
  currentValue: string
}
