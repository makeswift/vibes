import { ComponentPropsWithoutRef } from 'react'

import { CopyButton } from '../ui/copy-button'

export default function Code(props: ComponentPropsWithoutRef<'code'>) {
  return (
    <>
      <code {...props} className="font-mono" />
      <CopyButton className="absolute right-0 top-0" clipboard={props.children} />
    </>
  )
}
