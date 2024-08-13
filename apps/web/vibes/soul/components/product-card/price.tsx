import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

export type ProductPrice =
  | string
  | {
      type: 'sale'
      currentValue: string
      previousValue: string
    }
  | {
      type: 'range'
      minValue: string
      maxValue: string
    }

export default function Price({
  price,
  className = '',
}: { price: ProductPrice; className?: string } & ComponentPropsWithoutRef<'span'>) {
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
          <span className="font-normal text-contrast-400 line-through @4xl:text-lg">
            {price.previousValue}
          </span>{' '}
          {price.currentValue}
        </span>
      )
    default:
      return null
  }
}
