'use client'

import { useEffect, useState } from 'react'

import AlertBox from '@/vibes/2px/components/alert-box'

export default function Preview() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setVisible(true)
  }, [])
  return (
    <div className="flex min-h-48 flex-col items-center justify-center gap-5 bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      {visible && (
        <AlertBox
          message="Here’s a notification for you"
          type="info"
          onClose={() => setVisible(false)}
        />
      )}
      <AlertBox
        message="Here’s a really long info for you, that doesn't actually fit in the box, so it wraps around"
        type="info"
        onClose={() => {}}
      />

      <AlertBox message="Here’s a warning for you" type="error" onClose={() => {}} />
      <AlertBox message="Hooraay! You did it!" type="success" onClose={() => {}} />
    </div>
  )
}
