'use client'

import { ComponentPropsWithoutRef, startTransition, useEffect, useRef, useState } from 'react'

import clsx from 'clsx'

interface Props extends ComponentPropsWithoutRef<'div'> {
  from: string
  to: string
}

export default function Transition({ className, style, from, to, children }: Props) {
  const [inView, setInView] = useState(false)
  const [hasBeenInView, setHasBeenInView] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleTransition = () => {
      if (!hasBeenInView) {
        setTimeout(() => {
          setInView(true)
          setHasBeenInView(true)
        }, 100) // Delay for smooth transition
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handleTransition()
        }
      },
      { threshold: 1 }
    )

    const element = elementRef.current

    if (element) {
      observer.observe(element)

      // Check if the element is already in view on mount
      const rect = element.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        handleTransition()
      }
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [hasBeenInView])

  return (
    <div ref={elementRef}>
      <div className={clsx(inView || hasBeenInView ? to : from, className)}>{children}</div>
    </div>
  )
}
