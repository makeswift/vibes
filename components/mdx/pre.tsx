import { ComponentPropsWithoutRef } from 'react'

export async function Pre(props: ComponentPropsWithoutRef<'pre'>) {
  return <pre {...props} />
}
