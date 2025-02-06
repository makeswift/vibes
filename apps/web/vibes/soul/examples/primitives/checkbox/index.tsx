'use client';

import { useState } from 'react';

import { Checkbox } from '@/vibes/soul/primitives/checkbox';

export default function Preview() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex h-screen flex-col justify-center gap-4 p-10">
      <Checkbox checked={checked} htmlFor="example-1" label="Checkbox" setChecked={setChecked} />
      <Checkbox
        checked={checked}
        error="You must accept the Terms & Conditions"
        htmlFor="example-2"
        label="Accept Terms & Conditions"
        setChecked={setChecked}
      />
    </div>
  );
}
