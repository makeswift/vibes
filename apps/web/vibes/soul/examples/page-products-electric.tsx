import { ProductsPage } from '@/vibes/soul/components/page-products'
import { breadcrumbs } from '@/vibes/soul/examples/breadcrumbs-electric'
import { copyright, footerLinks, logo } from '@/vibes/soul/examples/footer-electric'
import { headerLinks } from '@/vibes/soul/examples/header-electric'
import { products } from '@/vibes/soul/examples/products-list-electric'

export default function Preview() {
  return (
    <ProductsPage
      headerLinks={headerLinks}
      logo={logo}
      title="All Plants"
      breadcrumbs={breadcrumbs}
      products={products}
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
