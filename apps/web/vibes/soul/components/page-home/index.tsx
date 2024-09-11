import { AnnouncementBar } from '@/vibes/soul/components/announcement-bar'
import { CardProps } from '@/vibes/soul/components/card'
import { CardCarousel } from '@/vibes/soul/components/card-carousel'
import { Feature, FeatureProps } from '@/vibes/soul/components/feature'
import { FeaturedImage, FeaturedImageProps } from '@/vibes/soul/components/featured-image'
import { FeaturedProductsCarousel } from '@/vibes/soul/components/featured-products-carousel'
import {
  FeaturedProductsList,
  FeaturedProductsListProps,
} from '@/vibes/soul/components/featured-products-list'
import { Footer, Section } from '@/vibes/soul/components/footer'
import {
  Amex,
  ApplePay,
  Bitcoin,
  GooglePay,
  Mastercard,
  Paypal,
  Visa,
} from '@/vibes/soul/components/footer/payment-icons'
import { Facebook, Instagram, X, Youtube } from '@/vibes/soul/components/footer/social-icons'
import { Header, Links } from '@/vibes/soul/components/header'
import { Product } from '@/vibes/soul/components/product-card'
import { Slide, Slideshow } from '@/vibes/soul/components/slideshow'
import { Subscribe } from '@/vibes/soul/components/subscribe'

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
  altText: string
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
}: {
  headerLinks: Links[]
  logo: string | Image
  heroSlides: Slide[]
  categories: CardProps[]
  textContrast?: 'light' | 'dark'
  featuredProducts: FeaturedProductsListProps
  newArrivals?: Product[]
  featuredImage: FeaturedImageProps
  feature: FeatureProps
  featuredImageII: FeaturedImageProps
  footerLinks: Section[]
  copyright: string
}) {
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
          altText: featuredImage.image.altText,
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
          altText: feature.image.altText,
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
          altText: featuredImageII.image.altText,
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
