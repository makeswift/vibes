'use client'

import { ComponentPropsWithoutRef, startTransition, useEffect, useState } from 'react'

import clsx from 'clsx'

interface Props extends ComponentPropsWithoutRef<'div'> {
  from: string
  to: string
}

export default function Transition({ className, style, from, to, children }: Props) {
  const [transitionClassName, setTransitionClassName] = useState(from)

  useEffect(() => {
    startTransition(() => {
      setTransitionClassName(to)
    })
  }, [to])

  return (
    <div className={clsx(className, transitionClassName)} style={style}>
      {children}
    </div>
  )
}
