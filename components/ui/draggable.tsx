'use client'

import {
  ComponentPropsWithoutRef,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react'

import clsx from 'clsx'

import { Portal } from './portal'

interface Props extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  children: (state: { active: boolean; hover: boolean }) => ReactNode
}

export default function Draggable({ className, children, style, ...rest }: Props) {
  const { stack, setStack } = useDraggable()
  const [zIndex, setZIndex] = useState(stack)
  const prevZIndex = useRef(0)
  const pointerStart = useRef([0, 0])
  const positionStart = useRef([0, 0])
  const [position, setPosition] = useState([0, 0])
  const [active, setActive] = useState(false)
  const [hover, setHover] = useState(false)
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
      className={clsx(className, 'relative')}
      style={{
        ...style,
        transform: `translate3d(${position[0]}px, ${position[1]}px, 0)`,
        zIndex,
      }}
      onPointerEnter={() => {
        prevZIndex.current = zIndex

        setZIndex(stack + 1)
        setHover(true)
      }}
      onPointerLeave={() => {
        setZIndex(prevZIndex.current)
        setHover(false)
      }}
      onPointerDown={e => {
        pointerStart.current = [e.clientX, e.clientY]
        positionStart.current = position

        setActive(true)
        setStack(prev => prev + 1)

        window.addEventListener('pointermove', onPointerMove)
        window.addEventListener('pointerup', () => {
          setActive(false)

          prevZIndex.current = stack + 1
          setZIndex(stack + 1)

          window.removeEventListener('pointermove', onPointerMove)
        })
      }}
      onTouchStart={e => {
        pointerStart.current = [e.touches[0].clientX, e.touches[0].clientY]
        positionStart.current = position

        setActive(true)
        setStack(prev => prev + 1)

        window.addEventListener('touchmove', onTouchMove)
        window.addEventListener('touchend', () => {
          setActive(false)

          prevZIndex.current = stack + 1
          setZIndex(stack + 1)

          window.removeEventListener('touchmove', onTouchMove)
        })
      }}
    >
      {children({ active, hover })}
      {active && (
        <Portal>
          <div className="fixed inset-0 z-50 cursor-grabbing"></div>
        </Portal>
      )}
    </div>
  )
}

interface Context {
  stack: number
  setStack: Dispatch<SetStateAction<number>>
}

const DraggableContext = createContext<Context>({ stack: 0, setStack: () => {} })

export function useDraggable() {
  return useContext(DraggableContext)
}

export function DraggableProvider({ children }: { children: ReactNode }) {
  const [stack, setStack] = useState(0)

  return (
    <DraggableContext.Provider value={{ stack, setStack }}>{children}</DraggableContext.Provider>
  )
}
