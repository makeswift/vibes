import { locales } from '@/vibes/soul/data/locales'
import { cards } from '@/vibes/soul/examples/primitives/card-carousel/luxury'
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions'
import { navigationLinks } from '@/vibes/soul/examples/primitives/navigation/luxury'
import { feature } from '@/vibes/soul/examples/sections/feature/luxury'
import { featuredImage } from '@/vibes/soul/examples/sections/featured-image/luxury'
import { featuredProducts } from '@/vibes/soul/examples/sections/featured-products-list/luxury'
import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/luxury'
import { heroSlides } from '@/vibes/soul/examples/sections/slideshow/luxury'
import { AnnouncementBar } from '@/vibes/soul/primitives/announcement-bar'
import { Navigation } from '@/vibes/soul/primitives/navigation'
import { Feature } from '@/vibes/soul/sections/feature'
import { FeaturedCardCarousel } from '@/vibes/soul/sections/featured-card-carousel'
import { FeaturedImage, FeaturedImageProps } from '@/vibes/soul/sections/featured-image'
import { FeaturedProductsCarousel } from '@/vibes/soul/sections/featured-products-carousel'
import { FeaturedProductsList } from '@/vibes/soul/sections/featured-products-list'
import { Footer } from '@/vibes/soul/sections/footer'
import {
  Amex,
  ApplePay,
  Bitcoin,
  GooglePay,
  Mastercard,
  Paypal,
  Visa,
} from '@/vibes/soul/sections/footer/payment-icons'
import { Facebook, Instagram, X, Youtube } from '@/vibes/soul/sections/footer/social-icons'
import { Slideshow } from '@/vibes/soul/sections/slideshow'
import { Subscribe } from '@/vibes/soul/sections/subscribe'

const logo = { src: 'https://rstr.in/monogram/vibes/DVHsMCuLQID', alt: 'Freda Salvador' }

const socialMediaLinks = [
  {
    href: '#',
    icon: <Facebook />,
  },
  {
    href: '#',
    icon: <X />,
  },
  {
    href: '#',
    icon: <Instagram />,
  },
  {
    href: '#',
    icon: <Youtube />,
  },
]

const paymentIconsArray: React.ReactNode[] = [
  <Visa key="Visa" />,
  <Amex key="Amex" />,
  <Mastercard key="Mastercard" />,
  <Paypal key="Paypal" />,
  <GooglePay key="GooglePay" />,
  <ApplePay key="ApplePay" />,
  <Bitcoin key="Bitcoin" />,
]

export const featuredImageII: FeaturedImageProps = {
  title: 'Handmade in Spain',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
  image: {
    src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz',
    alt: '',
  },
  cta: { href: '#', label: 'Shop Now' },
}

export default function Preview() {
  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>
      <Navigation
        links={navigationLinks}
        logo={logo}
        cartHref="#"
        accountHref="#"
        locales={locales}
        activeLocaleId="US"
        localeAction={localeAction}
        searchHref="#"
      />
      <Slideshow slides={heroSlides} />
      <FeaturedCardCarousel title="Categories" cards={cards} />
      <FeaturedImage
        title={featuredImage.title}
        description={featuredImage.description}
        image={{
          src: featuredImage.image.src,
          alt: featuredImage.image.alt,
        }}
        cta={{ href: '#', label: 'Shop Now' }}
      />
      <FeaturedProductsList
        title={featuredProducts.title}
        description={featuredProducts.description}
        cta={{
          label: featuredProducts.cta?.label ?? '',
          href: featuredProducts.cta?.href ?? '',
        }}
        products={featuredProducts.products}
      />
      <Subscribe
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      />
      <FeaturedProductsCarousel
        title="New Arrivals"
        cta={{ label: 'See All', href: '#' }}
        products={featuredProducts.products}
      />
      <Feature
        image={{
          src: feature.image.src,
          alt: feature.image.alt,
        }}
        title={feature.title}
        description={feature.description}
        cta={{
          label: feature.cta.label,
          href: feature.cta.href,
        }}
      />
      <FeaturedProductsCarousel title="Recently Viewed" products={featuredProducts.products} />
      <FeaturedImage
        title={featuredImageII.title}
        description={featuredImageII.description}
        image={{
          src: featuredImageII.image.src,
          alt: featuredImageII.image.alt,
        }}
        cta={{ href: featuredImageII.cta.href, label: featuredImageII.cta.label }}
      />
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
