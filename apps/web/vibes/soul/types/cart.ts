import { Image } from './image'

export interface CartSummary {
  title?: string
  caption?: string
  subtotalLabel?: string
  subtotal: string | Promise<string>
  shippingLabel?: string
  shipping?: string
  taxLabel?: string
  tax?: string | Promise<string>
  grandTotalLabel?: string
  grandTotal?: string | Promise<string>
  ctaLabel?: string
}

export interface CartProps {
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

export interface CartLineItem {
  id: string
  image: Image
  title: string
  subtitle: string
  quantity: number
  price: string
}

export interface CartEmptyState {
  title: string
  subtitle: string
  cta: {
    label: string
    href: string
  }
}
