import { cards } from '@/vibes/soul/examples/primitives/card-carousel/warm'
import { feature } from '@/vibes/soul/examples/sections/feature/warm'
import { featuredImage } from '@/vibes/soul/examples/sections/featured-image/warm'
import { featuredProducts } from '@/vibes/soul/examples/sections/featured-products-list/warm'
import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/warm'
import { headerLinks } from '@/vibes/soul/examples/sections/header/warm'
import { heroSlides } from '@/vibes/soul/examples/sections/slideshow/warm'
import { AnnouncementBar } from '@/vibes/soul/primitives/announcement-bar'
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
import { Header } from '@/vibes/soul/sections/header'
import { Slideshow } from '@/vibes/soul/sections/slideshow'
import { Subscribe } from '@/vibes/soul/sections/subscribe'

// TODO: New Arrivals
// TODO: Recently Viewed

const logo = {
  src: 'https://rstr.in/monogram/vibes/JzEctN2uDqL',
  alt: 'Outer Shell Logo',
}

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

const locales = [
  { id: '1', region: 'US', language: 'EN' },
  { id: '2', region: 'FR', language: 'FR' },
  { id: '3', region: 'DE', language: 'DC' },
  { id: '4', region: 'IT', language: 'IT' },
]

export const featuredImageII: FeaturedImageProps = {
  title: 'Pro-Team',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
  image: {
    src: 'https://rstr.in/monogram/vibes/mQ0gb1u9_CO',
    alt: '',
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
        logo={logo}
        cartHref="#"
        accountHref="#"
        locales={locales}
        activeLocale="EN"
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
