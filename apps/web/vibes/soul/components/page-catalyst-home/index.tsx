import Feature from '@/vibes/soul/components/feature'
import FeaturedImage from '@/vibes/soul/components/featured-image'
import FeaturedProductsList from '@/vibes/soul/components/featured-products-list'
import Footer from '@/vibes/soul/components/footer'
import Header from '@/vibes/soul/components/header'
import Slideshow from '@/vibes/soul/components/slideshow'
import SubscribeBasic from '@/vibes/soul/components/subscribe-basic'
import { featuredProducts } from '@/vibes/soul/examples/featured-products-list'
import { footerLinks } from '@/vibes/soul/examples/footer'
import { headerLinks } from '@/vibes/soul/examples/header'

import FeaturedProductsCarousel from '../featured-products-carousel'

export const CatalystHomePage = function CatalystHomePage({ heroSlides, categories }: any) {
  return (
    <>
      <Header links={headerLinks} logo="SOUL" cartHref="#" accountHref="#" />

      <Slideshow slides={heroSlides} />

      <FeaturedProductsCarousel
        title="New Arrivals"
        cta={{ label: 'See All', href: '#' }}
        products={featuredProducts}
      />

      <FeaturedImage
        title="Pro-Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
        image={{ src: 'https://rstr.in/monogram/vibes/7ayVnws_5R1', altText: 'Pro-Team' }}
        cta={{ href: '#', label: 'Shop Now' }}
      />

      <FeaturedProductsList
        title="Off-Race"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        cta={{ label: 'Shop Now', href: '#' }}
        products={featuredProducts}
      />

      <Feature
        image={{
          url: 'https://rstr.in/monogram/vibes/ZHUBk7gO45U',
          alt: 'Biker in Mountains',
        }}
        heading="A global community"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        link={{
          label: 'Shop Now',
          href: '#',
          target: '_self',
        }}
      />

      <FeaturedProductsCarousel title="Recently Viewed" products={featuredProducts} />

      <SubscribeBasic
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      />

      <Footer sections={footerLinks} logo="SOUL" />
    </>
  )
}

export default CatalystHomePage
