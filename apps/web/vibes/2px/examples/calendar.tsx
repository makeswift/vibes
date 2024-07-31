'use client'

import React from 'react'

import Calendar from '@/vibes/2px/components/calendar'

export default function Preview() {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date(2025, 0, 1))
  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  )
}
