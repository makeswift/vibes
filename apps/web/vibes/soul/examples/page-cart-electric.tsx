import { CartPage } from '@/vibes/soul/components/page-cart'
import {
  redirectToCheckoutAction,
  removeLineItemAction,
  updateLineItemQuantityAction,
} from '@/vibes/soul/components/page-cart/actions-electric'
import { getProducts, getSubtotal } from '@/vibes/soul/components/page-cart/products-electric'
import { copyright, footerLinks } from '@/vibes/soul/examples/footer-electric'
import { headerLinks } from '@/vibes/soul/examples/header-electric'

// eslint-disable-next-line @typescript-eslint/require-await
export default async function Preview() {
  const products = await getProducts()
  const subtotal = await getSubtotal()
  return (
    <CartPage
      headerLinks={headerLinks}
      logo="SOUL"
      products={products}
      subtotal={subtotal}
      removeLineItemAction={removeLineItemAction}
      updateLineItemQuantityAction={updateLineItemQuantityAction}
      redirectToCheckoutAction={redirectToCheckoutAction}
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
