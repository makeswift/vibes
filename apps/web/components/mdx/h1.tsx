import { ComponentPropsWithoutRef } from 'react'

import { slugify } from '@/lib/utils'

export default function H1({ children, ...rest }: ComponentPropsWithoutRef<'h1'>) {
  return (
    <h1 {...rest} id={typeof children === 'string' ? slugify(children) : undefined}>
      {children}
    </h1>
  )
}
