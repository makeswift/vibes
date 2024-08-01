import { PriceCompare, PriceRange, PriceStatic } from '.'

export default function Price({ price }: { price: PriceRange | PriceCompare | PriceStatic }) {
  // TOOD: format price values

  switch (price.type) {
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
  }
}
