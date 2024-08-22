import { cn } from '@/lib/utils'

export const LoadingIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('animate-spin', className)}
      {...props}
    >
      <circle cx="9" cy="9" r="8" strokeWidth="2" strokeDasharray="3 4" />
    </svg>
  )
}
LoadingIcon.displayName = 'LoadingIcon'
