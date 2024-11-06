import { getFilters, getProducts, getSortOptions } from '@/vibes/soul/data'
import { locales } from '@/vibes/soul/data/locales'
import { breadcrumbs } from '@/vibes/soul/examples/primitives/breadcrumbs/warm'
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions'
import { navigationLinks } from '@/vibes/soul/examples/primitives/navigation/warm'
import { copyright, footerLinks, logo } from '@/vibes/soul/examples/sections/footer/warm'
import { Banner } from '@/vibes/soul/primitives/banner'
import { Navigation } from '@/vibes/soul/primitives/navigation'
import { FeaturedProductsCarousel } from '@/vibes/soul/sections/featured-products-carousel'
import { Footer } from '@/vibes/soul/sections/footer'
import { ProductsListSection } from '@/vibes/soul/sections/products-list-section'

export default function Preview() {
  const products = getProducts('Warm')
  const sortOptions = getSortOptions()
  const filters = getFilters('Warm')

  return (
    <>
      <Banner>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </Banner>
      <Navigation
        links={navigationLinks}
        logo={logo}
        cartHref="#"
        accountHref="#"
        activeLocaleId="en"
        locales={locales}
        localeAction={localeAction}
        searchHref="#"
      />
      <ProductsListSection
        breadcrumbs={breadcrumbs}
        title="All Bags"
        products={products}
        totalCount={products.length}
        sortOptions={sortOptions}
        filters={filters}
      />
      <FeaturedProductsCarousel title="Recently Viewed" products={products} />
      <Footer sections={footerLinks} logo={logo} copyright={copyright} />
    </>
  )
}
