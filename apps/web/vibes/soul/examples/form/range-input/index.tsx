'use client';

import { RangeInput } from '@/vibes/soul/form/range-input';

export default function Preview() {
  return (
    <div className="p-10">
      <div className="mx-auto max-w-3xl">
        <RangeInput max={100} min={0} />
      </div>
    </div>
  );
}
