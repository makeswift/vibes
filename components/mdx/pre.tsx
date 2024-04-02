import { ComponentPropsWithoutRef } from 'react'

import { CopyButton } from '../ui/copy-button'

export default function Pre(props: ComponentPropsWithoutRef<'pre'>) {
  return (
    <div className="relative">
      <pre {...props} />

      <CopyButton className="absolute right-0 top-0" />
    </div>
  )
}
