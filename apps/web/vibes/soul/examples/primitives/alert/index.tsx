'use client'

import { useState } from 'react'

import { clsx } from 'clsx'

import { Alert } from '@/vibes/soul/components/alert'
import { Button } from '@/vibes/soul/components/button'

export default function Preview() {
  const [showAlert, setShowAlert] = useState(false)

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {/* <Alert variant="error" message="This is an error alert" /> */}
      {/* <Alert variant="info" message="This is an info alert" /> */}
      {/* <Alert variant="success" message="This is a success alert" /> */}
      {/* <Alert variant="warning" message="This is a warning alert" /> */}

      <Alert
        variant="success"
        message="1 item added to your cart"
        showAlert={showAlert}
        onClose={setShowAlert}
      />

      <Button
        onClick={() => setShowAlert(true)}
        size="small"
        className={clsx(
          'transition-opacity duration-300',
          showAlert ? 'pointer-events-none opacity-0' : 'opacity-100'
        )}
      >
        Add to Cart
      </Button>
    </div>
  )
}
