'use client'

import { Calendar } from '@/vibes/soul/primitives/calendar'

export default function Preview() {
  const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)

  return (
    <div className="min-h-50 flex items-center justify-center gap-10 bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Calendar mode="single" disabled={[tomorrow]} />
      <Calendar mode="range" disabled={[tomorrow]} />
    </div>
  )
}
