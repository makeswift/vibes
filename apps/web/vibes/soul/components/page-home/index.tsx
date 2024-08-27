import AnnouncementBar from '@/vibes/soul/components/announcement-bar'
import CardCarousel from '@/vibes/soul/components/card-carousel'
import Feature from '@/vibes/soul/components/feature'
import FeaturedImage from '@/vibes/soul/components/featured-image'
import FeaturedProductsCarousel from '@/vibes/soul/components/featured-products-carousel'
import FeaturedProductsList from '@/vibes/soul/components/featured-products-list'
import Footer from '@/vibes/soul/components/footer'
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
import Header from '@/vibes/soul/components/header'
import Slideshow from '@/vibes/soul/components/slideshow'
import Subscribe from '@/vibes/soul/components/subscribe'

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

export const HomePage = function HomePage({
  headerLinks,
  logo,
  heroSlides,
  categories,
  featuredProductsContent,
  featuredProducts,
  newArrivals,
  featuredImage,
  feature,
  featuredImageII,
  footerLinks,
  copyright,
}: any) {
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

      <CardCarousel cards={categories} />

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
        cta={{ label: featuredProductsContent.label, href: featuredProductsContent.href }}
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
        // contactInformation={{
        //   address: 'info@mywebsite.com',
        //   phone: '+(1)408 123 4567',
        // }}
        copyright={copyright}
        paymentIcons={paymentIconsArray}
        socialMediaLinks={socialMediaLinks}
      />
    </>
  )
}

export default HomePage
