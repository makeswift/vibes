import { SubmissionResult } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { randomUUID } from 'crypto'
import { z } from 'zod'

import { addressSchema, idSchema } from '@/vibes/soul/sections/address-list-section/schema'

type Address = z.infer<typeof addressSchema>

export async function createAddressAction(
  prevState: Awaited<{ address: Address | null; lastResult: SubmissionResult | null }>,
  formData: FormData
): Promise<{ lastResult: SubmissionResult; address: Address | null }> {
  'use server'

  const submission = parseWithZod(formData, { schema: addressSchema })

  console.log('add', { submission })

  if (submission.status !== 'success') {
    return { lastResult: submission.reply(), address: prevState.address }
  }

  await new Promise(resolve => setTimeout(resolve, 1000))

  return {
    lastResult: submission.reply({ resetForm: true }),
    address: { ...submission.value, id: randomUUID() },
  }
}

export async function updateAddressAction(
  prevState: Awaited<{ address: Address; lastResult: SubmissionResult | null }>,
  formData: FormData
): Promise<{ lastResult: SubmissionResult; address: Address }> {
  'use server'

  const submission = parseWithZod(formData, { schema: addressSchema })

  console.log('update', { submission })

  if (submission.status !== 'success') {
    return { lastResult: submission.reply(), address: prevState.address }
  }

  await new Promise(resolve => setTimeout(resolve, 1000))

  // return { lastResult: submission.reply({ formErrors: ['Boom!'] }), address: prevState.address }

  return { lastResult: submission.reply({ resetForm: true }), address: submission.value }
}

export async function deleteAddressAction(
  prevState: Awaited<{ id: string; lastResult: SubmissionResult | null }>,
  formData: FormData
): Promise<{ lastResult: SubmissionResult; id: string }> {
  'use server'

  const submission = parseWithZod(formData, { schema: idSchema })

  console.log('delete', { submission })

  if (submission.status !== 'success') {
    return { lastResult: submission.reply(), id: prevState.id }
  }

  await new Promise(resolve => setTimeout(resolve, 1000))

  return { lastResult: submission.reply({ resetForm: true }), id: submission.value.id }
}

export async function setDefaultAddressAction(
  prevState: Awaited<{ id: string; lastResult: SubmissionResult | null }>,
  formData: FormData
): Promise<{ lastResult: SubmissionResult; id: string }> {
  'use server'

  const submission = parseWithZod(formData, { schema: idSchema })

  console.log('set default address', { submission })

  if (submission.status !== 'success') {
    return { lastResult: submission.reply(), id: prevState.id }
  }

  await new Promise(resolve => setTimeout(resolve, 1000))

  return { lastResult: submission.reply({ resetForm: true }), id: submission.value.id }
}
