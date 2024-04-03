import { ComponentPropsWithoutRef } from 'react'

import { CopyButton } from '../ui/copy-button'

export default function Pre(props: ComponentPropsWithoutRef<'pre'>) {
  return (
    <div className="relative">
      <pre {...props} />

      <div className="absolute right-3 top-3 z-20">
        <CopyButton />
      </div>
    </div>
  )
}
