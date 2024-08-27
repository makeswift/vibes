import AnnouncementBar from '@/vibes/soul/components/announcement-bar'
import CardCarousel from '@/vibes/soul/components/card-carousel'
import Feature from '@/vibes/soul/components/feature'
import FeaturedImage, { FeaturedImageProps } from '@/vibes/soul/components/featured-image'
import FeaturedProductsCarousel from '@/vibes/soul/components/featured-products-carousel'
import FeaturedProductsList from '@/vibes/soul/components/featured-products-list'
import Footer from '@/vibes/soul/components/footer'
import Header from '@/vibes/soul/components/header'
import Slideshow from '@/vibes/soul/components/slideshow'
import Subscribe from '@/vibes/soul/components/subscribe'
import { cards } from '@/vibes/soul/examples/card-carousel-blue'
import { featuredImage } from '@/vibes/soul/examples/featured-image-blue'
import {
  copyright,
  footerLinks,
  logo,
  paymentIconsArray,
  socialMediaLinks,
} from '@/vibes/soul/examples/footer-blue'
import { headerLinks, locales } from '@/vibes/soul/examples/header-blue'
import { heroSlides } from '@/vibes/soul/examples/slideshow-blue'

import { featuredProducts } from './featured-products-list-blue'
import { newArrivals } from './page-home-electric'

export const featuredProductsContent = {
  title: '',
  description: '',
  cta: {
    label: '',
    href: '#',
  },
}

// TODO: New Arrivals

const feature: Feature = {
  image: {
    src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9',
    altText: 'string',
  },
  title: 'Our Everday Tote',
  description: 'Fits Perfectly in a Basket',
  // grid: {
  //   icon: 'string',
  //   title: 'string',
  //   description: 'string',
  // },
  cta: {
    href: 'string',
    label: 'string',
  },
}

// TODO: Recently Viewed
export const featuredImageII: FeaturedImageProps = {
  title: 'Pro-Team',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
  image: {
    src: 'Close up of a plant',
    altText: '',
  },
  cta: { href: '#', label: 'Shop Now' },
}
// TODO: Footer

export default function Preview() {
  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>

      <Header
        links={headerLinks}
        logo="BLUE"
        cartHref="#"
        accountHref="#"
        locales={locales}
        activeLocale="EN"
      />

      <Slideshow slides={heroSlides} />

      {/* Categories Carousel */}
      <CardCarousel cards={cards} />

      <FeaturedImage
        title={featuredImage?.title}
        description={featuredImage?.description}
        image={{
          src: featuredImage?.image.src,
          altText: featuredImage?.image.altText,
        }}
        cta={{ href: '#', label: 'Shop Now' }}
      />

      <FeaturedProductsList
        title={featuredProductsContent.title}
        description={featuredProductsContent.description}
        // cta={{ label: featuredProductsContent.label, href: featuredProductsContent.href }}
        products={featuredProducts}
      />

      <Subscribe
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      />

      <FeaturedProductsCarousel
        title="New Arrivals"
        cta={{ label: 'See All', href: '#' }}
        products={newArrivals || featuredProducts}
      />

      <Feature
        image={{
          src: feature.image.src,
          altText: feature.image.altText,
        }}
        title={feature.title}
        description={feature.description}
        cta={{
          label: feature.cta.label,
          href: feature.cta.href,
        }}
      />

      <FeaturedProductsCarousel title="Recently Viewed" products={featuredProducts} />

      <FeaturedImage
        title={featuredImageII.title}
        description={featuredImageII.description}
        image={{
          src: featuredImageII.image.src,
          altText: featuredImageII.image.altText,
        }}
        cta={{ href: featuredImageII.cta.href, label: featuredImageII.cta.label }}
      />

      {/* <FeaturedVideo
          title="Pro-Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
          video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
          cta={{ href: '#', label: 'Shop Now' }}
          mediaAlign="left"
        /> */}

      <Subscribe
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      />

      <Footer
        logo={logo}
        sections={footerLinks}
        copyright={copyright}
        paymentIcons={paymentIconsArray}
        socialMediaLinks={socialMediaLinks}
      />
    </>
  )
}
