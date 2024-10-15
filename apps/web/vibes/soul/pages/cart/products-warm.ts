import { unstable_cache } from 'next/cache'

import { CartLineItem } from '@/vibes/soul/sections/cart'

export let productsWarm: CartLineItem[] = [
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
export const getProducts = unstable_cache(async () => productsWarm, ['products-warm'])

export const getSubtotal = () => {
  return `$${productsWarm.reduce((acc, product) => {
    return acc + Number(product.price.replace('$', '')) * product.quantity
  }, 0)}`
}

export function removeProduct(id: string) {
  productsWarm = productsWarm.filter(product => product.id !== id)
}

export function updateProductQuantity(id: string, quantity: number) {
  const productToUpdate = productsWarm.find(product => product.id === id)
  if (productToUpdate) {
    productToUpdate.quantity = quantity
  }
}
