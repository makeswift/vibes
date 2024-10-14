import { DecrementButton } from './decrement-button'
import { IncrementButton } from './increment-button'

interface Props {
  current?: number
  max?: number
  decrementAriaLabel?: string
  incrementAriaLabel?: string
}

// TODO: This can be refactored for the PDP page. Use Input instead of span.

export const Counter = function Counter({
  current = 0,
  max,
  decrementAriaLabel,
  incrementAriaLabel,
}: Props) {
  const decrement = () => {
    return current - 1
  }
  const increment = () => {
    return Math.min(current + 1, max ?? current + 1)
  }

  return (
    <div className="flex items-center rounded-lg border">
      <DecrementButton ariaLabel={decrementAriaLabel} />
      <span className="flex w-8 select-none justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ">
        {current}
      </span>
      <IncrementButton ariaLabel={incrementAriaLabel} />
    </div>
  )
}
