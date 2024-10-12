import { CartPage } from '@/vibes/soul/components/page-cart'
import {
  removeLineItemAction,
  updateLineItemQuantityAction, // redirectToCheckoutAction,
} from '@/vibes/soul/components/page-cart/actions-luxury'
import { getProducts } from '@/vibes/soul/components/page-cart/products-luxury'
import { copyright, footerLinks } from '@/vibes/soul/examples/footer-luxury'
import { headerLinks, logo } from '@/vibes/soul/examples/header-luxury'

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
