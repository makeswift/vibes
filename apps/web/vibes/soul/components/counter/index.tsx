import { DecrementButton } from './decrement-button'
import { IncrementButton } from './increment-button'

// This is the Counter Submission Component

// TODO: Since we need a Counter with an input and no submit buttons on the PDP page, should I create another reusable component? or should that be a one off instance and this remains the library component?

interface Props {
  id: string
  current?: number
  max?: number
  updateLineItemQuantityAction({ id, quantity }: { id: string; quantity: number }): Promise<void> //formData.get('id'), formData.get('quantity')
}

export const Counter = function Counter({
  id,
  current = 0,
  max,
  updateLineItemQuantityAction,
}: Props) {
  const decrement = () => {
    if (current > 1) {
      return current - 1
    } else {
      return current
    }
  }
  const increment = () => {
    return Math.min(current + 1, max ?? current + 1)
  }

  return (
    <div className="flex items-center rounded-lg border">
      <form action={updateLineItemQuantityAction.bind(null, { id, quantity: decrement() })}>
        <DecrementButton />
      </form>
      <span className="flex w-8 select-none justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ">
        {current}
      </span>
      <form action={updateLineItemQuantityAction.bind(null, { id, quantity: increment() })}>
        <IncrementButton />
      </form>
    </div>
  )
}
