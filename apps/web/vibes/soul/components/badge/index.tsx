import { ReactNode } from 'react'

import { clsx } from 'clsx'

export interface BadgeProps {
  children: ReactNode
  variant?: 'round' | 'square'
  className?: string
}

export const Badge = function Badge({ children, variant = 'round', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'bg-primary-highlight px-2 py-0.5 font-mono text-xs uppercase tracking-tighter text-foreground',
        variant === 'round' ? 'rounded-full' : 'rounded',
        className
      )}
    >
      {children}
    </span>
  )
}
