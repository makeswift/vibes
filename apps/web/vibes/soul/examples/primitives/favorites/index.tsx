'use client'

import { useState } from 'react'

import { Favorite } from '@/vibes/soul/primitives/favorite'

export default function Preview() {
  const [favorited, setFavorited] = useState(false)

  return (
    <div className="flex min-h-48 flex-col items-center justify-center gap-10 bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-20">
      <Favorite checked={favorited} setChecked={setFavorited} />
    </div>
  )
}
