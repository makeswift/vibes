import { AnnouncementBar } from '@/vibes/soul/components/announcement-bar'
import { Breadcrumb } from '@/vibes/soul/components/breadcrumbs'
import { CompareProducts } from '@/vibes/soul/components/compare-products'
import { FeaturedProductsCarousel } from '@/vibes/soul/components/featured-products-carousel'
import { Footer, Section } from '@/vibes/soul/components/footer'
import { Header, Links } from '@/vibes/soul/components/header'
import { Product } from '@/vibes/soul/components/product-card'

interface Image {
  src: string
  altText: string
}

interface ProductsPageProps {
  headerLinks: Links[]
  logo: string | Image
  breadcrumbs: Breadcrumb[]
  title: string
  products: Product[]
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
      <CompareProducts breadcrumbs={breadcrumbs} title={title} products={products} pages={5} />
      <FeaturedProductsCarousel title="Recently Viewed" products={products} />
      <Footer sections={footerLinks} logo={logo} copyright={copyright} />
    </>
  )
}
