import ProductsPage from '@/vibes/soul/components/page-products'
import { breadcrumbs } from '@/vibes/soul/examples/breadcrumbs-warm'
import { copyright, footerLinks, logo } from '@/vibes/soul/examples/footer-warm'
import { headerLinks } from '@/vibes/soul/examples/header-warm'
import { products } from '@/vibes/soul/examples/products-list-warm'

export default function Preview() {
  return (
    <ProductsPage
      headerLinks={headerLinks}
      logo={logo}
      title="All Bags"
      breadcrumbs={breadcrumbs}
      products={products}
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
