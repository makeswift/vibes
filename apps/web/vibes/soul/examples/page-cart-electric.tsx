import { CartPage } from '@/vibes/soul/components/page-cart'
import {
  removeLineItemAction,
  updateLineItemQuantityAction, // redirectToCheckoutAction,
} from '@/vibes/soul/components/page-cart/actions-electric'
import { getProducts } from '@/vibes/soul/components/page-cart/products-electric'
import { copyright, footerLinks } from '@/vibes/soul/examples/footer-electric'
import { headerLinks } from '@/vibes/soul/examples/header-electric'

// eslint-disable-next-line @typescript-eslint/require-await
export default async function Preview() {
  const products = await getProducts()

  return (
    <CartPage
      headerLinks={headerLinks}
      logo="SOUL"
      products={products}
      removeLineItemAction={removeLineItemAction}
      updateLineItemQuantityAction={updateLineItemQuantityAction}
      // redirectToCheckoutAction={redirectToCheckoutAction}
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
