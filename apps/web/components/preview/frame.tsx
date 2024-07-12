'use client'

import { ComponentPropsWithoutRef, useCallback, useEffect, useRef } from 'react'

import { getCssVars } from '@/lib/registry'

import Card from '../ui/card'
import { Portal } from '../ui/portal'
import { useBrandContext } from './brand-context'
import { usePreviewContext } from './preview-context'

interface Props extends ComponentPropsWithoutRef<typeof Card> {}

export function Frame({ children }: Props) {
  const { activeBrand } = useBrandContext()
  const brandStyle = activeBrand ? getCssVars(activeBrand) : {}
  const container = useRef<HTMLDivElement>(null)
  const { width, zoom, resize, isDragging, setIsDragging, setMaxWidth } = usePreviewContext()
  const startX = useRef<number>(0)
  const widthStart = useRef<number>(0)

  useEffect(() => {
    function handleResize() {
      if (!container.current) return

      setMaxWidth(container.current.clientWidth)
      resize(null)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      const nextWidth = widthStart.current + e.movementX

      resize(nextWidth)

      widthStart.current = nextWidth
    },
    [resize]
  )

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      const nextWidth = widthStart.current + startX.current - e.touches[0].clientX

      resize(nextWidth)

      widthStart.current = nextWidth
    },
    [resize]
  )

  return (
    <div className="relative" ref={container}>
      <div className="relative mx-auto border border-white" style={{ width: width ?? '100%' }}>
        <div style={{ zoom }}>
          <div style={brandStyle}>{children}</div>
        </div>
        <div
          className="group absolute bottom-0 left-full top-0 hidden w-4 cursor-grab md:block"
          onPointerDown={e => {
            if (!container.current) return

            widthStart.current = width !== null ? width / zoom : container.current.clientWidth

            e.currentTarget.requestPointerLock()

            setIsDragging(true)

            window.addEventListener('pointermove', onPointerMove)
            window.addEventListener('pointerup', () => {
              document.exitPointerLock()
              setIsDragging(false)

              window.removeEventListener('pointermove', onPointerMove)
            })
          }}
          onTouchStart={e => {
            if (!container.current) return

            widthStart.current = width !== null ? width / zoom : container.current.clientWidth
            startX.current = e.touches[0].clientX

            setIsDragging(true)

            window.addEventListener('touchmove', onTouchMove)
            window.addEventListener('touchend', () => {
              setIsDragging(false)

              window.removeEventListener('touchmove', onTouchMove)
            })
          }}
        >
          <div className="absolute top-1/2 ml-2 h-10 w-1 -translate-y-1/2 rounded-sm bg-foreground group-hover:scale-105"></div>
        </div>
      </div>
      <Portal>{isDragging && <div className="fixed inset-0 z-50 cursor-grabbing" />}</Portal>
    </div>
  )
}
