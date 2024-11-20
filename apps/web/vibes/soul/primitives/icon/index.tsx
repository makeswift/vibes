import { clsx } from 'clsx'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { Suspense, lazy, useMemo } from 'react'

export type IconName = keyof typeof dynamicIconImports

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const IconNames = Object.keys(dynamicIconImports) as IconName[]

export function Icon({
  className,
  name,
  size = 24,
}: {
  className?: string
  size?: number
  name: IconName
}) {
  const LucideIcon = useMemo(() => lazy(dynamicIconImports[name]), [name])

  return (
    <Suspense
      fallback={
        <div
          className={clsx('animate-pulse rounded-full bg-contrast-100', className)}
          style={{ width: size, height: size }}
        />
      }
    >
      <LucideIcon className={className} size={size} />
    </Suspense>
  )
}
