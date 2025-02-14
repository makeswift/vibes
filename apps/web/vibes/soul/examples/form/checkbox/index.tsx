'use client';

import { Checkbox } from '@/vibes/soul/form/checkbox';

export default function Preview() {
  return (
    <div className="flex h-screen flex-col justify-center gap-4 p-10">
      <Checkbox label="Checkbox" />
      <Checkbox
        errors={['You must accept the Terms & Conditions']}
        label="Accept Terms & Conditions"
      />
    </div>
  );
}
