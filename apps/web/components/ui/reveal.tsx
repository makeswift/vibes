'use client'

import { clsx } from 'clsx'
import { useState } from 'react'

import { Button } from './button'

function Reveal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative my-5 last:mb-0 md:my-6">
      <div className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2">
        <Button size="small" onClick={() => setIsOpen(prev => !prev)}>
          {isOpen ? 'Show less' : 'Show more'}
        </Button>
      </div>

      {!isOpen && (
        <div className="pointer-events-none absolute inset-x-0 bottom-[1px] top-0 z-10 bg-gradient-to-b from-transparent to-contrast-100" />
      )}

      <div
        className={clsx(
          'border-b border-dashed border-contrast-400 bg-contrast-100',
          isOpen ? 'max-h-[70vh] overflow-auto pb-10' : 'max-h-40 overflow-hidden'
        )}
      >
        {children}
      </div>
    </div>
  )
}

export { Reveal }
