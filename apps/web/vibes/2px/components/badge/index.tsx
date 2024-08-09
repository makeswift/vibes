import { cn } from '@/lib/utils'

const Badge = ({ children, className }: React.ComponentProps<'span'>) => {
  return (
    <span
      className={cn(
        'flex h-[1.375rem] min-w-[1.375rem] items-center justify-center rounded-3xl border-2 border-foreground bg-background px-1 font-body text-xs leading-snug text-foreground',
        className
      )}
    >
      {children}
    </span>
  )
}

Badge.displayName = 'Badge'

export default Badge
