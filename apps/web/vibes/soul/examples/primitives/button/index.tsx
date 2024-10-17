import Link from 'next/link'

import { Button } from '@/vibes/soul/primitives/button'

export default function Preview() {
  return (
    <div className="mx-auto mt-10 grid max-w-sm grid-cols-2 justify-items-center gap-y-6">
      <Button variant="primary" asChild>
        <Link href="/shop">Shop Now</Link>
      </Button>
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
