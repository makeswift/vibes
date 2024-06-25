import { ComponentPropsWithoutRef } from 'react'

import { slugify } from '@/lib/utils'

export default function H3({ children, ...rest }: ComponentPropsWithoutRef<'h1'>) {
  return (
    <h3 {...rest} id={typeof children === 'string' ? slugify(children) : undefined}>
      {children}
    </h3>
  )
}
