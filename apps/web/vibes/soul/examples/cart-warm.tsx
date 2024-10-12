import { Cart } from '@/vibes/soul/components/cart'
import {
  removeLineItemAction,
  updateLineItemQuantityAction,
} from '@/vibes/soul/components/page-cart/actions-warm'
import { getProducts } from '@/vibes/soul/components/page-cart/products-warm'

export default async function Preview() {
  const products = await getProducts()

  return (
    <Cart
      title="Cart"
      lineItems={products}
      summary={{
        title: 'Summary',
        subtotal: '$116',
        caption: 'Shipping & taxes calculated at checkout',
        subtotalLabel: 'Subtotal',
        shippingLabel: 'Shipping',
        taxLabel: 'Tax',
        tax: '$11.60',
        grandTotalLabel: 'Total',
        grandTotal: '$127.60',
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
      // redirectToCheckoutAction={}
    />
  )
}
