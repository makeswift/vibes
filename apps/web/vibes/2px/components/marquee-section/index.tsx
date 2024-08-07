'use client'

import { useLayoutEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

import style from './index.module.css'

interface Props {
  className?: string
  text: string
}

export default function MarqueeSection({ className, text }: Props) {
  const marqueeSectionRef = useRef<HTMLDivElement>(null)
  const marqueeContentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    const currentMarqueeSection = marqueeSectionRef.current
    const adjustMarqueeSpeed = () => {
      const marqueeSection = marqueeSectionRef.current
      const marqueeContent = marqueeContentRef.current
      const containerWidth = marqueeSection?.offsetWidth
      const contentWidth = marqueeContent?.offsetWidth
      if (!containerWidth || !contentWidth || !marqueeContent?.textContent) return
      const textLength = marqueeContent?.textContent?.length

      // Calculate the speed (adjust the multiplier as needed)
      const baseSpeed = 50 // pixels per second
      const speedMultiplier = 0.8 // adjust this value to fine-tune the speed
      const speed = baseSpeed + (textLength / containerWidth) * speedMultiplier

      // Set the animation duration
      const duration = contentWidth / speed
      marqueeContent.style.animationDuration = `${duration}s`
    }

    adjustMarqueeSpeed()

    const resizeObserver = new ResizeObserver(() => {
      adjustMarqueeSpeed()
    })
    if (marqueeSectionRef.current) {
      resizeObserver.observe(marqueeSectionRef.current)
    }
    return () => {
      if (currentMarqueeSection) {
        resizeObserver.unobserve(currentMarqueeSection)
      }
    }
  }, [])

  return (
    <section
      ref={marqueeSectionRef}
      className={cn(
        'marquee-section flex w-fit justify-center overflow-hidden bg-background font-body text-3xl leading-[2.125rem] -tracking-[0.0375rem] text-background @2xl:text-6xl @2xl:leading-[4rem] @2xl:-tracking-[0.0675rem]',
        className
      )}
    >
      <div
        ref={marqueeContentRef}
        className={cn(
          style.marquee,
          'flex h-[2.75rem] w-fit items-center whitespace-nowrap bg-foreground px-2 py-0.5 @2xl:h-20'
        )}
      >
        {text}
      </div>
    </section>
  )
}
