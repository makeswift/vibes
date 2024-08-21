'use client'

import React, { useCallback, useEffect, useRef } from 'react'

interface Props {
  backgroundChildren: React.ReactNode
  coverImage: { url: string; alt: string }
}
const BRUSH_RADIUS = 60

const CLICKABLE_ELEMENTS = ['button', 'a']

export default function ScratchToRevealSection({ backgroundChildren, coverImage }: Props) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    const img = new Image()

    const { width, height } = container.getBoundingClientRect()

    canvas.width = width
    canvas.height = height

    img.onload = () => {
      ctx?.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height)
    }

    img.src = coverImage.url
  }, [coverImage])

  const isTransparent = useCallback((x: number, y: number) => {
    const canvas = canvasRef.current
    if (!canvas) return false

    const ctx = canvas.getContext('2d')

    if (!ctx) return false

    // Ensure x and y are within the canvas bounds
    if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) return false

    const pixel = ctx.getImageData(x, y, 1, 1).data
    return pixel[3] === 0 // Check the alpha channel
  }, [])

  const isClickableElement = useCallback((e: MouseEvent | TouchEvent) => {
    if (
      e.target &&
      (('tagName' in e.target &&
        typeof e.target.tagName === 'string' &&
        CLICKABLE_ELEMENTS.includes(e.target.tagName.toLowerCase())) ||
        ('onClick' in e.target && typeof e.target.onClick === 'function'))
    ) {
      return true
    }

    return false
  }, [])

  const stopDrawing = useCallback(() => {
    prevPos.current = null
  }, [])

  const prevPos = useRef<{
    canvasX: number
    canvasY: number
  } | null>(null)

  const draw = useCallback(({ canvasX, canvasY }: { canvasX: number; canvasY: number }) => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) {
      return
    }

    ctx.globalCompositeOperation = 'destination-out'
    ctx.lineWidth = 2 * BRUSH_RADIUS
    ctx.lineCap = 'round'

    ctx.beginPath()
    if (prevPos.current) {
      ctx.moveTo(prevPos.current.canvasX, prevPos.current.canvasY)
    } else {
      ctx.moveTo(canvasX, canvasY)
    }
    ctx.lineTo(canvasX, canvasY)
    ctx.stroke()

    prevPos.current = {
      canvasX,
      canvasY,
    }
  }, [])

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      e.preventDefault()
      stopDrawing()
    },
    [stopDrawing]
  )

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      e.preventDefault()

      if (isClickableElement(e)) return

      const canvas = canvasRef.current
      if (!canvas) return

      const bounds = canvas.getBoundingClientRect()

      const offsetX = e.clientX - bounds.left
      const offsetY = e.clientY - bounds.top

      draw({
        canvasX: offsetX,
        canvasY: offsetY,
      })

      if (isTransparent(e.offsetX, e.offsetY)) {
        canvas.style.pointerEvents = 'none'
      } else {
        canvas.style.pointerEvents = 'auto'
      }
    },
    [draw, isTransparent, isClickableElement]
  )

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      e.preventDefault()
      stopDrawing()
    },
    [stopDrawing]
  )

  const handleTouchCancel = useCallback(
    (e: TouchEvent) => {
      e.preventDefault()
      stopDrawing()
    },
    [stopDrawing]
  )

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      e.preventDefault()

      if (isClickableElement(e)) return

      const bounds = canvasRef.current?.getBoundingClientRect()

      if (!bounds) {
        return
      }

      const canvas = canvasRef.current
      if (!canvas) return

      draw({
        canvasX: e.touches[0].clientX - bounds.left,
        canvasY: e.touches[0].clientY - bounds.top,
      })

      if (isTransparent(e.touches[0].clientX - bounds.left, e.touches[0].clientY - bounds.top)) {
        canvas.style.pointerEvents = 'none'
      } else {
        canvas.style.pointerEvents = 'auto'
      }
    },
    [draw, isTransparent, isClickableElement]
  )

  useEffect(() => {
    const container = containerRef.current

    if (!container) return

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('touchmove', handleTouchMove)
    container.addEventListener('touchend', handleTouchEnd)
    container.addEventListener('touchcancel', handleTouchCancel)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
      container.removeEventListener('touchcancel', handleTouchCancel)
    }
  }, [handleMouseMove, handleTouchMove])

  return (
    <section className="relative w-full select-none @container" ref={containerRef}>
      {backgroundChildren}
      <canvas
        className="absolute left-0 top-0 mx-auto block cursor-crosshair object-cover"
        ref={canvasRef}
      />
    </section>
  )
}
