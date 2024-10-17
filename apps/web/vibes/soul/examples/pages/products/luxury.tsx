import { getProducts } from '@/vibes/soul/data'
import { breadcrumbs } from '@/vibes/soul/examples/primitives/breadcrumbs/luxury'
import { copyright, footerLinks, logo } from '@/vibes/soul/examples/sections/footer/luxury'
import { headerLinks } from '@/vibes/soul/examples/sections/header/luxury'
import { ProductsPage } from '@/vibes/soul/pages/products'

export default function Preview() {
  const products = getProducts('Luxury')
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
