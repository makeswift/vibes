'use client'

import { cn } from '@/lib/utils'

import { AlertIcon, CheckIcon, CrossIcon, InfoIcon } from '../icons'

interface Props {
  message: string
  type: 'success' | 'error' | 'info'
  onClose?: () => void
}

export default function AlertBox({ message, type, onClose }: Props) {
  const Icon = type === 'success' ? CheckIcon : type === 'error' ? AlertIcon : InfoIcon

  const textColor =
    type === 'success' ? 'text-success' : type === 'error' ? 'text-error' : 'text-foreground'

  return (
    <div className="w-full @container">
      <div
        className={cn(
          'relative mx-auto flex min-h-[3.75rem] w-full max-w-[30.3125rem] items-center gap-4 border-2 border-foreground p-4 font-body text-sm font-medium leading-6',
          textColor
        )}
      >
        <div>
          <Icon className="h-4 w-4" />
        </div>
        <div className="max-w-[24.3125rem]">{message}</div>
        <button className="ml-auto h-4 w-4 text-foreground" onClick={onClose}>
          <CrossIcon />
        </button>
      </div>
    </div>
  )
}
