import { getProducts } from '@/vibes/soul/data'
import { navigationLinks } from '@/vibes/soul/examples/primitives/navigation/warm'
import { footerLinks, logo } from '@/vibes/soul/examples/sections/footer/warm'
import {
  accordions,
  productDescriptionImage,
} from '@/vibes/soul/examples/sections/product-description/warm'
import { product } from '@/vibes/soul/examples/sections/product-detail/warm'
import { reviews } from '@/vibes/soul/examples/sections/reviews'
import { AnnouncementBar } from '@/vibes/soul/primitives/announcement-bar'
import { Navigation } from '@/vibes/soul/primitives/navigation'
import { FeaturedProductsCarousel } from '@/vibes/soul/sections/featured-products-carousel'
import { Footer } from '@/vibes/soul/sections/footer'
import { IconBlock } from '@/vibes/soul/sections/icon-block'
import { ProductDescription } from '@/vibes/soul/sections/product-description'
import { ProductDetail } from '@/vibes/soul/sections/product-detail'
import { Reviews } from '@/vibes/soul/sections/reviews'
import { Subscribe } from '@/vibes/soul/sections/subscribe'

const locales = [
  { id: '1', region: 'US', language: 'EN' },
  { id: '2', region: 'FR', language: 'FR' },
  { id: '3', region: 'DE', language: 'DC' },
  { id: '4', region: 'IT', language: 'IT' },
]

export default function Preview() {
  const featuredProducts = getProducts('Warm')

  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>
      <div className="relative flex flex-col">
        <Navigation
          links={navigationLinks}
          logo={logo}
          cartHref="#"
          accountHref="#"
          activeLocale="EN"
          locales={locales}
          searchHref="#"
        />

        <ProductDetail product={product} />

        <ProductDescription accordions={accordions} image={productDescriptionImage} />

        <IconBlock
          list={[
            {
              icon: 'Truck',
              title: 'Free Shipping',
              description: 'On orders over $250',
            },
            {
              icon: 'RotateCcw',
              title: 'Free Returns',
              description: 'On full priced items only',
            },
            {
              icon: 'Star',
              title: '2 Year Warranty',
              description: 'As standard',
            },
          ]}
        />
        <FeaturedProductsCarousel
          title="New Arrivals"
          cta={{ label: 'See All', href: '#' }}
          products={featuredProducts}
        />

        <Reviews reviews={reviews} averageRating={4.5} />

        <Subscribe
          title="Sign up for our newsletter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        />

        <Footer sections={footerLinks} logo="SOUL" />
      </div>
    </>
  )
}
