import { ComponentPropsWithoutRef } from 'react'

export default function Pre(props: ComponentPropsWithoutRef<'pre'>) {
  return (
    <div className="pattern-shadow-sm pattern-shadow group relative border border-foreground bg-background last:[&>pre]:!mb-0">
      <pre {...props} />
    </div>
  )
}
