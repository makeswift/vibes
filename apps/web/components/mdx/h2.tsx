import { ComponentPropsWithoutRef } from 'react'

import { slugify } from '@/lib/utils'

export default function H2({ children, ...rest }: ComponentPropsWithoutRef<'h1'>) {
  return (
    <h2 {...rest} id={typeof children === 'string' ? slugify(children) : undefined}>
      {children}
    </h2>
  )
}
