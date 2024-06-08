'use client'

import { ComponentPropsWithoutRef, ReactNode, useCallback, useRef, useState } from 'react'

import { Portal } from './portal'

interface Props extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  children: (state: { active: boolean }) => ReactNode
}

export default function Draggable({ className, children, style, ...rest }: Props) {
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
      {...rest}
      style={{
        ...style,
        transform: `translate3d(${position[0]}px, ${position[1]}px, 0)`,
      }}
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
    >
      {children({ active })}
      {active && (
        <Portal>
          <div className="fixed inset-0 z-50 cursor-grabbing"></div>
        </Portal>
      )}
    </div>
  )
}
