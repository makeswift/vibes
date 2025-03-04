'use client';

import { CardRadioGroup } from '@/vibes/soul/form/card-radio-group';

export default function Preview() {
  return (
    <div className="mx-auto max-w-2xl p-10">
      <CardRadioGroup
        label="Options"
        options={[
          {
            label: 'Philodendron Imperial Red',
            value: 'option-1',
            image: {
              src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
              alt: 'Philodendron Imperial Red',
            },
          },
          {
            label: 'Monstera',
            value: 'option-2',
            image: {
              src: 'https://rstr.in/monogram/vibes/n0P83RMnClS',
              alt: 'Monstera',
            },
          },
          {
            label: 'Pink Caladium',
            value: 'option-3',
            image: {
              src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
              alt: 'Pink Caladium',
            },
          },
        ]}
      />
    </div>
  );
}
