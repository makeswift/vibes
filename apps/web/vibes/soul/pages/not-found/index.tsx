import { AnnouncementBar } from '@/vibes/soul/primitives/announcement-bar'
import { Product } from '@/vibes/soul/primitives/product-card'
import { ProductsCarousel } from '@/vibes/soul/primitives/products-carousel'
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
import { NotFound } from '@/vibes/soul/sections/not-found'
import { Subscribe } from '@/vibes/soul/sections/subscribe'

interface NotFoundPageProps {
  headerLinks: Links[]
  logo: Image | string
  products: Product[]
  textContrast?: 'light' | 'dark'
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

export const NotFoundPage = function NotFoundPage({
  headerLinks,
  logo,
  products,
  footerLinks,
  copyright,
}: NotFoundPageProps) {
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

      <NotFound />

      <ProductsCarousel products={products} />

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
