import AnnouncementBar from '@/vibes/soul/components/announcement-bar'
import { CompareDrawer } from '@/vibes/soul/components/compare-drawer'
import FeaturedProductsCarousel from '@/vibes/soul/components/featured-products-carousel'
import Footer from '@/vibes/soul/components/footer'
import Header from '@/vibes/soul/components/header'
import Pagination from '@/vibes/soul/components/pagination'
import ProductsHeader from '@/vibes/soul/components/products-header'
import ProductsList from '@/vibes/soul/components/products-list'

const locales = [
  { id: '1', region: 'US', language: 'EN' },
  { id: '2', region: 'FR', language: 'FR' },
  { id: '3', region: 'DE', language: 'DC' },
  { id: '4', region: 'IT', language: 'IT' },
]

export const ProductsPage = function ProductsPage({
  headerLinks,
  logo,
  products,
  compareProducts,
  footerLinks,
  copyright,
}: any) {
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
      <ProductsHeader title="All Men" numberOfProducts={32} />
      <ProductsList products={products} />
      <Pagination pages={5} />
      <CompareDrawer products={compareProducts} />
      <FeaturedProductsCarousel title="Recently Viewed" products={products} />
      <Footer sections={footerLinks} logo={logo} copyright={copyright} />
    </>
  )
}

export default ProductsPage
