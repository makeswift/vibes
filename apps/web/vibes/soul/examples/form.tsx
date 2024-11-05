'use client'

import { ButtonRadioGroup } from '../form/button-radio-group'
import { CardRadioGroup } from '../form/card-radio-group'
import { Checkbox } from '../form/checkbox'
import { DatePicker } from '../form/date-picker'
import { Input } from '../form/input'
import { RadioGroup } from '../form/radio-group'
import { SwatchRadioGroup } from '../form/swatch-radio-group'
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
      <DatePicker required errors={['This is required']} />
      <SwatchRadioGroup
        label="Color"
        required
        options={[
          { type: 'color', label: 'Blue', value: 'blue', color: 'blue' },
          { type: 'color', label: 'Red', value: 'red', color: 'red' },
          { type: 'color', label: 'Green', value: 'green', color: 'green', disabled: true },
          { type: 'color', label: 'Gray', value: 'gray', color: '#eee', disabled: true },
        ]}
      />
      <RadioGroup
        label="Size"
        options={[
          { label: 'Small', value: 'sm' },
          { label: 'Medium', value: 'md' },
          { label: 'Large', value: 'lg', disabled: true },
        ]}
      />
      <ButtonRadioGroup
        options={[
          { label: 'Small', value: 'sm' },
          { label: 'Medium', value: 'md' },
          { label: 'Large', value: 'lg', disabled: true },
        ]}
      />
      <CardRadioGroup
        options={[
          {
            label: 'Small',
            value: 'sm',
            image: {
              src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
              alt: 'Philodendron Imperial Red',
            },
          },
          {
            label: 'Medium',
            value: 'md',
            image: {
              src: 'https://rstr.in/monogram/vibes/n0P83RMnClS',
              alt: 'Monstera',
            },
          },
          {
            label: 'Large',
            value: 'lg',
            image: {
              src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
              alt: 'Pink Caladium',
            },
            disabled: true,
          },
        ]}
      />
    </div>
  )
}
