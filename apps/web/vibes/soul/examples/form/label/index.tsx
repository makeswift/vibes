'use client';

import * as React from 'react';

import { Label } from '@/vibes/soul/form/label';

export default function Preview() {
  const id = React.useId();

  return (
    <div className="p-10">
      <Label htmlFor={id}>First name</Label>
    </div>
  );
}
