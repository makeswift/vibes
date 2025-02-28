'use client';

import { FormStatus } from '@/vibes/soul/form/form-status';

export default function Preview() {
  return (
    <div className="flex h-screen flex-col justify-center gap-4 p-10">
      <FormStatus>Login was successful</FormStatus>
      <FormStatus type="error">Could not login</FormStatus>
    </div>
  );
}
