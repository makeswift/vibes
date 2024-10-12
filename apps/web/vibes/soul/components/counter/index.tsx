import { DecrementButton } from './decrement-button'
import { IncrementButton } from './increment-button'

// This is the Counter Submission Component

interface Props {
  id: string
  current?: number
  max?: number
  type?: 'button' | 'submit'
  updateLineItemQuantityAction({ id, quantity }: { id: string; quantity: number }): Promise<void> //formData.get('id'), formData.get('quantity')
}

// TODO: Clarify which Counter component (input or submission) should be the library component

export const Counter = function Counter({
  id,
  current = 0,
  max = 20,
  type = 'button',
  updateLineItemQuantityAction,
}: Props) {
  const decrement = () => {
    if (current > 0) {
      return current - 1
    } else {
      return current
    }
  }
  const increment = () => {
    if (current < max) {
      return current + 1
    } else {
      return current
    }
  }

  return (
    <div className="flex items-center rounded-lg border">
      <form action={updateLineItemQuantityAction.bind(null, { id, quantity: decrement() })}>
        <DecrementButton />
      </form>
      {/* TODO: Is this supposed to be an input? only in Library component */}
      <span className="flex w-8 select-none justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ">
        {current}
      </span>
      <form action={updateLineItemQuantityAction.bind(null, { id, quantity: increment() })}>
        <IncrementButton />
      </form>
    </div>
  )
}
