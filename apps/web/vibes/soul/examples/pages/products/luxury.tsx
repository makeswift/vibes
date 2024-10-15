import { ProductsPage } from '@/vibes/soul/components/page-products'
import { breadcrumbs } from '@/vibes/soul/examples/primitives/breadcrumbs/luxury'
import { products } from '@/vibes/soul/examples/primitives/products-list/luxury'
import { copyright, footerLinks, logo } from '@/vibes/soul/examples/sections/footer/luxury'
import { headerLinks } from '@/vibes/soul/examples/sections/header/luxury'

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
