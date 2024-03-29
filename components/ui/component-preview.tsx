import React, { forwardRef } from 'react'

import clsx from 'clsx'

const SHADOW = {
  small: 'pattern-shadow-sm',
  large: 'pattern-shadow-lg',
}

export interface Props {
  children: React.ReactNode
  color: string
  shadow?: 'small' | 'large'
}

const ComponentPreview = React.forwardRef<HTMLDivElement, Props>(
  ({ children, color, shadow = 'large' }, ref) => {
    return (
      <div
        className={clsx(
          'pattern-shadow not-prose mb-8 mt-6 flex min-h-48 w-full items-center justify-center border border-foreground p-10 first:mt-0 md:min-h-80',
          SHADOW[shadow]
        )}
        ref={ref}
        style={{ background: color }}
      >
        {children}
      </div>
    )
  }
)

export { ComponentPreview }
