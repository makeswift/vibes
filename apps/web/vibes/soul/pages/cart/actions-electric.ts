'use server'

import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

import { removeLineItem, updateLineItemQuantity } from '@/vibes/soul/pages/cart/line-items-electric'

export async function removeLineItemAction(
  state: { error: string | null },
  id: string
): Promise<{ error: string | null }> {
  await removeLineItem(id)
  revalidateTag('line-items-electric')
  return { error: null }
}

export async function updateLineItemQuantityAction(
  state: { error: string | null },
  {
    id,
    quantity,
  }: {
    id: string
    quantity: number
  }
): Promise<{ error: string | null }> {
  if (quantity > 0) {
    await updateLineItemQuantity(id, quantity)
  }
  revalidateTag('line-items-electric')
  return { error: null }
}

export async function redirectToCheckoutAction(): Promise<{ error: string | null }> {
  redirect('/')
}
