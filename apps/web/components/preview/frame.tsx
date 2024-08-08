'use client'

import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react'

import clsx from 'clsx'

import { ResizeX } from '@/icons/generated'

import Card from '../ui/card'
import { Portal } from '../ui/portal'
import { useBrandContext } from './brand-context'
import { IFrame } from './iframe'
import { usePreviewContext } from './preview-context'

interface Props extends ComponentPropsWithoutRef<typeof Card> {
  size?: 'small' | 'medium' | 'large'
}

export function Frame({ children, size = 'medium' }: Props) {
  const { activeBrand } = useBrandContext()
  const container = useRef<HTMLDivElement>(null)
  const { width, zoom, resize, isDragging, setIsDragging, setMaxWidth } = usePreviewContext()
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

  return (
    <div className="relative bg-contrast-100 [transform:translate3d(0,0,0)]" ref={container}>
      <div
        className={clsx(
          'relative mx-auto border border-dashed border-contrast-200',
          {
            small: 'h-[300px]',
            medium: 'h-[500px]',
            large: 'h-[750px]',
          }[size]
        )}
        style={{ width: width ?? '100%' }}
      >
        <IFrame className="h-full w-full" bodyStyle={{ zoom, ...(activeBrand?.cssVars ?? {}) }}>
          {children}
        </IFrame>
        <div
          className="group absolute bottom-0 left-full top-0 hidden w-4 cursor-resizeX md:block"
          onPointerDown={e => {
            if (!container.current) return

            const nextCursor = [e.clientX, e.clientY] as const

            setCursor(nextCursor)

            widthStart.current = width !== null ? width / zoom : container.current.clientWidth
            cursorStart.current = nextCursor

            setIsDragging(true)

            e.currentTarget.requestPointerLock()
          }}
          onPointerMove={e => {
            const { ownerDocument } = e.currentTarget

            if (ownerDocument.pointerLockElement !== e.currentTarget) return

            const windowWidth = ownerDocument.defaultView?.innerWidth ?? 0
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
          }}
          onPointerUp={e => {
            setIsDragging(false)
            setCursor(null)

            e.currentTarget.ownerDocument.exitPointerLock()
          }}
        >
          <div className="absolute top-1/2 ml-2 h-8 w-0.5 -translate-y-1/2 rounded-full bg-foreground transition-all group-hover:scale-x-125 group-hover:scale-y-150"></div>
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
