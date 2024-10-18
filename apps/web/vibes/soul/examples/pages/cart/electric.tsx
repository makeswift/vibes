import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/electric'
import { headerLinks } from '@/vibes/soul/examples/sections/header/electric'
import { CartPage } from '@/vibes/soul/pages/cart'
import {
  redirectToCheckoutAction,
  removeLineItemAction,
  updateLineItemQuantityAction,
} from '@/vibes/soul/pages/cart/actions-electric'
import { getLineItems, getSubtotal } from '@/vibes/soul/pages/cart/line-items-electric'

// eslint-disable-next-line @typescript-eslint/require-await
export default async function Preview() {
  const lineItems = await getLineItems()
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
