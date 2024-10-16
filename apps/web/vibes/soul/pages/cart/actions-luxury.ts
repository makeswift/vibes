'use server'

import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

import { removeLineItem, updateLineItemQuantity } from '@/vibes/soul/pages/cart/line-items-luxury'

// eslint-disable-next-line @typescript-eslint/require-await
export async function removeLineItemAction(id: string): Promise<void> {
  removeLineItem(id)
  revalidateTag('line-items-luxury')
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function updateLineItemQuantityAction({
  id,
  quantity,
}: {
  id: string
  quantity: number
}): Promise<void> {
  updateLineItemQuantity(id, quantity)
  revalidateTag('line-items-luxury')
}

export async function redirectToCheckoutAction() {
  redirect(`/checkout`)
}
