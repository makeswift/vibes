'use client';

import { ButtonRadioGroup } from '../form/button-radio-group';
import { CardRadioGroup } from '../form/card-radio-group';
import { Checkbox } from '../form/checkbox';
import { DatePicker } from '../form/date-picker';
import { Input } from '../form/input';
import { NumberInput } from '../form/number-input';
import { RadioGroup } from '../form/radio-group';
import { Select } from '../form/select';
import { SwatchRadioGroup } from '../form/swatch-radio-group';
import { Textarea } from '../form/textarea';
import { ToggleGroup } from '../form/toggle-group';

export default function Preview() {
  return (
    <div className="m-auto mt-4 w-[500px] space-y-4 rounded-lg border border-contrast-100 bg-white p-4 shadow-lg">
      <ToggleGroup
        errors={['This is required']}
        label="Size"
        options={[
          { label: 'Small', value: 'sm' },
          { label: 'Medium', value: 'md' },
          { label: 'Large', value: 'lg', disabled: true },
        ]}
        type="multiple"
      />
      <Input id="first-name" label="First Name" required />
      <Textarea
        disabled
        errors={['This is required']}
        id="description"
        label="Description"
        name="description"
        required
      />
      <Checkbox id="consent" label="Consent" required />
      <DatePicker errors={['This is required']} required />
      <SwatchRadioGroup
        errors={['This is required']}
        label="Color"
        options={[
          { type: 'color', label: 'Blue', value: 'blue', color: 'blue' },
          { type: 'color', label: 'Red', value: 'red', color: 'red' },
          { type: 'color', label: 'Green', value: 'green', color: 'green', disabled: true },
          { type: 'color', label: 'Gray', value: 'gray', color: '#eee', disabled: true },
          {
            type: 'image',
            label: 'Gray',
            value: 'gray',
            image: { src: 'https://rstr.in/monogram/vibes/-kv08IvX08j', alt: '' },
          },
        ]}
        required
      />
      <NumberInput id="quantity" label="Quantity" />
      <RadioGroup
        label="Size"
        options={[
          { label: 'Small', value: 'sm' },
          { label: 'Medium', value: 'md' },
          { label: 'Large', value: 'lg', disabled: true },
        ]}
      />
      <RadioGroup
        errors={['This is required']}
        label="Size"
        options={[
          { label: 'Small', value: 'sm' },
          { label: 'Medium', value: 'md' },
          { label: 'Large', value: 'lg', disabled: true },
        ]}
      />
      <Select
        id="size"
        label="Size"
        name="size"
        options={[
          { label: 'Small', value: 'sm' },
          { label: 'Medium', value: 'md' },
          { label: 'Large', value: 'lg' },
        ]}
      />
      <ButtonRadioGroup
        options={[
          { label: 'Small', value: 'sm' },
          { label: 'Medium', value: 'md' },
          { label: 'Large', value: 'lg', disabled: true },
        ]}
      />
      <ButtonRadioGroup
        errors={['This is required']}
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
      <CardRadioGroup
        errors={['This is required']}
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
  );
}
