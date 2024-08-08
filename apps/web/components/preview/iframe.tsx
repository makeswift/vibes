'use client'

import { ComponentPropsWithoutRef, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props extends ComponentPropsWithoutRef<'iframe'> {
  children: React.ReactNode
  bodyStyle: React.CSSProperties
}

export function IFrame({ children, bodyStyle, ...rest }: Props) {
  const [iframe, setIframe] = useState<HTMLIFrameElement | null>(null)
  const [stylesheetLoaded, setStylesheetLoaded] = useState(false)
  const [styleLoaded, setStyleLoaded] = useState(false)

  useLayoutEffect(() => {
    const ownerDocument = iframe?.ownerDocument
    const contentDocument = iframe?.contentDocument

    if (!ownerDocument || !contentDocument) return

    ownerDocument.head.querySelectorAll('link[as="style"],link[rel="stylesheet"]').forEach(ele => {
      contentDocument.head.append(contentDocument.importNode(ele, true))
    })

    setTimeout(() => {
      setStylesheetLoaded(true)
    }, 40)
  }, [iframe])

  useLayoutEffect(() => {
    const contentDocument = iframe?.contentDocument

    if (!contentDocument) return

    Object.entries(bodyStyle).forEach(([key, value]) => {
      contentDocument.body.style.setProperty(key, value)
    })

    setTimeout(() => {
      setStyleLoaded(true)
    }, 40)
  }, [iframe, bodyStyle])

  return (
    <iframe {...rest} ref={setIframe}>
      {iframe?.contentDocument &&
        stylesheetLoaded &&
        styleLoaded &&
        createPortal(children, iframe.contentDocument.body)}
    </iframe>
  )
}
