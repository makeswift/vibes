import { headerLinks } from '@/vibes/soul/examples/primitives/navigation/electric'
import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/electric'
import { CartPage } from '@/vibes/soul/pages/cart'
import {
  redirectToCheckoutAction,
  removeLineItemAction,
  updateLineItemQuantityAction,
} from '@/vibes/soul/pages/cart/actions-electric'
import { getProducts, getSubtotal } from '@/vibes/soul/pages/cart/products-electric'

// eslint-disable-next-line @typescript-eslint/require-await
export default async function Preview() {
  const lineItems = await getProducts()
  const subtotal = await getSubtotal()
  return (
    <CartPage
      headerLinks={headerLinks}
      logo="SOUL"
      lineItems={lineItems}
      subtotal={subtotal}
      removeLineItemAction={removeLineItemAction}
      updateLineItemQuantityAction={updateLineItemQuantityAction}
      redirectToCheckoutAction={redirectToCheckoutAction}
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
