import { locales } from '@/vibes/soul/data/locales'
import { cards } from '@/vibes/soul/examples/primitives/card-carousel/electric'
import { action } from '@/vibes/soul/examples/primitives/inline-email-form/actions'
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions'
import { navigationLinks } from '@/vibes/soul/examples/primitives/navigation/electric'
import { feature } from '@/vibes/soul/examples/sections/feature/electric'
import { featuredImage } from '@/vibes/soul/examples/sections/featured-image/electric'
import { featuredProducts } from '@/vibes/soul/examples/sections/featured-products-list/electric'
import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/electric'
import { heroSlides } from '@/vibes/soul/examples/sections/slideshow/electric'
import { Banner } from '@/vibes/soul/primitives/banner'
import { Navigation } from '@/vibes/soul/primitives/navigation'
import { CardProduct } from '@/vibes/soul/primitives/product-card'
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

const logo = 'SOUL'

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

// Featured Products
export const newArrivals: CardProduct[] = [
  {
    id: '1',
    title: 'Heart to Heart',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/zyFDaG5bRQE',
      alt: 'Heart to Heart',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'Caladium Pink',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/AxXaqTzRozM',
      alt: 'Caladium Pink',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Caladium Angel Wing',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/vznZvupsj2y',
      alt: 'Caladium Angel Wing',
    },
    href: '#',
  },
  {
    id: '4',
    title: 'Philodendron Brandtianum',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/rDuYCY2nPNt',
      alt: 'Philodendron Brandtianum',
    },
    href: '#',
  },
  {
    id: '5',
    title: 'Silver Leaf Philodendron',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/UQMA3XLfWvF',
      alt: 'Silver Leaf Philodendron',
    },
    href: '#',
  },
  {
    id: '6',
    title: 'Pink Beauty Caladium',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/cMF-gCyIas9',
      alt: 'Pink Beauty Caladium',
    },
    href: '#',
  },
  {
    id: '7',
    title: 'Caladium Angel Wing',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/W_zhzrsEqp7',
      alt: 'Caladium Angel Wing',
    },
    href: '#',
  },
  {
    id: '8',
    title: 'Caladium Watermelon',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/HL613sp6BIP',
      alt: 'Caladium Watermelon',
    },
    href: '#',
  },
  {
    id: '9',
    title: 'Speckled Heart Caladium',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/afA-7qP8zih',
      alt: 'Speckled Heart Caladium',
    },
    href: '#',
  },
]

// TODO: New Arrivals
// TODO: Recently Viewed

export const featuredImageII: FeaturedImageProps = {
  title: 'Thoughtfully Curated',
  description:
    'Our team of plant experts inspects every leaf, stem, and root to guarantee quality, resilience, and beauty. We prioritize plants from sustainable growers who share our passion for eco-friendly practices, ensuring that every green addition to your home has been responsibly sourced and lovingly nurtured from the start.',
  image: {
    src: 'https://rstr.in/monogram/vibes/Ip8DYxJT8_b',
    alt: 'Close up of a plant',
  },
  cta: { href: '#', label: 'Shop Now' },
}

export default function Preview() {
  return (
    <>
      <Banner>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </Banner>
      <Navigation
        links={navigationLinks}
        logo={logo}
        cartHref="#"
        accountHref="#"
        locales={locales}
        activeLocaleId="en"
        localeAction={localeAction}
        searchHref="#"
      />
      <Slideshow slides={heroSlides} />
      <FeaturedCardCarousel
        title="Categories"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cta={{ label: 'Shop all', href: '/all' }}
        cards={cards}
      />
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
          label: featuredProducts.cta.label ?? '',
          href: featuredProducts.cta.href ?? '',
        }}
        products={featuredProducts.products}
      />
      <Subscribe
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        action={action}
      />
      <FeaturedProductsCarousel
        title="New Arrivals"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cta={{ label: 'See All', href: '#' }}
        products={newArrivals ?? featuredProducts.products}
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
      <Subscribe
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        action={action}
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
