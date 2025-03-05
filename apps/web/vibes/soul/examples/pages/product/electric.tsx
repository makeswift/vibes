import { getProducts } from '@/vibes/soul/data';
import { locales } from '@/vibes/soul/data/locales';
import { action as subscribeAction } from '@/vibes/soul/examples/sections/inline-email-form/actions';
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions';
import { navigationLinks } from '@/vibes/soul/examples/primitives/navigation/electric';
import { footerLinks, logo } from '@/vibes/soul/examples/sections/footer/electric';
import { action, fields } from '@/vibes/soul/examples/sections/product-detail/action';
import { product } from '@/vibes/soul/examples/sections/product-detail/electric';
import { reviews } from '@/vibes/soul/examples/sections/reviews';
import { Banner } from '@/vibes/soul/primitives/banner';
import { Navigation } from '@/vibes/soul/primitives/navigation';
import { FeaturedProductsCarousel } from '@/vibes/soul/sections/featured-products-carousel';
import { Footer } from '@/vibes/soul/sections/footer';
import { IconBlock } from '@/vibes/soul/sections/icon-block';
import { ProductDetail } from '@/vibes/soul/sections/product-detail';
import { Reviews } from '@/vibes/soul/sections/reviews';
import { Subscribe } from '@/vibes/soul/sections/subscribe';

export default async function Preview() {
  const featuredProducts = await getProducts('Electric');
  return (
    <>
      <Banner id="example-banner">
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </Banner>
      <div className="relative flex flex-col">
        <Navigation
          accountHref="#"
          activeLocaleId="en"
          cartHref="#"
          links={navigationLinks}
          localeAction={localeAction}
          locales={locales}
          logo={logo}
          searchHref="#"
        />

        <ProductDetail action={action} fields={fields} product={product} />

        <IconBlock
          list={[
            {
              icon: 'truck',
              title: 'Free Shipping',
              description: 'On orders over $250',
            },
            {
              icon: 'rotate-ccw',
              title: 'Free Returns',
              description: 'On full priced items only',
            },
            {
              icon: 'star',
              title: '2 Year Warranty',
              description: 'As standard',
            },
          ]}
        />
        <FeaturedProductsCarousel
          cta={{ label: 'See All', href: '#' }}
          products={featuredProducts}
          title="New Arrivals"
        />

        <Reviews averageRating={4.5} reviews={reviews} />

        <Subscribe
          action={subscribeAction}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          title="Sign up for our newsletter"
        />

        <Footer logo="SOUL" sections={footerLinks} />
      </div>
    </>
  );
}
