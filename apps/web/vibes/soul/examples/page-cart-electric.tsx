import { CartPage } from '@/vibes/soul/components/page-cart'
import { products } from '@/vibes/soul/examples/cart-electric'
import { copyright, footerLinks } from '@/vibes/soul/examples/footer-electric'
import { headerLinks } from '@/vibes/soul/examples/header-electric'

export default function Preview() {
  return (
    <CartPage
      headerLinks={headerLinks}
      logo="SOUL"
      products={products}
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
