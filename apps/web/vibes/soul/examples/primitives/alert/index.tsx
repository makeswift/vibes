'use client'

import { Alert } from '@/vibes/soul/primitives/alert'

export default function Preview() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <Alert variant="success" message="This is a success alert" />
      <Alert variant="warning" message="This is a warning alert" />
      <Alert variant="error" message="This is an error alert" />
    </div>
  )
}
