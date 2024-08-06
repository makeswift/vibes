import React, { ReactNode, useEffect, useRef } from 'react'

import clsx from 'clsx'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export const SidePanel = function SidePanel({ isOpen, onClose, children }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    if (isOpen) {
      dialogRef.current?.showModal()
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
      timeoutRef.current = setTimeout(() => {
        dialogRef.current?.close()
      }, 300) // Delay unmounting to match the transition duration
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isOpen, onClose])

  return (
    <dialog ref={dialogRef} className="backdrop:bg-foreground/50" onClose={onClose}>
      <div
        ref={panelRef}
        className={clsx(
          'fixed right-0 top-0 z-50 h-full w-[500px] transition-transform duration-300 ease-out',
          // TODO: Panel should animate smoothly when opening and closing
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {children}
      </div>
    </dialog>
  )
}

export default SidePanel
