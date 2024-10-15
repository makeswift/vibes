import { CartPage } from '@/vibes/soul/components/page-cart'
import {
  redirectToCheckoutAction,
  removeLineItemAction,
  updateLineItemQuantityAction,
} from '@/vibes/soul/components/page-cart/actions-warm'
import { getProducts, getSubtotal } from '@/vibes/soul/components/page-cart/products-warm'
import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/warm'
import { headerLinks, logo } from '@/vibes/soul/examples/sections/header/warm'

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
