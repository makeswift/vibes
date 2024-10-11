'use server'

import { revalidateTag } from 'next/cache'

import { removeProduct } from './products'

// eslint-disable-next-line @typescript-eslint/require-await
export async function removeLineItemAction(id: string): Promise<void> {
  removeProduct(id)
  revalidateTag('products')
}

// eslint-disable-next-line @typescript-eslint/require-await
// export async function updateLineItemQuantityAction() {}
