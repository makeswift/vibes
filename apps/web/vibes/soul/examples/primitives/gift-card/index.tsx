'use client';

import { GiftCard } from '@/vibes/soul/primitives/gift-card';

export default function Preview() {
  return (
    <div className="flex h-screen items-center justify-center p-5">
      <GiftCard amount="$25.00" logo="Planted" />
    </div>
  );
}
