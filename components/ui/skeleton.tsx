import clsx from 'clsx'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('animate-pulse rounded-md bg-muted', className)} {...props} />
}

export { Skeleton }
