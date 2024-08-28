import ProductsPage from '@/vibes/soul/components/page-products'
import { breadcrumbs } from '@/vibes/soul/examples/breadcrumbs-luxury'
import { copyright, footerLinks, logo } from '@/vibes/soul/examples/footer-luxury'
import { headerLinks } from '@/vibes/soul/examples/header-luxury'
import { products } from '@/vibes/soul/examples/products-list-luxury'

export default function Preview() {
  return (
    <ProductsPage
      headerLinks={headerLinks}
      logo={logo}
      title="All Shoes"
      breadcrumbs={breadcrumbs}
      products={products}
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
