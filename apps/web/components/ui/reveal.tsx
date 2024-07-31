'use client'

import { useState } from 'react'

import clsx from 'clsx'

import { Button } from './button'

function Reveal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative mb-8 md:mb-10">
      <Button
        className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2"
        size="small"
        onClick={() => setIsOpen(prev => !prev)}
      >
        {isOpen ? 'Show less' : 'Show more'}
      </Button>
      <div
        className={clsx(
          'border-b border-dashed border-foreground bg-contrast-100',
          isOpen ? 'h-auto overflow-auto pb-10' : 'h-40 overflow-hidden'
        )}
      >
        {children}
      </div>
    </div>
  )
}

export { Reveal }
