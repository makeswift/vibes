import React, { useEffect, useRef } from 'react'

import clsx from 'clsx'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const SidePanel: React.FC<Props> = ({ isOpen, onClose, children }) => {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose])

  // TODO: Lock preview scroll
  // useEffect(() => {
  //   document.body.classList.toggle('overflow-hidden', isOpen)
  // }, [isOpen])

  return (
    <div
      role="dialog"
      className={clsx(
        'fixed inset-0 z-50 flex h-[100dvh] w-full justify-end overflow-hidden transition-colors duration-300',
        isOpen ? 'bg-foreground/50' : 'pointer-events-none bg-transparent'
      )}
    >
      <div
        ref={panelRef}
        className={clsx(
          'relative h-full transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-[110%]'
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default SidePanel
