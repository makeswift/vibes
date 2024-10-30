'use client'

import { useEffect, useRef, useState } from 'react'

import clsx from 'clsx'


import { Portal } from '../ui/portal'
import { useBrandContext } from './brand-context'
import { usePreviewContext } from './preview-context'
import { ResizeX } from '@/icons/generated'

interface Props {
  className?: string
  vibeSlug: string
  componentName: string
}

export function Frame({ className, vibeSlug, componentName }: Props) {
  const { activeBrand } = useBrandContext()
  const iframe = useRef<HTMLIFrameElement>(null)
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

  useEffect(() => {
    iframe.current?.contentDocument?.body.style.setProperty('zoom', String(zoom))
  }, [zoom])

  return (
    <div className={clsx('relative w-full bg-contrast-100', className)} ref={container}>
      <div
        className={clsx('relative mx-auto h-full border border-dashed border-contrast-200')}
        style={{ width: width ?? '100%' }}
      >
        {activeBrand && (
          <iframe
            ref={iframe}
            className="h-full w-full bg-transparent"
            src={`/preview/${vibeSlug}/${componentName}/${activeBrand.name}`}
          />
        )}
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
