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
    const currentMarqueeSection = marqueeSectionRef.current
    if (typeof window === 'undefined' || !currentMarqueeSection) return
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
      resizeObserver.observe(currentMarqueeSection)
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
        'flex w-full justify-center overflow-hidden bg-background text-background @container',
        className
      )}
    >
      <p
        ref={marqueeContentRef}
        className={cn(
          style.marquee,
          'flex h-11 items-center whitespace-nowrap bg-foreground px-2 py-0.5 font-body text-3xl leading-[2.125rem] -tracking-[0.02em] @2xl:h-20 @2xl:text-6xl @2xl:leading-[4rem]'
        )}
      >
        {text}
      </p>
    </section>
  )
}
