import { unstable_cache } from 'next/cache'

import { CartLineItem } from '@/vibes/soul/sections/cart'

const Electric: CartLineItem[] = [
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

const Luxury: CartLineItem[] = [
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

const Warm: CartLineItem[] = [
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

const lineItems = {
  Electric: new Map(Electric.map(item => [item.id, item])),
  Warm: new Map(Warm.map(item => [item.id, item])),
  Luxury: new Map(Luxury.map(item => [item.id, item])),
}

export const getLineItems = unstable_cache(
  async (brand: 'Electric' | 'Warm' | 'Luxury') => Array.from(lineItems[brand].values()),
  [],
  {
    tags: ['line-items-electric'],
    revalidate: false,
  }
)

export async function getSubtotal(brand: 'Electric' | 'Warm' | 'Luxury'): Promise<string> {
  const cachedLineItems = await getLineItems(brand)
  const subtotal = cachedLineItems
    .map(lineItem => parseInt(lineItem.price.replace('$', ''), 10) * lineItem.quantity)
    .reduce((acc, quantity) => acc + quantity, 0)
  return `$${subtotal}`
}
