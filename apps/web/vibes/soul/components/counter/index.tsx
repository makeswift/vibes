import { DecrementButton } from './decrement-button'
import { IncrementButton } from './increment-button'

interface Props {
  id: string
  current?: number
  max?: number
  decrementAriaLabel?: string
  incrementAriaLabel?: string
  updateLineItemQuantityAction({ id, quantity }: { id: string; quantity: number }): Promise<void>
}

// TODO: This can be refactored for the PDP page. Use Input instead of span.

export const Counter = function Counter({
  id,
  current = 0,
  max,
  decrementAriaLabel,
  incrementAriaLabel,
  updateLineItemQuantityAction,
}: Props) {
  const decrement = () => {
    return current - 1
  }
  const increment = () => {
    return Math.min(current + 1, max ?? current + 1)
  }

  return (
    <div className="flex items-center rounded-lg border">
      <form action={updateLineItemQuantityAction.bind(null, { id, quantity: decrement() })}>
        <DecrementButton ariaLabel={decrementAriaLabel} />
      </form>
      <span className="flex w-8 select-none justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ">
        {current}
      </span>
      <form action={updateLineItemQuantityAction.bind(null, { id, quantity: increment() })}>
        <IncrementButton ariaLabel={incrementAriaLabel} />
      </form>
    </div>
  )
}
