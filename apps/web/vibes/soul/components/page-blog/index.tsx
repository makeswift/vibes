import { AnnouncementBar } from '@/vibes/soul/components/announcement-bar'
import { FeaturedBlogPostList } from '@/vibes/soul/components/featured-blog-post-list'
import { Footer } from '@/vibes/soul/components/footer'
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
import { Header } from '@/vibes/soul/components/header'
import { Subscribe } from '@/vibes/soul/components/subscribe'
import { posts } from '@/vibes/soul/examples/blog-post-list'
import { headerLinks } from '@/vibes/soul/examples/header-electric'

const socialMediaLinks = [
  {
    id: '1',
    href: '#',
    icon: <Facebook />,
  },
  {
    id: '2',
    href: '#',
    icon: <X />,
  },
  {
    id: '3',
    href: '#',
    icon: <Instagram />,
  },
  {
    id: '4',
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

export const BlogPage = function BlogPage() {
  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>

      <Header
        links={headerLinks}
        logo="SOUL"
        cartHref="#"
        accountHref="#"
        locales={locales}
        activeLocale="EN"
      />

      <FeaturedBlogPostList
        title="Plant Life"
        description="Expert Tips & Inspiration for Every Plant Lover"
        cta={{ href: '#', label: 'View All' }}
        posts={posts}
      />

      <Subscribe
        image={{
          src: 'https://rstr.in/monogram/vibes/m12FEyfnuDl',
          altText: 'Lady with plant',
        }}
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
        copyright={`© ${new Date().getFullYear().toString()} SOUL - Powered by Monogram`}
        paymentIcons={paymentIconsArray}
        socialMediaLinks={socialMediaLinks}
      />
    </>
  )
}
