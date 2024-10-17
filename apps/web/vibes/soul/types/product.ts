import { Image } from './image'

export interface ProductCardProduct {
  id: string
  title: string
  href: string
  image?: Image
  price?: ProductCardPrice
  subtitle?: string
  badge?: string
  rating?: number
}

export interface ProductCardPriceRange {
  type: 'range'
  minValue: string
  maxValue: string
}

export type ProductCardPrice = string | ProductCardPriceRange | ProductCardSalePrice

export interface ProductCardSalePrice {
  type: 'sale'
  previousValue: string
  currentValue: string
}
