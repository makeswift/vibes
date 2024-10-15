'use server'

import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

import { removeProduct, updateProductQuantity } from '@/vibes/soul/pages/cart/products-electric'

export async function removeLineItemAction(
  state: { error: string | null },
  id: string
): Promise<{ error: string | null }> {
  await removeProduct(id)

  revalidateTag('products-electric')

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
    await updateProductQuantity(id, quantity)
  }

  revalidateTag('products-electric')

  return { error: null }
}

export async function redirectToCheckoutAction(): Promise<{ error: string | null }> {
  redirect('/')
}
