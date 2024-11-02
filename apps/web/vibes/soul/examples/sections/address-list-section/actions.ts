import { SubmissionResult } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { randomUUID } from 'crypto'
import { z } from 'zod'

import { schema } from '@/vibes/soul/sections/address-list-section/schema'

type Address = z.infer<typeof schema>

export async function addressAction(
  prevState: Awaited<{
    addresses: Address[]
    lastResult: SubmissionResult | null
    defaultAddressId: string
  }>,
  formData: FormData
): Promise<{
  addresses: Address[]
  lastResult: SubmissionResult | null
  defaultAddressId: string
}> {
  'use server'

  const intent = formData.get('intent')
  const submission = parseWithZod(formData, { schema })

  if (submission.status !== 'success') {
    return {
      ...prevState,
      lastResult: submission.reply({ formErrors: ['Boom!'] }),
    }
  }

  await new Promise(resolve => setTimeout(resolve, 1000))

  switch (intent) {
    case 'create': {
      // await createAddress(submission.value) here

      return {
        addresses: [...prevState.addresses, { ...submission.value, id: randomUUID() }],
        lastResult: submission.reply({ resetForm: true }),
        defaultAddressId: prevState.defaultAddressId,
      }
    }
    case 'update': {
      // await updateAddress(submission.value) here

      return {
        addresses: prevState.addresses.map(address =>
          address.id === submission.value.id ? submission.value : address
        ),
        lastResult: submission.reply({ resetForm: true }),
        defaultAddressId: prevState.defaultAddressId,
      }
    }
    case 'delete': {
      // await deleteAddress(submission.value) here

      return {
        addresses: prevState.addresses.filter(address => address.id !== submission.value.id),
        lastResult: submission.reply({ resetForm: true }),
        defaultAddressId: prevState.defaultAddressId,
      }
    }
    case 'setDefault': {
      // await setDefaultAddress(submission.value) here

      return {
        addresses: prevState.addresses,
        lastResult: submission.reply({ resetForm: true }),
        defaultAddressId: submission.value.id,
      }
    }
    default: {
      return prevState
    }
  }
}
