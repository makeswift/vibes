export type RangePrice = {
  type: 'range'
  min: number
  max: number
}

export type ComparePrice = {
  type: 'compare'
  prev: number
  current: number
}

export type StaticPrice = {
  type: 'static'
  value: number
}

export type Price = RangePrice | ComparePrice | StaticPrice | undefined

export default function Price({ price }: { price: Price }) {
  switch (price?.type) {
    case 'range':
      return (
        <span className="text-sm font-semibold @4xl:text-xl @4xl:font-medium">
          ${price.min} - ${price.max}
        </span>
      )
    case 'compare':
      return (
        <span className="text-sm font-semibold @4xl:text-xl @4xl:font-medium">
          <span className="font-normal text-contrast-400 line-through @4xl:text-lg">
            ${price.prev}
          </span>{' '}
          ${price.current}
        </span>
      )
    case 'static':
      return (
        <span className="text-sm font-semibold @4xl:text-xl @4xl:font-medium">${price.value}</span>
      )
    default:
      return null
  }
}
