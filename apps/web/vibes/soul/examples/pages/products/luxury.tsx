import { getFilters, getProducts, getSortOptions } from '@/vibes/soul/data'
import { breadcrumbs } from '@/vibes/soul/examples/primitives/breadcrumbs/luxury'
import { copyright, footerLinks, logo } from '@/vibes/soul/examples/sections/footer/luxury'
import { headerLinks } from '@/vibes/soul/examples/sections/header/luxury'
import { AnnouncementBar } from '@/vibes/soul/primitives/announcement-bar'
import { FeaturedProductsCarousel } from '@/vibes/soul/sections/featured-products-carousel'
import { Footer } from '@/vibes/soul/sections/footer'
import { Header } from '@/vibes/soul/sections/header'
import { ProductsListSection } from '@/vibes/soul/sections/products-list-section'

const locales = [
  { id: '1', region: 'US', language: 'EN' },
  { id: '2', region: 'FR', language: 'FR' },
  { id: '3', region: 'DE', language: 'DC' },
  { id: '4', region: 'IT', language: 'IT' },
]

export default function Preview() {
  const products = getProducts('Luxury')
  const sortOptions = getSortOptions()
  const filters = getFilters('Luxury')

  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>
      <Header
        links={headerLinks}
        logo={logo}
        cartHref="#"
        accountHref="#"
        activeLocale="EN"
        locales={locales}
      />
      <ProductsListSection
        breadcrumbs={breadcrumbs}
        title="All Shoes"
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
