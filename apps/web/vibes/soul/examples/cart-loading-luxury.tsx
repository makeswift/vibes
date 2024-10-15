import { Cart, CartLineItem } from '@/vibes/soul/components/cart'
import {
  redirectToCheckoutAction,
  removeLineItemAction,
  updateLineItemQuantityAction,
} from '@/vibes/soul/components/page-cart/actions-luxury'
import { getProducts, getSubtotal } from '@/vibes/soul/components/page-cart/products-luxury'

export default function Preview() {
  const products = new Promise<CartLineItem[]>(res => setTimeout(() => res(getProducts()), 5000))
  const subtotal = new Promise<string>(res => setTimeout(() => res(getSubtotal()), 10000))

  return (
    <Cart
      title="Cart"
      lineItems={products}
      summary={{
        title: 'Summary',
        subtotal: subtotal,
        caption: 'Shipping & taxes calculated at checkout',
        subtotalLabel: 'Subtotal',
        shippingLabel: 'Shipping',
        shipping: 'TBD',
        taxLabel: 'Tax',
        tax: 'TBD',
        // grandTotalLabel: 'Total',
        // grandTotal: '$127.60',
        ctaLabel: 'Checkout',
      }}
      emptyState={{
        title: 'Your cart is empty',
        subtitle: 'Add some products to get started.',
        cta: {
          label: 'Continue shopping',
          href: '#',
        },
      }}
      removeLineItemAction={removeLineItemAction}
      updateLineItemQuantityAction={updateLineItemQuantityAction}
      redirectToCheckoutAction={redirectToCheckoutAction}
    />
  )
}
