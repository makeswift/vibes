import { ReactNode } from 'react'

import { clsx } from 'clsx'

export interface Badge {
  children: ReactNode
  className?: string
}

export const Badge = function Badge({ children, className = '' }: Badge) {
  return (
    <span
      className={clsx(
        'z-10 rounded-full bg-primary-highlight px-2 py-0.5 font-mono text-xs uppercase tracking-tighter text-foreground',
        className
      )}
    >
      {children}
    </span>
  )
}
