'use client'

import { useActionState, useEffect } from 'react'

export type Address = {
  name?: string
  street1: string
  street2?: string
  city: string
  state: string
  zipcode?: string
  country?: string
}

type Action<State, Payload> = (state: Awaited<State>, payload: Payload) => State | Promise<State>

useActionState

type Props = {
  addresses: Address[]
  updateAddressAction: Action<{ error: string | null }, Address>
  deleteAddressAction: Action<{ error: string | null }, Address>
  addAddressAction: Action<{ error: string | null }, Address>
  setDefaultAddressAction: Action<{ error: string | null }, Address>
}

export function AddressListSection({
  addresses,
  updateAddressAction,
  deleteAddressAction,
  addAddressAction,
  setDefaultAddressAction,
}: Props) {
  const [{ error }, formAction, isPending] = useActionState(updateAddressAction, { error: null })

  useEffect(() => {
    if (error) console.error(error)
  }, [error])

  return <div></div>
}
