'use client';

import { DatePicker } from '@/vibes/soul/form/date-picker';

export default function Preview() {
  return (
    <div className="mx-auto max-w-md p-10">
      <DatePicker label="Birthday" />
    </div>
  );
}
