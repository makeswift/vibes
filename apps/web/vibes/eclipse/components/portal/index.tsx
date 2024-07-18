'use client'

import { forwardRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

function useDocument(): Document | null {
  const [doc, setDoc] = useState<Document | null>(null)

  useEffect(() => {
    setDoc(document)
  }, [])

  return doc
}

export const Portal = forwardRef(function BodyMask({ children }: { children: React.ReactNode }) {
  const doc = useDocument()

  return doc && createPortal(children, doc.body)
})

export default Portal
