import React from 'react'

import { cn } from '@/lib/utils'

const SHADOW = {
  small: 'dot-shadow-sm',
  large: 'dot-shadow-lg',
}

export interface Props {
  children: React.ReactNode
  color: string
  shadow: 'small' | 'large'
}

const ComponentPreview = React.forwardRef<HTMLDivElement, Props>(
  ({ children, color, shadow }, ref) => {
    return (
      <div
        className={cn(
          'dot-shadow mb-8 mt-6 flex min-h-80 w-full items-center justify-center border border-black p-10 first:mt-0',
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
