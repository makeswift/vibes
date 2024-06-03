'use client'

import { ComponentPropsWithoutRef, useCallback, useRef, useState } from 'react'

import Sticker from './sticker'

export default function DraggableSticker(props: ComponentPropsWithoutRef<typeof Sticker>) {
  const pointerStart = useRef([0, 0])
  const positionStart = useRef([0, 0])
  const [position, setPosition] = useState([0, 0])
  const onMove = useCallback((e: MouseEvent) => {
    setPosition([
      positionStart.current[0] + e.clientX - pointerStart.current[0],
      positionStart.current[1] + e.clientY - pointerStart.current[1],
    ])

    window.addEventListener('pointerup', () => window.removeEventListener('pointermove', onMove))
  }, [])

  return (
    <div
      style={{
        transform: `translate3d(${position[0]}px, ${position[1]}px, 0)`,
      }}
    >
      <Sticker
        {...props}
        onPointerDown={e => {
          pointerStart.current = [e.clientX, e.clientY]
          positionStart.current = position

          window.addEventListener('pointermove', onMove)
        }}
      />
    </div>
  )
}
