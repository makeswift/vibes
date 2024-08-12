import AnnouncementBar from '@/vibes/soul/components/announcement-bar'
import Carousel from '@/vibes/soul/components/card-carousel'
import CategoryCard from '@/vibes/soul/components/category-card'
import { CompareDrawer } from '@/vibes/soul/components/compare-drawer'
import Footer from '@/vibes/soul/components/footer'
import Header from '@/vibes/soul/components/header'
import Pagination from '@/vibes/soul/components/pagination'
import ProductList from '@/vibes/soul/components/product-list'
import ProductsHeader from '@/vibes/soul/components/products-header'
import { categories } from '@/vibes/soul/examples/card-carousel'
import { compareProducts } from '@/vibes/soul/examples/compare-drawer'
import { footerLinks } from '@/vibes/soul/examples/footer'
import { headerLinks } from '@/vibes/soul/examples/header'
import { productsList } from '@/vibes/soul/examples/product-list'

export const ProductsPage = function ProductsPage() {
  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>
      <Header links={headerLinks} logo={{ alt: 'SOUL' }} />
      <ProductsHeader title="All Men" numberOfProducts={32} />
      <ProductList products={productsList} />
      <Pagination pages={5} />
      <Carousel title="Recently Viewed" link={{ label: 'Shop All', href: '/' }}>
        {categories.map(category => (
          <CategoryCard key={category.label} {...category} />
        ))}
      </Carousel>
      <CompareDrawer products={compareProducts} />
      <Footer sections={footerLinks} logo="SOUL" />
    </>
  )
}

export default ProductsPage
