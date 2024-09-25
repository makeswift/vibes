'use client'

import { useState } from 'react'

import { Button } from '@/vibes/soul/components/button'
import { Checkbox } from '@/vibes/soul/components/checkbox'
import { Dropdown } from '@/vibes/soul/components/dropdown'
import { Input } from '@/vibes/soul/components/input'

export const ShippingForm = function ShippingForm() {
  const [useSameAddress, setUseSameAddress] = useState(true)
  return (
    <form className="grid w-full grid-cols-1 gap-5 @sm:grid-cols-2">
      <Input type="text" label="First Name" required />
      <Input type="text" label="Last Name" required />
      <Input type="text" label="Company Name" />
      {/* TODO: Phone number input */}
      <Input type="text" label="Phone Number" />
      <Input type="text" label="Address" required />
      <Input type="text" label="Apartment/Suite/Building" />
      <Input type="text" label="City" required />

      <Dropdown label="Country" labelOnTop items={['USA', 'England', 'Brazil']} required />
      <Dropdown
        label="State/Provence"
        labelOnTop
        items={['Alabama', 'California', 'Georgia', 'Florida', 'Texas']}
        required
      />
      <Input type="text" label="ZIP/Postcode" required />

      <Checkbox
        className="@sm:col-span-2"
        checked={useSameAddress}
        setChecked={setUseSameAddress}
        label="My billing address is the same as my shipping address."
      />

      {/* TODO: disbale until form is complete */}
      <Button variant="secondary" className="ml-auto @sm:col-span-2">
        Continue
      </Button>
    </form>
  )
}
