import { ComponentPropsWithoutRef } from 'react'

export async function Pre({ children }: ComponentPropsWithoutRef<'pre'>) {
  return <code>{children}</code>
}
