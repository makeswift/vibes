import { AnnouncementBar } from '@/vibes/soul/primitives/announcement-bar'
import { Breadcrumb } from '@/vibes/soul/primitives/breadcrumbs'
import { Product } from '@/vibes/soul/primitives/product-card'
import { FeaturedProductsCarousel } from '@/vibes/soul/sections/featured-products-carousel'
import { Footer, Section } from '@/vibes/soul/sections/footer'
import { Header, Links } from '@/vibes/soul/sections/header'
import { ProductsListSection } from '@/vibes/soul/sections/products-list-section'
import { Filter } from '@/vibes/soul/sections/products-list-section/filters'

interface Image {
  src: string
  alt: string
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

const filters: Filter[] = [
  {
    name: 'color',
    label: 'Color',
    type: 'checkbox-group',
    options: [
      { label: 'Red', value: 'red' },
      { label: 'Green', value: 'green' },
      { label: 'Blue', value: 'blue' },
    ],
  },
  {
    name: 'size',
    label: 'Size',
    type: 'checkbox-group',
    options: [
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
    ],
  },
  {
    name: 'price',
    label: 'Price',
    type: 'range',
    min: 0,
    max: 200,
    minLabel: '$',
    maxLabel: '$',
  },
  {
    name: 'rating',
    label: 'Rating',
    type: 'rating',
  },
]

const sortOptions = [
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
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
