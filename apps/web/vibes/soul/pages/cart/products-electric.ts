import { unstable_cache } from 'next/cache'

import { CartLineItem } from '@/vibes/soul/sections/cart'

const initialProducts: CartLineItem[] = [
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

const products = new Map(initialProducts.map(product => [product.id, product]))

export const getProducts = unstable_cache(async () => Array.from(products.values()), [], {
  tags: ['products-electric'],
  revalidate: false,
})

export async function getSubtotal(): Promise<string> {
  const cachedProducts = await getProducts()
  const subtotal = cachedProducts
    .map(product => parseInt(product.price.replace('$', ''), 10) * product.quantity)
    .reduce((acc, quantity) => acc + quantity, 0)

  return `$${subtotal}`
}

export async function removeProduct(id: string): Promise<void> {
  products.delete(id)
}

export async function updateProductQuantity(id: string, quantity: number): Promise<void> {
  const productToUpdate = products.get(id)

  if (productToUpdate != null) {
    products.set(id, { ...productToUpdate, quantity })
  }
}
