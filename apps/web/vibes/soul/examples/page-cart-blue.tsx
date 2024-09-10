import { CartPage } from '@/vibes/soul/components/page-cart'
import { products } from '@/vibes/soul/examples/cart-blue'
import { copyright, footerLinks } from '@/vibes/soul/examples/footer-blue'
import { headerLinks, logo } from '@/vibes/soul/examples/header-blue'

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
