import { ComponentPropsWithoutRef } from 'react'

export default function Pre(props: ComponentPropsWithoutRef<'pre'>) {
  return (
    <div className="group relative last:[&>pre]:!mb-0">
      <pre {...props} />
    </div>
  )
}
