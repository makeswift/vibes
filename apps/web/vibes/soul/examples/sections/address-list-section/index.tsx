import { Address, AddressListSection } from '@/vibes/soul/sections/address-list-section'

async function addAddressAction(state: Awaited<{ error: string | null }>, payload: Address) {
  'use server'

  console.log({ state, payload })

  return { error: null }
}

async function updateAddressAction(state: Awaited<{ error: string | null }>, payload: Address) {
  'use server'

  console.log({ state, payload })

  return { error: null }
}

async function deleteAddressAction(state: Awaited<{ error: string | null }>, payload: Address) {
  'use server'

  console.log({ state, payload })

  return { error: null }
}

async function setDefaultAddressAction(state: Awaited<{ error: string | null }>, payload: Address) {
  'use server'

  console.log({ state, payload })

  return { error: null }
}

const addresses: Address[] = [
  {
    name: 'Home',
    street1: '123 Main St',
    city: 'San Francisco',
    state: 'CA',
    zipcode: '94105',
    country: 'United States',
  },
  {
    name: 'Office',
    street1: '456 Main St',
    city: 'San Francisco',
    state: 'CA',
    zipcode: '94105',
    country: 'United States',
  },
]

export default function Preview() {
  return (
    <AddressListSection
      addresses={addresses}
      addAddressAction={addAddressAction}
      deleteAddressAction={deleteAddressAction}
      updateAddressAction={updateAddressAction}
      setDefaultAddressAction={setDefaultAddressAction}
    />
  )
}
