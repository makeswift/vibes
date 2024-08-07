'use client'

import { useCallback, useEffect, useState } from 'react'

type ScrollBarProps = {
  emblaApi: any
}

const ScrollBar = ({ emblaApi }: ScrollBarProps) => {
  const [progress, setProgress] = useState(0)

  const updateProgress = useCallback(() => {
    if (!emblaApi) return
    const progress = Math.round(emblaApi.scrollProgress() * 100)
    setProgress(progress)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('select', updateProgress)
    updateProgress()

    return () => {
      emblaApi.off('select', updateProgress)
    }
  }, [emblaApi, updateProgress])

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = Number(e.target.value)
    setProgress(newProgress)
    if (emblaApi) {
      const scrollToPosition = (newProgress / 100) * (emblaApi.scrollSnapList().length - 1)
      emblaApi.scrollTo(Math.round(scrollToPosition))
    }
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
      <div className="pointer-events-none absolute h-1 w-full rounded-full bg-contrast-100" />
      <div
        className="pointer-events-none absolute h-1 rounded-full bg-foreground transition-all duration-300 ease-out"
        style={{ width: '38%', left: `${progress * 0.62}%` }}
      />
    </div>
  )
}

export default ScrollBar
