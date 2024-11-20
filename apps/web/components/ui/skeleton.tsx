import { clsx } from 'clsx'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('bg-muted animate-pulse rounded-md', className)} {...props} />
}

export { Skeleton }
