'use client'

import { useFormStatus } from 'react-dom'

import { clsx } from 'clsx'
import { Trash2 } from 'lucide-react'

import { Spinner } from '@/vibes/soul/components/spinner'

export function DeleteLineItemButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      aria-label="Remove Item"
      className={clsx(
        '-ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4',
        !pending && 'hover:bg-contrast-100'
      )}
      disabled={pending}
    >
      {pending ? <Spinner size="sm" /> : <Trash2 strokeWidth={1} size={18} />}
    </button>
  )
}