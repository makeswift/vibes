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

  // TODO: Lock preview scroll
  // useEffect(() => {
  //   document.body.classList.toggle('overflow-hidden', isOpen)
  // }, [isOpen])

  return (
    <dialog
      ref={dialogRef}
      className={clsx(
        'absolute right-0 top-0 flex h-[100vh] w-full justify-end overflow-hidden border border-green-500 bg-transparent',
        !isOpen && 'pointer-events-none'
      )}
      onClose={onClose}
    >
      <div
        ref={panelRef}
        className={clsx(
          'z-50 h-full border border-blue-500',
          'transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {children}
      </div>
    </dialog>
  )
}

export default SidePanel
