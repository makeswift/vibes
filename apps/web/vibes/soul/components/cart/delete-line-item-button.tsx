'use client'

import { useFormStatus } from 'react-dom'

import { clsx } from 'clsx'
import { Trash2 } from 'lucide-react'

import { Spinner } from '@/vibes/soul/components/spinner'

export function DeleteLineItemButton({
  label,
  loadingLabel,
}: {
  label: string | undefined
  loadingLabel?: string
}) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      aria-label={label ?? 'Remove Item'}
      className={clsx(
        '-ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4',
        !pending && 'hover:bg-contrast-100'
      )}
      disabled={pending}
    >
      {pending ? (
        <Spinner size="sm" loadingLabel={loadingLabel} />
      ) : (
        <Trash2 strokeWidth={1} size={18} />
      )}
    </button>
  )
}
