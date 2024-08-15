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
import SubscribeBasic from '@/vibes/soul/components/subscribe-basic'
import { featuredProducts } from '@/vibes/soul/examples/featured-products-list'
import { headerLinks } from '@/vibes/soul/examples/header'

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
  <Visa />,
  <Amex />,
  <Mastercard />,
  <Paypal />,
  <GooglePay />,
  <ApplePay />,
  <Bitcoin />,
]

const locales = [
  { id: '1', region: 'US', language: 'EN' },
  { id: '2', region: 'FR', language: 'FR' },
  { id: '3', region: 'DE', language: 'DC' },
  { id: '4', region: 'IT', language: 'IT' },
]

export const CatalystHomePage = function CatalystHomePage({ heroSlides }: any) {
  return (
    <>
      <Header
        links={headerLinks}
        logo="SOUL"
        cartHref="#"
        accountHref="#"
        activeLocale="EN"
        locales={locales}
      />

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

      <FeaturedProductsCarousel title="Recently Viewed" products={featuredProducts} />

      <SubscribeBasic
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      />

      <Footer
        logo="SOUL"
        sections={[
          {
            title: 'Categories',
            links: [
              { label: 'Coats & Jackets', href: '#' },
              { label: 'T-Shirts', href: '#' },
              { label: 'Sweatshirts', href: '#' },
              { label: 'Pants', href: '#' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '#' },
              { label: 'Stories', href: '#' },
              { label: 'Careers', href: '#' },
              { label: 'Stores', href: '#' },
            ],
          },
          {
            title: 'Help & Support',
            links: [
              { label: 'FAQs', href: '#' },
              { label: 'Contact Us', href: '#' },
              { label: 'Returns', href: '#' },
              { label: 'Shipping', href: '#' },
            ],
          },
        ]}
        contactInformation={{
          address: 'info@mywebsite.com',
          phone: '+(1)408 123 4567',
        }}
        copyright={`© ${new Date().getFullYear()} SOUL - Powered by BigCommerce`}
        paymentIcons={paymentIconsArray}
        socialMediaLinks={socialMediaLinks}
      />
    </>
  )
}

export default CatalystHomePage
