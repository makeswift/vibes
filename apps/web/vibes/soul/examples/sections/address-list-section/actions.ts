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

  // Simulate a network request
  await new Promise(resolve => setTimeout(resolve, 1000))

  switch (intent) {
    case 'create': {
      // const newAddress = await createAddress(submission.value)
      const newAddress = { ...submission.value, id: randomUUID() }

      return {
        addresses: [...prevState.addresses, newAddress],
        lastResult: submission.reply({ resetForm: true }),
        defaultAddressId: prevState.defaultAddressId,
      }
    }
    case 'update': {
      // const newAddress = await updateAddress(submission.value)
      const newAddress = submission.value

      return {
        addresses: prevState.addresses.map(address =>
          address.id === newAddress.id ? newAddress : address
        ),
        lastResult: submission.reply({ resetForm: true }),
        defaultAddressId: prevState.defaultAddressId,
      }
    }
    case 'delete': {
      // const deletedAddress = await deleteAddress(submission.value)
      const deletedAddress = submission.value

      return {
        addresses: prevState.addresses.filter(address => address.id !== deletedAddress.id),
        lastResult: submission.reply({ resetForm: true }),
        defaultAddressId: prevState.defaultAddressId,
      }
    }
    case 'setDefault': {
      // const defaultAddress = await setDefaultAddress(submission.value)
      const defaultAddress = submission.value

      return {
        addresses: prevState.addresses,
        lastResult: submission.reply({ resetForm: true }),
        defaultAddressId: defaultAddress.id,
      }
    }
    default: {
      return prevState
    }
  }
}
