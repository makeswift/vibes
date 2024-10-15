import CartEmptyState from './cart-empty-state'
import CartLineItem from './cart-line-item'
import CartSummary from './cart-summary'

export default interface CartProps {
  title?: string
  lineItems: CartLineItem[] | Promise<CartLineItem[]>
  summary: CartSummary
  emptyState: CartEmptyState
  removeItemAriaLabel?: string
  loadingAriaLabel?: string
  removeLineItemAction(id: string): Promise<void>
  decrementAriaLabel?: string
  incrementAriaLabel?: string
  updateLineItemQuantityAction({ id, quantity }: { id: string; quantity: number }): Promise<void>
  redirectToCheckoutAction(): Promise<void>
}
