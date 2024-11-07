import { subscribe } from 'diagnostics_channel'

import { getProducts } from '@/vibes/soul/data'
import { locales } from '@/vibes/soul/data/locales'
import { action as subscribeAction } from '@/vibes/soul/examples/primitives/inline-email-form/actions'
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions'
import { navigationLinks } from '@/vibes/soul/examples/primitives/navigation/electric'
import { footerLinks, logo } from '@/vibes/soul/examples/sections/footer/electric'
import {
  accordions,
  productDescriptionImage,
} from '@/vibes/soul/examples/sections/product-description/electric'
import { action, fields } from '@/vibes/soul/examples/sections/product-detail/action'
import { product } from '@/vibes/soul/examples/sections/product-detail/electric'
import { reviews } from '@/vibes/soul/examples/sections/reviews'
import { Banner } from '@/vibes/soul/primitives/banner'
import { Navigation } from '@/vibes/soul/primitives/navigation'
import { FeaturedProductsCarousel } from '@/vibes/soul/sections/featured-products-carousel'
import { Footer } from '@/vibes/soul/sections/footer'
import { IconBlock } from '@/vibes/soul/sections/icon-block'
import { ProductDescription } from '@/vibes/soul/sections/product-description'
import { ProductDetail } from '@/vibes/soul/sections/product-detail'
import { Reviews } from '@/vibes/soul/sections/reviews'
import { Subscribe } from '@/vibes/soul/sections/subscribe'

export default function Preview() {
  const featuredProducts = getProducts('Electric')
  return (
    <>
      <Banner>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </Banner>
      <div className="relative flex flex-col">
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

        <ProductDetail product={product} fields={fields} action={action} />

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
          action={subscribeAction}
        />

        <Footer sections={footerLinks} logo="SOUL" />
      </div>
    </>
  )
}
