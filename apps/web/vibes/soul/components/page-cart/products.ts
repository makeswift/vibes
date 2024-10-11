import { unstable_cache } from 'next/cache'

import { CartLineItem } from '../cart'

let products: CartLineItem[] = [
  {
    id: '1',
    title: 'Philodendron Imperial Red',
    subtitle: 'Indoor Plant',
    price: '$46',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      altText: 'Philodendron Imperial Red',
    },
    // href: '#',
    quantity: 1,
  },
  {
    id: '2',
    title: 'Caladium',
    subtitle: 'Indoor / Outdoor Plant',
    price: '$24',
    image: {
      src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
      altText: 'Caladium',
    },
    // href: '#',
    quantity: 2,
  },
]

// eslint-disable-next-line @typescript-eslint/require-await
export const getProducts = unstable_cache(async () => products, ['products'])

export function removeProduct(id: string) {
  products = products.filter(product => product.id !== id)
}
