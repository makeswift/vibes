import { getFilters, getSortOptions } from '@/vibes/soul/data'
import { AnnouncementBar } from '@/vibes/soul/primitives/announcement-bar'
import { Breadcrumb } from '@/vibes/soul/primitives/breadcrumbs'
import { Image, ProductCardProduct } from '@/vibes/soul/primitives/product-card'
import { FeaturedProductsCarousel } from '@/vibes/soul/sections/featured-products-carousel'
import { Footer, Section } from '@/vibes/soul/sections/footer'
import { Header, Links } from '@/vibes/soul/sections/header'
import { ProductsListSection } from '@/vibes/soul/sections/products-list-section'

interface ProductsPageProps {
  headerLinks: Links[]
  logo: string | Image
  breadcrumbs: Breadcrumb[]
  title: string
  products: ProductCardProduct[]
  footerLinks: Section[]
  copyright: string
}

const locales = [
  { id: '1', region: 'US', language: 'EN' },
  { id: '2', region: 'FR', language: 'FR' },
  { id: '3', region: 'DE', language: 'DC' },
  { id: '4', region: 'IT', language: 'IT' },
]

export const ProductsPage = function ProductsPage({
  headerLinks,
  logo,
  breadcrumbs,
  title,
  products,
  footerLinks,
  copyright,
}: ProductsPageProps) {
  const sortOptions = getSortOptions()
  const filters = getFilters('Warm')
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
        title={title}
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
