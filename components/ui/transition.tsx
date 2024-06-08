'use client'

import { startTransition, useEffect, useState } from 'react'

import clsx from 'clsx'

export default function Transition({
  className,
  from,
  to,
  children,
}: {
  className: string
  from: string
  to: string
  children: React.ReactNode
}) {
  const [transitionClassName, setTransitionClassName] = useState(from)

  useEffect(() => {
    startTransition(() => {
      setTransitionClassName(to)
    })
  }, [to])

  return (
    <div className={clsx(className, transitionClassName, 'pointer-events-none')}>{children}</div>
  )
}
