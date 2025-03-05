'use client';

import { CheckboxGroup } from '@/vibes/soul/form/checkbox-group';
import { useState } from 'react';

export default function Preview() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <div className="p-10">
      <CheckboxGroup
        options={[
          { label: 'Option 1', value: 'option-1' },
          { label: 'Option 2', value: 'option-2' },
          { label: 'Option 3', value: 'option-3' },
        ]}
        label="Options"
        value={value}
        onValueChange={setValue}
      />
    </div>
  );
}
