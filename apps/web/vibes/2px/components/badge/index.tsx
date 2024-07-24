import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

const Badge = ({ children, className }: ComponentProps<'span'>) => {
  return (
    <span
      className={cn(
        'flex h-[1.375rem] w-[1.375rem] items-center justify-center rounded-3xl border-2 border-foreground bg-background font-body text-xs !leading-[var(--line-height-sm)] text-foreground',
        className
      )}
    >
      {children}
    </span>
  )
}

Badge.displayName = 'Badge'

export default Badge
