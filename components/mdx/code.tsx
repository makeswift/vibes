import { ComponentPropsWithoutRef } from 'react'

export async function Code(props: ComponentPropsWithoutRef<'code'>) {
  return <code {...props} className="font-mono" />
}
