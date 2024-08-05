'use client'

import React, { useEffect } from 'react'

import './index.css'

interface Props {
  backgroundChildren: React.ReactNode
  coverImage: { url: string; alt: string }
}
export default function ScratchToRevealSection({ backgroundChildren, coverImage }: Props) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const brushRadius = 12
  React.useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const img = new Image()

    img.onload = () => {
      if (!canvas) return
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height)
    }
    img.setAttribute('src', coverImage.url)

    function detectLeftButton(event: MouseEvent | React.MouseEvent | TouchEvent) {
      if ('buttons' in event) {
        return event.buttons === 1
      } else if ('which' in event) {
        return event.which === 1
      } else {
        return event.button === 1
      }
    }
    function getBrushPos(xRef: number, yRef: number) {
      const rect = canvas.getBoundingClientRect()
      return {
        x: Math.floor(((xRef - rect.left) / (rect.right - rect.left)) * canvas.width),
        y: Math.floor(((yRef - rect.top) / (rect.bottom - rect.top)) * canvas.height),
      }
    }
    function drawDot(mouseX: number, mouseY: number) {
      if (!ctx) return
      ctx.beginPath()
      ctx.arc(mouseX, mouseY, brushRadius, 0, 2 * Math.PI, true)
      ctx.fillStyle = '#000'
      ctx.globalCompositeOperation = 'destination-out'
      ctx.fill()
    }
    function isTransparent(x: number, y: number) {
      if (!ctx) return false
      // Ensure x and y are within the canvas bounds
      if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) return false

      const pixel = ctx.getImageData(x, y, 1, 1).data
      return pixel[3] === 0 // Check the alpha channel
    }
    const handleMouseMove = (e: MouseEvent) => {
      const brushPos = getBrushPos(e.clientX, e.clientY)

      if (detectLeftButton(e)) {
        drawDot(brushPos.x, brushPos.y)
      }
    }
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      const touch = e.targetTouches[0]
      if (touch) {
        const brushPos = getBrushPos(touch.pageX, touch.pageY)
        drawDot(brushPos.x, brushPos.y)
      }
    }

    const handleDocumentMouseMove = (e: MouseEvent) => {
      const brushPos = getBrushPos(e.clientX, e.clientY)
      const transparent = isTransparent(brushPos.x, brushPos.y)

      if (!transparent && canvas.style.pointerEvents === 'none') {
        canvas.style.pointerEvents = 'auto'
      } else if (transparent && canvas.style.pointerEvents !== 'none' && !detectLeftButton(e)) {
        canvas.style.pointerEvents = 'none'
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousemove', handleDocumentMouseMove)
    canvas.addEventListener('touchmove', handleTouchMove)
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('mousemove', handleDocumentMouseMove)
    }
  }, [coverImage.url])

  useEffect(() => {}, [])
  return (
    <section className="relative w-full ">
      {backgroundChildren}
      <canvas id="scratch" className="absolute top-0 h-full w-full" ref={canvasRef} />
    </section>
  )
}
