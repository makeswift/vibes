'use client'

import { Dispatch, SetStateAction, createContext, useCallback, useContext, useState } from 'react'

const MIN_WIDTH = 320
const MAX_WIDTH = 1024

type Context = {
  width: number | null
  zoom: number
  isDragging: boolean
  setIsDragging: Dispatch<SetStateAction<boolean>>
  setMaxWidth: Dispatch<SetStateAction<number | null>>
  resize: (nextWidth: number | null) => void
}

const PreviewContext = createContext<Context>({
  width: null,
  zoom: 1,
  isDragging: false,
  setIsDragging: () => {},
  setMaxWidth: () => {},
  resize: () => {},
})

interface Props {
  children: React.ReactNode
}

export function PreviewProvider({ children }: Props) {
  const [width, setWidth] = useState<number | null>(null)
  const [zoom, setZoom] = useState<number>(1)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [maxWidth, setMaxWidth] = useState<number | null>(null)

  const resize = useCallback(
    (nextWidth: number | null) => {
      if (nextWidth === null) {
        setWidth(null)
        setZoom(1)
      } else {
        if (maxWidth === null) return

        setWidth(Math.max(Math.min(nextWidth, maxWidth), MIN_WIDTH))
        setZoom(Math.min(maxWidth / Math.max(nextWidth, MIN_WIDTH), 1))
      }
    },
    [maxWidth]
  )

  return (
    <PreviewContext.Provider
      value={{
        width,
        zoom,
        setMaxWidth,
        isDragging,
        setIsDragging,
        resize,
      }}
    >
      {children}
    </PreviewContext.Provider>
  )
}

export function usePreviewContext() {
  return useContext(PreviewContext)
}
