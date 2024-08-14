import Image from 'next/image'

import { Facebook, Linkedin, Youtube } from 'lucide-react'

import AnnouncementBar from '@/vibes/soul/components/announcement-bar'
import CardCarousel from '@/vibes/soul/components/card-carousel'
import Feature from '@/vibes/soul/components/feature'
import FeaturedProductsCarousel from '@/vibes/soul/components/featured-products-carousel'
import FeaturedProductsList from '@/vibes/soul/components/featured-products-list'
import FeaturedVideo from '@/vibes/soul/components/featured-video'
import Footer from '@/vibes/soul/components/footer'
import Header from '@/vibes/soul/components/header'
import Slideshow from '@/vibes/soul/components/slideshow'
import Subscribe from '@/vibes/soul/components/subscribe'
import { featuredProducts } from '@/vibes/soul/examples/featured-products-list'
import { headerLinks } from '@/vibes/soul/examples/header'

const copyright = `© ${new Date().getFullYear()} SOUL - Powered by BigCommerce`

const socialMediaLinks = [
  {
    href: '#',
    icon: <Facebook size={18} strokeWidth={1} />,
  },
  {
    href: '#',
    icon: <Linkedin size={18} strokeWidth={1} />,
  },
  {
    href: '#',
    icon: <Youtube size={18} strokeWidth={1} />,
  },
]

const paymentIconsArray: React.ReactNode[] = [
  <Image src="https://rstr.in/monogram/vibes/8hv4difQbxs" alt="Visa" width={35} height={24} />,
  <Image src="https://rstr.in/monogram/vibes/2si5pZsQe24" alt="Amex" width={35} height={24} />,
  <Image
    src="https://rstr.in/monogram/vibes/j5TMUICitrf"
    alt="Mastercard"
    width={35}
    height={24}
  />,
  <Image src="https://rstr.in/monogram/vibes/bpLWRFd4Myo" alt="Paypal" width={35} height={24} />,
  <Image
    src="https://rstr.in/monogram/vibes/cko6FUZ4dQB"
    alt="Google Pay"
    width={35}
    height={24}
  />,
  <Image src="https://rstr.in/monogram/vibes/doCkqTXefki" alt="Apple Pay" width={35} height={24} />,
  <Image src="https://rstr.in/monogram/vibes/yINUOYdzjlz" alt="Bitcoin" width={35} height={24} />,
]

export const HomePage = function HomePage({ heroSlides, categories }: any) {
  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>

      <div className="relative flex flex-col">
        <Header links={headerLinks} logo="SOUL" cartHref="#" accountHref="#" />

        <Slideshow slides={heroSlides} />

        <CardCarousel cards={categories} />

        <FeaturedVideo
          heading="Pro-Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
          video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
          link={{ href: '#', target: '_self' }}
        />

        <FeaturedProductsList
          title="Off-Race"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          cta={{ label: 'Shop Now', href: '#' }}
          products={featuredProducts}
        />

        <FeaturedVideo
          heading="Pro-Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
          video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
          link={{ href: '#', target: '_self' }}
          mediaAlign="right"
        />

        <Subscribe
          title="Sign up for our newsletter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          theme="brand-highlight"
        />

        <FeaturedProductsCarousel
          title="New Arrivals"
          cta={{ label: 'See All', href: '#' }}
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

        <FeaturedVideo
          heading="Pro-Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
          video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
          link={{ href: '#', target: '_self' }}
          mediaAlign="left"
        />

        <Subscribe
          title="Sign up for our newsletter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          theme="light"
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
          // paymentIcons={paymentIconsArray}
          // socialMediaLinks={socialMediaLinks}
        />
      </div>
    </>
  )
}

export default HomePage
