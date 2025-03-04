'use client';

import { ButtonRadioGroup } from '@/vibes/soul/form/button-radio-group';

export default function Preview() {
  return (
    <div className="p-10">
      <ButtonRadioGroup
        label="Options"
        options={[
          { label: 'Option 1', value: 'option-1' },
          { label: 'Option 2', value: 'option-2' },
          { label: 'Option 3', value: 'option-3' },
        ]}
      />
    </div>
  );
}
