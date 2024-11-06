'use client'

import { useEffect } from 'react'

export function ZoomListener() {
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data.type === 'zoom') {
        document.body.style.setProperty('zoom', String(event.data.zoom))
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  })

  return null
}
