import { unstable_cache } from 'next/cache'

import { CartLineItem } from '@/vibes/soul/sections/cart'

const initialLineItems: CartLineItem[] = [
  {
    id: '1',
    title: 'Philodendron Imperial Red',
    subtitle: 'Indoor Plant',
    price: '$46',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      alt: 'Philodendron Imperial Red',
    },
    quantity: 1,
  },
  {
    id: '2',
    title: 'Caladium',
    subtitle: 'Indoor / Outdoor Plant',
    price: '$24',
    image: {
      src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
      alt: 'Caladium',
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
