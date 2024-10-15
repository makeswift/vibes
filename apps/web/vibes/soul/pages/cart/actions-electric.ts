'use server'

import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

import { removeProduct, updateProductQuantity } from '@/vibes/soul/pages/cart/products-electric'

// eslint-disable-next-line @typescript-eslint/require-await
export async function removeLineItemAction(id: string): Promise<void> {
  removeProduct(id)
  revalidateTag('products-electric')
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function updateLineItemQuantityAction({
  id,
  quantity,
}: {
  id: string
  quantity: number
}): Promise<void> {
  if (quantity === 0) {
    removeLineItemAction(id)
  }
  updateProductQuantity(id, quantity)
  revalidateTag('products-electric')
}

export async function redirectToCheckoutAction() {
  redirect(`/checkout`)
}
