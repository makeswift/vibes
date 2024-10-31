'use client'

import { useActionState, useEffect } from 'react'

import { Plus } from 'lucide-react'

import { Action } from './remove-button'

export function LineItemQuantityIncrementButton({
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
    <form action={formAction.bind(null, { id, quantity: quantity + 1 })}>
      <button
        className="group rounded-r-lg p-3 transition-colors duration-300 hover:bg-contrast-100/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50"
        aria-label={ariaLabel ?? 'Increase Count'}
        type="submit"
        disabled={isPending}
      >
        <Plus
          className="text-contrast-300 transition-colors duration-300 group-hover:text-foreground"
          strokeWidth={1.5}
          size={18}
        />
      </button>
    </form>
  )
}
