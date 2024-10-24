import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/warm'
import { headerLinks, logo } from '@/vibes/soul/examples/sections/header/warm'
import { CartPage } from '@/vibes/soul/pages/cart'
import {
  redirectToCheckoutAction,
  removeLineItemAction,
  updateLineItemQuantityAction,
} from '@/vibes/soul/pages/cart/actions-warm'
import { getProducts, getSubtotal } from '@/vibes/soul/pages/cart/products-warm'

export default async function Preview() {
  const lineItems = await getProducts()
  const subtotal = await getSubtotal()
  return (
    <CartPage
      headerLinks={headerLinks}
      logo={logo}
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
