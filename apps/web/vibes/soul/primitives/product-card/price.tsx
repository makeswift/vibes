import { clsx } from 'clsx'

export interface ProductCardSalePrice {
  type: 'sale'
  previousValue: string
  currentValue: string
}
export interface ProductCardPriceRange {
  type: 'range'
  minValue: string
  maxValue: string
}

export type ProductCardPrice = string | ProductCardPriceRange | ProductCardSalePrice

interface Props {
  price: ProductCardPrice
  className?: string
}

export function Price({ price, className }: Props) {
  if (typeof price === 'string') {
    return <span className={clsx('mt-2 block font-semibold', className)}>{price}</span>
  }

  switch (price.type) {
    case 'range':
      return (
        <span className={clsx('mt-2 block font-semibold', className)}>
          {price.minValue}–{price.maxValue}
        </span>
      )
    case 'sale':
      return (
        <span className={clsx('mt-2 block font-semibold', className)}>
          <span className="font-normal text-contrast-400 line-through">{price.previousValue}</span>{' '}
          <span className="text-error">{price.currentValue}</span>
        </span>
      )
    default:
      return null
  }
}
