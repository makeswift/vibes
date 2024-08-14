'use client'

import { useCallback, useEffect, useState } from 'react'

type ScrollBarProps = {
  emblaApi: any
}

const ScrollBar = ({ emblaApi }: ScrollBarProps) => {
  const [progress, setProgress] = useState(0)
  const [scrollbarPosition, setScrollbarPosition] = useState({ width: 0, left: 0 })

  const updateScrollbar = useCallback(() => {
    if (!emblaApi) return

    const totalSlides = emblaApi.slideNodes().length
    const scrollbarWidth = 300 / totalSlides
    const scrollbarLeft = emblaApi.scrollProgress() * (100 - scrollbarWidth)

    setScrollbarPosition({ width: scrollbarWidth, left: scrollbarLeft })
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const update = () => {
      updateScrollbar()
      setProgress(Math.round(emblaApi.scrollProgress() * 100))
    }

    emblaApi.on('scroll', update)
    emblaApi.on('select', update)
    update()

    return () => {
      emblaApi.off('scroll', update)
      emblaApi.off('select', update)
    }
  }, [emblaApi, updateScrollbar])

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = Number(e.target.value)
    setProgress(newProgress)
    const scrollToPosition = (newProgress / 100) * emblaApi.scrollSnapList().length
    emblaApi.scrollTo(Math.round(scrollToPosition))
  }

  return (
    <div className="relative flex h-6 w-full max-w-56 items-center overflow-hidden">
      <input
        type="range"
        min={0}
        max={100}
        value={progress}
        onChange={handleProgressChange}
        className="absolute h-full w-full cursor-pointer appearance-none bg-transparent opacity-0"
      />
      {/* Track */}
      <div className="pointer-events-none absolute h-1 w-full rounded-full bg-contrast-100" />

      {/* Scrollbar */}
      <div
        className="pointer-events-none absolute h-1 rounded-full bg-foreground transition-all duration-0 ease-linear"
        style={{
          width: `${scrollbarPosition.width}%`,
          left: `${scrollbarPosition.left}%`,
        }}
      />
    </div>
  )
}

export default ScrollBar
