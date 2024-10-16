import { unstable_cache } from 'next/cache'

import { CartLineItem } from '@/vibes/soul/sections/cart'

export let linItemsLuxury: CartLineItem[] = [
  {
    id: '1',
    title: 'DARYA LUG SOLE FISHERMAN',
    subtitle: 'Cuoro Embossed Snake',
    price: '$350',
    image: {
      src: 'https://rstr.in/monogram/vibes/18bzcr01WWx',
      alt: 'DARYA LUG SOLE FISHERMAN',
    },
    quantity: 1,
  },
  {
    id: '2',
    title: 'ROMA ROUND TOE BALLET FLAT',
    subtitle: 'Rust Closed Woven Calf',
    price: '$350',
    image: {
      src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz',
      alt: 'ROMA ROUND TOE BALLET FLAT',
    },
    quantity: 2,
  },
]

// eslint-disable-next-line @typescript-eslint/require-await
export const getLineItems = unstable_cache(async () => linItemsLuxury, ['line-items-luxury'])

export const getSubtotal = () => {
  return `$${linItemsLuxury.reduce((acc, lineItem) => {
    return acc + Number(lineItem.price.replace('$', '')) * lineItem.quantity
  }, 0)}`
}

export function removeLineItem(id: string) {
  linItemsLuxury = linItemsLuxury.filter(lineItem => lineItem.id !== id)
}

export function updateLineItemQuantity(id: string, quantity: number) {
  const lineItemToUpdate = linItemsLuxury.find(lineItem => lineItem.id === id)
  if (lineItemToUpdate) {
    lineItemToUpdate.quantity = quantity
  }
}
