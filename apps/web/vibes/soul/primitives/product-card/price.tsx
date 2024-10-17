import { clsx } from 'clsx'

import { ProductCardPrice } from '@/vibes/soul/types'

interface Props {
  price: ProductCardPrice
  className?: string
}

export function Price({ price, className }: Props) {
  if (typeof price === 'string') {
    return (
      <span className={clsx('text-sm font-semibold @4xl:text-xl @4xl:font-medium', className)}>
        {price}
      </span>
    )
  }

  switch (price.type) {
    case 'range':
      return (
        <span className={clsx('text-sm font-semibold @4xl:text-xl @4xl:font-medium', className)}>
          {price.minValue} - {price.maxValue}
        </span>
      )
    case 'sale':
      return (
        <span className={clsx('text-sm font-semibold @4xl:text-xl @4xl:font-medium', className)}>
          <span className="font-normal text-contrast-400 line-through">{price.previousValue}</span>{' '}
          {price.currentValue}
        </span>
      )
    default:
      return null
  }
}
