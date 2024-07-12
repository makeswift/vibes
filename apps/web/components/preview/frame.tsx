'use client'

import { ComponentPropsWithoutRef, useCallback, useEffect, useRef, useState } from 'react'

import { getCssVars } from '@/lib/registry'

import { Button } from '../ui/button'
import Card from '../ui/card'
import { Portal } from '../ui/portal'
import { useBrandContext } from './brand-context'
import { BrandSelect } from './brand-select'
import { usePreviewContext } from './preview-context'

interface Props extends ComponentPropsWithoutRef<typeof Card> {}

export function Frame({ children }: Props) {
  const { activeBrand } = useBrandContext()
  const container = useRef<HTMLDivElement | null>(null)
  const style = activeBrand ? getCssVars(activeBrand) : {}
  const startX = useRef<number>(0)
  const { width, zoom, resize, isDragging, setIsDragging } = usePreviewContext()
  const widthStart = useRef<number>(0)

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
      {/* <div className="pointer-events-none absolute bottom-full mb-1 flex w-full items-center">
        <div className="flex-1" />
        {width && isDragging && (
          <div className="font-body text-sm">{`${Math.round(width / zoom)}px @ ${Math.round(zoom * 100)}%`}</div>
        )}
        <div className="pointer-events-auto flex flex-1 justify-end gap-x-2">
          <div className="hidden gap-x-2 md:flex">
            <Button onClick={() => resize(320)}>Mobile</Button>
            <Button onClick={() => resize(768)}>Tablet</Button>
            <Button onClick={() => resize(null)}>Desktop</Button>
          </div>

          <BrandSelect />
        </div>
      </div> */}
      <div className="relative mx-auto border border-white" style={{ width: width ?? '100%' }}>
        <div style={{ zoom }}>
          <div style={style}>{children}</div>
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
