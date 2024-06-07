'use client'

import { ComponentPropsWithoutRef, useCallback, useRef, useState } from 'react'

import clsx from 'clsx'

import { Portal } from '../portal'
import Sticker from './sticker'
import styles from './sticker.module.css'

export default function DraggableSticker({
  className,
  ...rest
}: ComponentPropsWithoutRef<typeof Sticker>) {
  const pointerStart = useRef([0, 0])
  const positionStart = useRef([0, 0])
  const [position, setPosition] = useState([0, 0])
  const [active, setActive] = useState(false)
  const onPointerMove = useCallback((e: PointerEvent) => {
    setPosition([
      positionStart.current[0] + e.clientX - pointerStart.current[0],
      positionStart.current[1] + e.clientY - pointerStart.current[1],
    ])
  }, [])

  const onTouchMove = useCallback((e: TouchEvent) => {
    setPosition([
      positionStart.current[0] + e.touches[0].clientX - pointerStart.current[0],
      positionStart.current[1] + e.touches[0].clientY - pointerStart.current[1],
    ])
  }, [])

  return (
    <div
      style={{
        transform: `translate3d(${position[0]}px, ${position[1]}px, 0)`,
      }}
    >
      <Sticker
        {...rest}
        className={clsx(
          'scale-[.6] sm:scale-[.8] lg:scale-100 xl:scale-110 2xl:scale-[1.2]',
          active && styles['active'],
          className
        )}
        onPointerDown={e => {
          pointerStart.current = [e.clientX, e.clientY]
          positionStart.current = position

          setActive(true)

          window.addEventListener('pointermove', onPointerMove)
          window.addEventListener('pointerup', () => {
            setActive(false)

            window.removeEventListener('pointermove', onPointerMove)
          })
        }}
        onTouchStart={e => {
          pointerStart.current = [e.touches[0].clientX, e.touches[0].clientY]
          positionStart.current = position

          setActive(true)

          window.addEventListener('touchmove', onTouchMove)
          window.addEventListener('touchend', () => {
            setActive(false)

            window.removeEventListener('touchmove', onTouchMove)
          })
        }}
      />
      {active && (
        <Portal>
          <div className="fixed inset-0 z-50 cursor-grabbing"></div>
        </Portal>
      )}
    </div>
  )
}
