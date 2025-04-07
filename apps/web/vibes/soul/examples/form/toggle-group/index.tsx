'use client';

import { ToggleGroup } from '@/vibes/soul/form/toggle-group';

export default function Preview() {
  return (
    <div className="p-10">
      <ToggleGroup
        label="Options"
        options={[
          { value: 'option-1', label: ' Option 1' },
          { value: 'option-2', label: ' Option 2' },
          { value: 'option-3', label: ' Option 3' },
        ]}
        type="multiple"
      />
    </div>
  );
}
