import React from 'react'

import clsx from 'clsx'

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className, ...rest }: Props) {
  return (
    <div
      {...rest}
      className={clsx('not-prose w-full border border-foreground bg-background', className)}
    >
      {children}
    </div>
  )
}
