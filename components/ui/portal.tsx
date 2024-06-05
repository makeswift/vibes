'use client'

import { forwardRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export const Portal = forwardRef(function Portal({ children }: { children: React.ReactNode }) {
  const [doc, setDoc] = useState<Document | null>(null)

  useEffect(() => setDoc(document), [])

  return doc && createPortal(children, doc.body)
})
