'use client'

import AnnouncementBar from '@/vibes/soul/components/announcement-bar'
import Footer from '@/vibes/soul/components/footer'
import Header from '@/vibes/soul/components/header'
import ProductList from '@/vibes/soul/components/product-list'
import { footerLinks } from '@/vibes/soul/examples/footer'
import { headerLinks } from '@/vibes/soul/examples/header'
import { productsList } from '@/vibes/soul/examples/product-list'

import ProductsHeader from '../products-header'

export const ProductsPage = function ProductsPage() {
  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>
      <div className="relative flex flex-col">
        <Header links={headerLinks} logo={{ alt: 'SOUL' }} />

        <ProductsHeader title="All Men" numberOfProducts={32} />
        <ProductList products={productsList} />

        <Footer links={footerLinks} logo={{ alt: 'SOUL' }} companyName="Soul" />
      </div>
    </>
  )
}

export default ProductsPage
