import ProductsPage from '@/vibes/soul/components/page-products'
import { copyright, footerLinks, logo } from '@/vibes/soul/examples/footer-warm'
import { headerLinks } from '@/vibes/soul/examples/header-warm'
import { products } from '@/vibes/soul/examples/products-list-warm'

export default function Preview() {
  return (
    <ProductsPage
      headerLinks={headerLinks}
      logo={logo}
      title="All Bags"
      products={products}
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
