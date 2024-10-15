import { AnnouncementBar } from '@/vibes/soul/components/announcement-bar'
import { CardProps } from '@/vibes/soul/components/card'
import { CardCarousel } from '@/vibes/soul/components/card-carousel'
import { Feature, FeatureProps } from '@/vibes/soul/components/feature'
import { FeaturedImage, FeaturedImageProps } from '@/vibes/soul/components/featured-image'
import { Product } from '@/vibes/soul/components/product-card'
import { FeaturedProductsCarousel } from '@/vibes/soul/sections/featured-products-carousel'
import {
  FeaturedProductsList,
  FeaturedProductsListProps,
} from '@/vibes/soul/sections/featured-products-list'
import { Footer, Section } from '@/vibes/soul/sections/footer'
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
import { Header, Links } from '@/vibes/soul/sections/header'
import { Slide, Slideshow } from '@/vibes/soul/sections/slideshow'
import { Subscribe } from '@/vibes/soul/sections/subscribe'

interface HomePageProps {
  headerLinks: Links[]
  logo: string | Image
  heroSlides: Slide[]
  categories: (CardProps & { id: string })[]
  textContrast?: 'light' | 'dark'
  featuredProducts: FeaturedProductsListProps
  newArrivals?: Product[]
  featuredImage: FeaturedImageProps
  feature: FeatureProps
  featuredImageII: FeaturedImageProps
  footerLinks: Section[]
  copyright: string
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

interface Image {
  src: string
  alt: string
}

export const HomePage = function HomePage({
  headerLinks,
  logo,
  heroSlides,
  categories,
  textContrast,
  featuredProducts,
  newArrivals,
  featuredImage,
  feature,
  featuredImageII,
  footerLinks,
  copyright,
}: HomePageProps) {
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

      <CardCarousel cards={categories} textContrast={textContrast} />

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
