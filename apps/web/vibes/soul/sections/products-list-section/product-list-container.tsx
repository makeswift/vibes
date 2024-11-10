'use client'

import { use } from 'react'

import clsx from 'clsx'

import { ProductListTransitionContext } from './context'

export function ProductListContainer({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const [isPending] = use(ProductListTransitionContext)

  return <div className={clsx(isPending && 'opacity-50', className)}>{children}</div>
}
