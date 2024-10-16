import { unstable_cache } from 'next/cache'

import { CartLineItem } from '@/vibes/soul/sections/cart'

export let lineItemsWarm: CartLineItem[] = [
  {
    id: '1',
    title: 'Rolltop Saddlebag',
    subtitle: 'Orange',
    price: '$50',
    image: {
      src: 'https://rstr.in/monogram/vibes/4Mo9ulLGcbL/DfL7Hp4ix9B',
      alt: 'Rolltop Saddlebag',
    },
    quantity: 1,
  },
  {
    id: '2',
    title: 'Mini Bar Bag',
    subtitle: 'Camo',
    price: '$60',
    image: {
      src: 'https://rstr.in/monogram/vibes/JFeKAqWOECR',
      alt: 'Mini Bar Bag',
    },
    quantity: 2,
  },
]

// eslint-disable-next-line @typescript-eslint/require-await
export const getLineItems = unstable_cache(async () => lineItemsWarm, ['line-items-warm'])

export const getSubtotal = () => {
  return `$${lineItemsWarm.reduce((acc, lineItem) => {
    return acc + Number(lineItem.price.replace('$', '')) * lineItem.quantity
  }, 0)}`
}

export function removeLineItem(id: string) {
  lineItemsWarm = lineItemsWarm.filter(lineItem => lineItem.id !== id)
}

export function updateLineItemQuantity(id: string, quantity: number) {
  const lineItemsToUpdate = lineItemsWarm.find(lineItem => lineItem.id === id)
  if (lineItemsToUpdate) {
    lineItemsToUpdate.quantity = quantity
  }
}
