'use client';

import { Alert } from '@/vibes/soul/primitives/alert';

export default function Preview() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 p-8">
      <Alert message="This is a success alert" variant="success" />
      <Alert message="This is a warning alert" variant="warning" />
      <Alert message="This is an error alert" variant="error" />
      <Alert message="This is an info alert" variant="info" />
    </div>
  );
}
