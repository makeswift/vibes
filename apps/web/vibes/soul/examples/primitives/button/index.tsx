import Link from 'next/link'

import { Button } from '@/vibes/soul/primitives/button'

export default function Preview() {
  return (
    <div className="grid h-screen place-content-center gap-x-4 gap-y-6">
      <Button variant="primary">Shop Now</Button>
      <Button variant="primary" loading>
        Shop Now
      </Button>

      <Button variant="secondary">Shop Now</Button>
      <Button variant="secondary" loading>
        Shop Now
      </Button>

      <Button variant="tertiary">Shop Now</Button>
      <Button variant="tertiary" loading>
        Shop Now
      </Button>
    </div>
  )
}
