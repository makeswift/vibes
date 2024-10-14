'use server'

import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

import {
  removeProduct,
  updateProductQuantity,
} from '@/vibes/soul/components/page-cart/products-luxury'

// eslint-disable-next-line @typescript-eslint/require-await
export async function removeLineItemAction(id: string): Promise<void> {
  removeProduct(id)
  revalidateTag('products-luxury')
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
  revalidateTag('products-luxury')
}

export async function redirectToCheckoutAction() {
  redirect(`/checkout`)
}
