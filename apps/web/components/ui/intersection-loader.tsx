'use client'

import React, { useEffect, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
  onEnter?: (entry: IntersectionObserverEntry) => void
  height?: number
}

export function IntersectionLoader({ children, onEnter, height = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0) {
          setIsVisible(true)
          onEnter?.(entry)
        }
      },
      {
        root: null,
        rootMargin: '400px',
        threshold: 0,
      }
    )

    observer.observe(ref.current)
  }, [ref, onEnter])

  return (
    <div style={{ height, width: '100%' }} ref={ref}>
      {isVisible && children}
    </div>
  )
}
