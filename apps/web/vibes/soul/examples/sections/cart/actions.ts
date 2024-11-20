import { SubmissionResult } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'

import { cartLineItemActionFormDataSchema } from '@/vibes/soul/sections/cart/schema'

interface CartLineItem {
  id: string
  image: { src: string; alt: string }
  title: string
  subtitle: string
  quantity: number
  price: string
}

export async function lineItemAction(
  prevState: Awaited<{
    lineItems: CartLineItem[]
    lastResult: SubmissionResult | null
  }>,
  formData: FormData
): Promise<{
  lineItems: CartLineItem[]
  lastResult: SubmissionResult | null
}> {
  'use server'

  const submission = parseWithZod(formData, { schema: cartLineItemActionFormDataSchema })

  if (submission.status !== 'success') {
    return {
      ...prevState,
      lastResult: submission.reply({ formErrors: ['Boom!'] }),
    }
  }

  // Simulate a network request
  await new Promise(resolve => setTimeout(resolve, 1000))

  switch (submission.value.intent) {
    case 'increment': {
      // const item = await incrementLineItem(submission.value)
      const item = submission.value

      return {
        lineItems: prevState.lineItems.map(lineItem =>
          lineItem.id === item.id ? { ...lineItem, quantity: lineItem.quantity + 1 } : lineItem
        ),
        lastResult: submission.reply({ resetForm: true }),
      }
    }
    case 'decrement': {
      // const item = await decrementLineItem(submission.value)
      const item = submission.value

      return {
        lineItems: prevState.lineItems.map(lineItem =>
          lineItem.id === item.id ? { ...lineItem, quantity: lineItem.quantity - 1 } : lineItem
        ),
        lastResult: submission.reply({ resetForm: true }),
      }
    }
    case 'delete': {
      // const deletedItem = await deleteLineItem(submission.value)
      const deletedItem = submission.value

      return {
        lineItems: prevState.lineItems.filter(item => item.id !== deletedItem.id),
        lastResult: submission.reply({ resetForm: true }),
      }
    }
    default: {
      return prevState
    }
  }
}

export async function checkoutAction(
  prevState: Awaited<SubmissionResult | null>
): Promise<SubmissionResult | null> {
  'use server'

  // Simulate a network request
  await new Promise(resolve => setTimeout(resolve, 1000))

  // const cartId = await cookie.get('cartId')
  // return redirect('/checkout')

  return prevState
}
