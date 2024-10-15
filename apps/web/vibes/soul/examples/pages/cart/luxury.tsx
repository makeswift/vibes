import { CartPage } from '@/vibes/soul/components/page-cart'
import {
  redirectToCheckoutAction,
  removeLineItemAction,
  updateLineItemQuantityAction,
} from '@/vibes/soul/components/page-cart/actions-luxury'
import { getProducts, getSubtotal } from '@/vibes/soul/components/page-cart/products-luxury'
import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/luxury'
import { headerLinks, logo } from '@/vibes/soul/examples/sections/header/luxury'

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
