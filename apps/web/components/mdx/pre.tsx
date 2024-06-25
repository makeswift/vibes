import { ComponentPropsWithoutRef } from 'react'

import { CopyButton } from '../ui/copy-button'

export default function Pre(props: ComponentPropsWithoutRef<'pre'>) {
  return (
    <div className="pattern-shadow-sm pattern-shadow group relative border border-docs-foreground bg-docs-background last:[&>pre]:!mb-0">
      <pre {...props} />

      <CopyButton className="absolute right-3 top-2.5 z-20 opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  )
}
