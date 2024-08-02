'use client'

import AnnouncementBar from '@/vibes/soul/components/announcement-bar'
import Carousel from '@/vibes/soul/components/carousel'
import CategoryCard from '@/vibes/soul/components/category-card'
import Footer from '@/vibes/soul/components/footer'
import Header from '@/vibes/soul/components/header'
import Newsletter from '@/vibes/soul/components/newsletter'
import { ProductCard } from '@/vibes/soul/components/product-card'
import { categories } from '@/vibes/soul/examples/carousel'
import { footerLinks } from '@/vibes/soul/examples/footer'
import { headerLinks } from '@/vibes/soul/examples/header'
import ProductDetail from '@/vibes/soul/examples/product-detail'

export const Products = function Products() {
  return (
    <div className="relative">
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>
      <div className="relative flex flex-col">
        <Header links={headerLinks} logo={{ alt: 'SOUL' }} />

        <ProductDetail
          product={
            {
              name: "Men's Long Sleeve Jersey",
              price: {
                type: 'static',
                value: 39.95,
              },
              image: 'https://rstr.in/monogram/vibes/pVfZNkBI_Rd',
              ctaLink: { href: '/' },
            } as ProductCard
          }
          images={[
            'https://rstr.in/monogram/vibes/pVfZNkBI_Rd',
            'https://rstr.in/monogram/vibes/nBQFO6MyZ34',
            'https://rstr.in/monogram/vibes/11zZTfNCpui',
            'https://rstr.in/monogram/vibes/h4YqOhXhxfm',
            'https://rstr.in/monogram/vibes/GQxaw-DlEYn',
            'https://rstr.in/monogram/vibes/WOTVa86be5S',
          ]}
          rating={4.5}
          content={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore.
            </p>
          }
          options={['XS', 'S', 'M', 'L', 'XL', 'XXL']}
        />

        {/* TODO: Add Review / Returns */}

        <Carousel title="New Arrivals" link={{ label: 'See All', href: '/' }}>
          {categories.map(category => (
            <CategoryCard key={category.label} {...category} />
          ))}
        </Carousel>

        <Newsletter
          heading="Sign up for our newsletter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          theme="light"
        />
        <Footer links={footerLinks} logo={{ alt: 'SOUL' }} companyName="Soul" />
      </div>
    </div>
  )
}

export default Products
