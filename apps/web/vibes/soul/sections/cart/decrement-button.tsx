'use client'

import { useActionState, useEffect } from 'react'

import { clsx } from 'clsx'
import { Minus } from 'lucide-react'

import { Action } from './remove-button'

export function DecrementButton({
  id,
  quantity,
  action,
  ariaLabel,
}: {
  id: string
  quantity: number
  action: Action<{ error: string | null }, { id: string; quantity: number }>
  ariaLabel?: string
}) {
  const [{ error }, formAction, isPending] = useActionState(action, { error: null })

  useEffect(() => {
    if (error != null) console.error(error)
  })

  return (
    <form action={formAction.bind(null, { id, quantity: quantity - 1 })}>
      <button
        className={clsx(
          'group rounded-l-lg p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          isPending || quantity === 1 ? 'opacity-50' : 'hover:bg-contrast-100/50'
        )}
        aria-label={ariaLabel ?? 'Decrease Count'}
        type="submit"
        disabled={isPending || quantity === 1}
      >
        <Minus
          className={clsx(
            'text-contrast-300 transition-colors duration-300 ',
            isPending || quantity === 1 ? '' : 'group-hover:text-foreground'
          )}
          strokeWidth={1.5}
          size={18}
        />
      </button>
    </form>
  )
}
