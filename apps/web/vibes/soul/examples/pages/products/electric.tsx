import { breadcrumbs } from '@/vibes/soul/examples/primitives/breadcrumbs/electric'
import { products } from '@/vibes/soul/examples/primitives/products-list/electric'
import { copyright, footerLinks, logo } from '@/vibes/soul/examples/sections/footer/electric'
import { headerLinks } from '@/vibes/soul/examples/sections/header/electric'
import { ProductsPage } from '@/vibes/soul/pages/products'

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
