'use client';

import { useState } from 'react';

import { Favorite } from '@/vibes/soul/primitives/favorite';

export default function Preview() {
  const [favorited, setFavorited] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center p-5">
      <Favorite checked={favorited} setChecked={setFavorited} />
    </div>
  );
}
