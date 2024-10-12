'use server'

import { revalidateTag } from 'next/cache'

import {
  removeProduct,
  updateProductQuantity,
} from '@/vibes/soul/components/page-cart/products-warm'

// eslint-disable-next-line @typescript-eslint/require-await
export async function removeLineItemAction(id: string): Promise<void> {
  removeProduct(id)
  revalidateTag('products')
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function updateLineItemQuantityAction({
  id,
  quantity,
}: {
  id: string
  quantity: number
}): Promise<void> {
  updateProductQuantity(id, quantity)
  revalidateTag('products')
}
