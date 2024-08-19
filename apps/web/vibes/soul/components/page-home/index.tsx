import AnnouncementBar from '@/vibes/soul/components/announcement-bar'
import CardCarousel from '@/vibes/soul/components/card-carousel'
import Feature from '@/vibes/soul/components/feature'
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
import { featuredProducts } from '@/vibes/soul/examples/featured-products-list'
import { headerLinks } from '@/vibes/soul/examples/header'

import FeaturedImage from '../featured-image'

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

export const HomePage = function HomePage({ heroSlides, categories, newArrivals }: any) {
  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>

      <div className="relative flex flex-col">
        <Header
          links={headerLinks}
          logo="SOUL"
          cartHref="#"
          accountHref="#"
          locales={locales}
          activeLocale="EN"
        />

        <Slideshow slides={heroSlides} />

        <CardCarousel cards={categories} />

        <FeaturedImage
          title="Pro-Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
          image={{
            src: 'https://rstr.in/monogram/vibes/J7ckF24ZWrQ',
            altText: 'Close up of a plant',
          }}
          cta={{ href: '#', label: 'Shop Now' }}
        />

        <FeaturedProductsList
          title="Our Plants"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          cta={{ label: 'Shop Now', href: '#' }}
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
            url: 'https://rstr.in/monogram/vibes/hmVsJqRS2jJ',
            alt: 'Close up of a plant',
          }}
          heading="For Your Home"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
          link={{
            label: 'Shop Now',
            href: '#',
            target: '_self',
          }}
        />

        <FeaturedProductsCarousel title="Recently Viewed" products={featuredProducts} />

        <FeaturedImage
          title="Pro-Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
          image={{
            src: 'https://rstr.in/monogram/vibes/Ip8DYxJT8_b',
            altText: 'Close up of a plant',
          }}
          cta={{ href: '#', label: 'Shop Now' }}
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
      </div>
    </>
  )
}

export default HomePage
