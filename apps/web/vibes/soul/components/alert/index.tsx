'use client'

import { useEffect } from 'react'

import { clsx } from 'clsx'
import { AlertTriangle, Check, Info, X } from 'lucide-react'

interface Props {
  variant: 'error' | 'info' | 'success' | 'warning'
  message: string
  showAlert: boolean
  onClose: (showAlert: boolean) => void
}

export const Alert = function Alert({ variant, message, showAlert, onClose }: Props) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (showAlert) {
        onClose(false)
      }
    }, 3000)
    return () => clearTimeout(timeout)
  }, [showAlert, onClose])

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={clsx(
        'fixed right-2 top-2 flex min-w-64 max-w-96 rounded-lg border transition-[transform,opacity] duration-300',
        showAlert
          ? 'ease-[cubic-bezier(0.56,0.23,0.00,1.00)] translate-y-0 opacity-100'
          : '-translate-y-full opacity-0  ease-in',
        variant === 'error' && 'border-error bg-error-highlight',
        variant === 'info' && 'border-info bg-info-highlight',
        variant === 'success' && 'border-success bg-success-highlight',
        variant === 'warning' && 'border-warning bg-warning-highlight'
      )}
    >
      <div
        className={clsx(
          'ml-1 mt-1 flex h-5 w-5 items-center justify-center rounded-full p-1 text-background',
          variant === 'error' && 'border-error bg-error',
          variant === 'info' && 'border-info bg-info',
          variant === 'success' && 'border-success bg-success',
          variant === 'warning' && 'border-warning bg-warning'
        )}
      >
        {variant === 'info' && <Info size={20} strokeWidth={2} />}
        {variant === 'success' && <Check size={20} strokeWidth={3} />}
        {variant === 'warning' && <AlertTriangle size={20} strokeWidth={2} />}
        {variant === 'error' && <X size={20} strokeWidth={2} />}
      </div>
      <p className="p-2 py-1.5 pl-1.5 pr-6 text-sm leading-tight text-foreground">{message}</p>
      <button
        aria-label="Dismiss alert"
        onClick={e => {
          e.preventDefault()
          onClose(false)
        }}
        className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full text-foreground"
      >
        <X />
      </button>
    </div>
  )
}
