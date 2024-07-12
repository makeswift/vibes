'use client'

import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react'

const MIN_WIDTH = 320

type Context = {
  width: number | null
  zoom: number
  isDragging: boolean
  setIsDragging: Dispatch<SetStateAction<boolean>>
  resize: (nextWidth: number | null) => void
}

const PreviewContext = createContext<Context>({
  width: null,
  zoom: 1,
  isDragging: false,
  setIsDragging: () => {},
  resize: () => {},
})

interface Props {
  children: React.ReactNode
}

export function PreviewProvider({ children }: Props) {
  const [width, setWidth] = useState<number | null>(null)
  const [zoom, setZoom] = useState<number>(1)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  const resize = useCallback((nextWidth: number | null) => {
    if (nextWidth === null) {
      setWidth(null)
      setZoom(1)
    } else {
      if (!ref.current) return

      const maxWidth = ref.current.clientWidth

      setWidth(Math.max(Math.min(nextWidth, maxWidth), MIN_WIDTH))
      setZoom(Math.min(maxWidth / Math.max(nextWidth, MIN_WIDTH), 1))
    }
  }, [])

  return (
    <PreviewContext.Provider
      value={{
        width,
        zoom,
        resize,
        isDragging,
        setIsDragging,
      }}
    >
      <div ref={ref}>{children}</div>
    </PreviewContext.Provider>
  )
}

export function usePreviewContext() {
  return useContext(PreviewContext)
}
