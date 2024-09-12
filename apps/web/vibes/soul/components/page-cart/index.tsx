import { AnnouncementBar } from '@/vibes/soul/components/announcement-bar'
import { Cart, CartProduct } from '@/vibes/soul/components/cart'
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
import { Subscribe } from '@/vibes/soul/components/subscribe'

interface Image {
  src: string
  altText: string
}
interface CartPageProps {
  headerLinks: Links[]
  logo: string | Image
  products: CartProduct[]
  footerLinks: Section[]
  copyright: string
}

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

export const CartPage = function CartPage({
  headerLinks,
  logo,
  products,
  footerLinks,
  copyright,
}: CartPageProps) {
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

      <Cart products={products} />

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
