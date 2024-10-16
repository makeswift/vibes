import { logo, navigationLinks } from '@/vibes/soul/examples/primitives/navigation/luxury'
import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/luxury'
import { CartPage } from '@/vibes/soul/pages/cart'
import {
  redirectToCheckoutAction,
  removeLineItemAction,
  updateLineItemQuantityAction,
} from '@/vibes/soul/pages/cart/actions-luxury'
import { getLineItems, getSubtotal } from '@/vibes/soul/pages/cart/line-items-luxury'

export default async function Preview() {
  const lineItems = await getLineItems()
  const subtotal = await getSubtotal()
  return (
    <CartPage
      navigationLinks={navigationLinks}
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
