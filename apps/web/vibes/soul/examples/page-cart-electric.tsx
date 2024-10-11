import { CartPage } from '@/vibes/soul/components/page-cart'
import { getProducts } from '@/vibes/soul/components/page-cart/products'
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
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
