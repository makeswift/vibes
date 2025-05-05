'use client';

import { Calendar } from '@/vibes/soul/primitives/calendar';

export default function Preview() {
  const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  return (
    <div className="bg-background flex min-h-50 items-center justify-center gap-10 p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Calendar disabled={[tomorrow]} mode="single" />
      <Calendar disabled={[tomorrow]} mode="range" />
    </div>
  );
}
