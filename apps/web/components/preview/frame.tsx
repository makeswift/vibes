'use client'

import { ComponentPropsWithoutRef, useCallback, useEffect, useRef, useState } from 'react'

import { getCssVars } from '@/lib/registry'

import Card from '../ui/card'
import { Portal } from '../ui/portal'
import { BrandSelect } from './brand-select'
import { useBrand } from './useBrand'

interface Props extends ComponentPropsWithoutRef<typeof Card> {}

export function Frame({ children }: Props) {
  const { activeBrand } = useBrand()
  const container = useRef<HTMLDivElement | null>(null)
  const style = activeBrand ? getCssVars(activeBrand) : {}
  const [dragging, setDragging] = useState(false)
  const [maxWidth, setMaxWidth] = useState<number | null>(null)
  const [clampedWidth, setClampedWidth] = useState<number | null>(null)
  const [renderedWidth, setRenderedWidth] = useState<number>(1280)
  const [zoom, setZoom] = useState<number>(1)
  const pointerStartX = useRef(0)
  const widthStart = useRef<number | null>(null)

  useEffect(() => {
    if (!container.current) return

    const resizeObserver = new ResizeObserver(entries => {
      setMaxWidth(entries[0].contentRect.width)
    })

    resizeObserver.observe(container.current)
  }, [])

  useEffect(() => {
    if (maxWidth === null) return

    // derive clampedWidth and zoom from renderedWidth
    setClampedWidth(Math.min(renderedWidth, maxWidth))
    setZoom(Math.min(maxWidth / renderedWidth, 1))
  }, [renderedWidth, maxWidth])

  const resize = useCallback((deltaX: number) => {
    if (widthStart.current === null || !container.current) return

    const nextWidth = widthStart.current + deltaX
    const maxWidth = container.current.getBoundingClientRect().width

    setRenderedWidth(nextWidth)
    setClampedWidth(Math.min(nextWidth, maxWidth))
    setZoom(Math.min(maxWidth / nextWidth, 1))

    widthStart.current = nextWidth
  }, [])

  const onPointerMove = useCallback((e: PointerEvent) => {
    resize(e.movementX)
  }, [])
  const onTouchMove = useCallback((e: TouchEvent) => resize(e.touches[0].clientX), [])

  return (
    <div className="relative" ref={container}>
      <div className="pointer-events-none absolute bottom-full mb-1 flex w-full items-center">
        <div className="flex-1" />
        <div className="font-body text-sm">{`${Math.round(renderedWidth)}px @ ${Math.round(zoom * 100)}%`}</div>
        <div className="pointer-events-auto flex flex-1 justify-end">
          <BrandSelect />
        </div>
      </div>
      {clampedWidth && (
        <div className="relative border border-white" style={{ width: clampedWidth }}>
          <div style={{ zoom }}>
            <div style={style}>{children}</div>
          </div>
          <div
            className="absolute bottom-0 left-full top-0 w-4 cursor-grab"
            onPointerDown={e => {
              pointerStartX.current = e.clientX
              widthStart.current = renderedWidth

              e.currentTarget.requestPointerLock()

              setDragging(true)

              window.addEventListener('pointermove', onPointerMove)
              window.addEventListener('pointerup', () => {
                document.exitPointerLock()
                setDragging(false)

                window.removeEventListener('pointermove', onPointerMove)
              })
            }}
          >
            <div className="absolute top-1/2 ml-2 h-10 w-1 -translate-y-1/2 rounded-sm bg-foreground"></div>
          </div>
        </div>
      )}
      <Portal>{dragging && <div className="fixed inset-0 z-50 cursor-grabbing" />}</Portal>
    </div>
  )
}
