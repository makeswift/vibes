'use client'

import { useState } from 'react'

import Favorite from '@/vibes/soul/components/favorite'

export default function Preview() {
  const [favorited, setFavorited] = useState(true)

  return (
    <div className="flex min-h-48 flex-col items-center justify-center gap-10 bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-20">
      <Favorite favorited={favorited} setFavorited={setFavorited} />
    </div>
  )
}
