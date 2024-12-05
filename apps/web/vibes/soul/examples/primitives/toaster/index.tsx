'use client'

import { Button } from '@/vibes/soul/primitives/button'
import { toast } from '@/vibes/soul/primitives/toaster'

export default function Preview() {
  return (
    <div className="grid h-screen place-content-center gap-x-4 gap-y-6">
      <Button variant="primary" onClick={() => toast.success('Success')}>
        Success
      </Button>

      <Button variant="primary" onClick={() => toast.error('Error')}>
        Error
      </Button>

      <Button variant="primary" onClick={() => toast.warning('Warning')}>
        Warning
      </Button>

      <Button variant="primary" onClick={() => toast.info('Info')}>
        Info
      </Button>

      <Button
        variant="primary"
        onClick={() =>
          toast.success('Success', {
            description: 'Description of toast',
            action: { label: 'Undo', onClick: () => console.log('undo') },
          })
        }
      >
        Options
      </Button>
    </div>
  )
}
