'use client'

import { Checkbox } from '../form/checkbox'
import { Input } from '../form/input'
import { Textarea } from '../form/textarea'
import { ToggleGroup } from '../form/toggle-group'

export default function Preview() {
  return (
    <div className="m-auto mt-4 w-[500px] space-y-4 rounded-lg border border-contrast-100 bg-white p-4 shadow-lg">
      <ToggleGroup
        type="multiple"
        label="Size"
        errors={['This is required']}
        options={[
          { label: 'Small', value: 'sm' },
          { label: 'Medium', value: 'md' },
          { label: 'Large', value: 'lg', disabled: true },
        ]}
      />
      <Input id="first-name" label="First Name" required />
      <Textarea
        id="description"
        label="Description"
        required
        disabled
        errors={['This is required']}
      />
      <Checkbox id="consent" label="Consent" required />
    </div>
  )
}
