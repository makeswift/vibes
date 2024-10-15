'use client'

import { useActionState, useEffect } from 'react'

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
        className="group rounded-l-lg p-3 hover:bg-contrast-100/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label={ariaLabel ?? 'Decrease Count'}
        type="submit"
        disabled={isPending || quantity === 1}
      >
        <Minus
          className="text-contrast-300 transition-colors duration-300 group-hover:text-foreground"
          strokeWidth={1.5}
          size={18}
        />
      </button>
    </form>
  )
}
