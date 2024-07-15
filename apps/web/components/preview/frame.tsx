'use client'

import { ComponentPropsWithoutRef, useCallback, useEffect, useRef, useState } from 'react'

import { ResizeX } from '@/icons/generated'
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
  const startX = useRef(0)
  const widthStart = useRef(0)
  const cursorStart = useRef<readonly [number, number]>([0, 0])
  const [cursor, setCursor] = useState<readonly [number, number] | null>(null)

  useEffect(() => {
    if (!container.current) return

    function handleResize() {
      if (!container.current) return

      setMaxWidth(container.current.clientWidth)
      resize(null)
    }

    window.addEventListener('resize', handleResize)

    setMaxWidth(container.current.clientWidth)

    return () => window.removeEventListener('resize', handleResize)
  }, [resize, setMaxWidth])

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      const windowWidth = e.view?.innerWidth ?? 0
      const nextCursorX = cursorStart.current[0] + e.movementX
      const nextWidth = widthStart.current + e.movementX * 2
      const nextCursor = [
        nextCursorX > windowWidth
          ? nextCursorX % windowWidth
          : nextCursorX < 0
            ? windowWidth + nextCursorX
            : nextCursorX,
        cursorStart.current[1],
      ] as const

      resize(nextWidth)
      setCursor(nextCursor)

      widthStart.current = nextWidth
      cursorStart.current = nextCursor
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
          className="cursor-resizeX group absolute bottom-0 left-full top-0 hidden w-4 md:block"
          onPointerDown={e => {
            if (!container.current) return

            e.currentTarget.requestPointerLock()

            const nextCursor = [e.clientX, e.clientY] as const

            setCursor(nextCursor)

            widthStart.current = width !== null ? width / zoom : container.current.clientWidth
            cursorStart.current = nextCursor

            setIsDragging(true)

            window.addEventListener('pointermove', onPointerMove)
            window.addEventListener('pointerup', () => {
              document.exitPointerLock()
              setIsDragging(false)
              setCursor(null)

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
      <Portal>
        {isDragging && (
          <div className="fixed inset-0 z-50">
            {cursor && (
              <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
                <ResizeX style={{ transform: `translate3d(${cursor[0]}px, ${cursor[1]}px, 0)` }} />
              </div>
            )}
          </div>
        )}
      </Portal>
    </div>
  )
}
