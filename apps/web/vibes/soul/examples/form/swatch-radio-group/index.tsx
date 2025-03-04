'use client';

import { SwatchRadioGroup } from '@/vibes/soul/form/swatch-radio-group';

export default function Preview() {
  return (
    <div className="flex h-screen items-center justify-center p-10">
      <SwatchRadioGroup
        options={[
          { type: 'color', label: 'Option 1', value: 'option-1', color: 'red' },
          { type: 'color', label: 'Option 2', value: 'option-2', color: 'green' },
          { type: 'color', label: 'Option 3', value: 'option-3', color: 'blue' },
        ]}
      />
    </div>
  );
}
