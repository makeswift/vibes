'use server'

import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

import { removeProduct, updateProductQuantity } from '@/vibes/soul/pages/cart/products-warm'

// eslint-disable-next-line @typescript-eslint/require-await
export async function removeLineItemAction(id: string): Promise<void> {
  removeProduct(id)
  revalidateTag('products-warm')
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
  revalidateTag('products-warm')
}

export async function redirectToCheckoutAction() {
  redirect(`/checkout`)
}
