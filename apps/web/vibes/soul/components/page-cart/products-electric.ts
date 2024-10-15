import { unstable_cache } from 'next/cache'

import { CartLineItem } from '@/vibes/soul/components/cart'

let productsElectric: CartLineItem[] = [
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

// eslint-disable-next-line @typescript-eslint/require-await
export const getProducts = unstable_cache(async () => productsElectric, ['products-electric'])

export const getSubtotal = () => {
  return `$${productsElectric.reduce((acc, product) => {
    return acc + Number(product.price.replace('$', '')) * product.quantity
  }, 0)}`
}

export function removeProduct(id: string) {
  productsElectric = productsElectric.filter(product => product.id !== id)
}

export function updateProductQuantity(id: string, quantity: number) {
  const productToUpdate = productsElectric.find(product => product.id === id)
  if (productToUpdate) {
    productToUpdate.quantity = quantity
  }
}
