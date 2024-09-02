import CartPage from '@/vibes/soul/components/page-cart'
import { products } from '@/vibes/soul/examples/cart-warm'
import { copyright, footerLinks } from '@/vibes/soul/examples/footer-warm'
import { headerLinks, logo } from '@/vibes/soul/examples/header-warm'

export default function Preview() {
  return (
    <CartPage
      headerLinks={headerLinks}
      logo={logo}
      products={products}
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
