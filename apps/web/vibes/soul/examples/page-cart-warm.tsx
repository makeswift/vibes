import { CartPage } from '@/vibes/soul/components/page-cart'
import {
  removeLineItemAction,
  updateLineItemQuantityAction, // redirectToCheckoutAction,
} from '@/vibes/soul/components/page-cart/actions-warm'
import { getProducts } from '@/vibes/soul/components/page-cart/products-warm'
import { copyright, footerLinks } from '@/vibes/soul/examples/footer-warm'
import { headerLinks, logo } from '@/vibes/soul/examples/header-warm'

export default async function Preview() {
  const products = await getProducts()
  return (
    <CartPage
      headerLinks={headerLinks}
      logo={logo}
      products={products}
      removeLineItemAction={removeLineItemAction}
      updateLineItemQuantityAction={updateLineItemQuantityAction}
      // redirectToCheckoutAction={redirectToCheckoutAction}
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
