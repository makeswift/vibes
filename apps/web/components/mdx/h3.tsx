import { ComponentPropsWithoutRef } from 'react'

import { getNodeTextContent, slugify } from '@/lib/utils'

export default function H3({ children, ...rest }: ComponentPropsWithoutRef<'h3'>) {
  return (
    <h3 {...rest} id={slugify(getNodeTextContent(children))}>
      {children}
    </h3>
  )
}
