import { ProductsPage } from '@/vibes/soul/components/page-products'
import { breadcrumbs } from '@/vibes/soul/examples/breadcrumbs-blue'
import { copyright, footerLinks, logo } from '@/vibes/soul/examples/footer-blue'
import { headerLinks } from '@/vibes/soul/examples/header-blue'
import { products } from '@/vibes/soul/examples/products-list-blue'

export default function Preview() {
  return (
    <ProductsPage
      headerLinks={headerLinks}
      logo={logo}
      title="All"
      breadcrumbs={breadcrumbs}
      products={products}
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
