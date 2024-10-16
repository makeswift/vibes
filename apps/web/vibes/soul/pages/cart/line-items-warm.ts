import { unstable_cache } from 'next/cache'

import { CartLineItem } from '@/vibes/soul/sections/cart'

export let initialLineItems: CartLineItem[] = [
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

const lineItems = new Map(initialLineItems.map(lineItem => [lineItem.id, lineItem]))

export const getLineItems = unstable_cache(async () => Array.from(lineItems.values()), [], {
  tags: ['line-items-electric'],
  revalidate: false,
})

export async function getSubtotal(): Promise<string> {
  const cachedLineItems = await getLineItems()
  const subtotal = cachedLineItems
    .map(lineItem => parseInt(lineItem.price.replace('$', ''), 10) * lineItem.quantity)
    .reduce((acc, quantity) => acc + quantity, 0)
  return `$${subtotal}`
}

export async function removeLineItem(id: string): Promise<void> {
  lineItems.delete(id)
}

export async function updateLineItemQuantity(id: string, quantity: number): Promise<void> {
  const lineItemToUpdate = lineItems.get(id)
  if (lineItemToUpdate != null) {
    lineItems.set(id, { ...lineItemToUpdate, quantity })
  }
}
