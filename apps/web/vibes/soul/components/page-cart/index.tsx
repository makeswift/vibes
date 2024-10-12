import { AnnouncementBar } from '@/vibes/soul/components/announcement-bar'
import { Cart, CartLineItem } from '@/vibes/soul/components/cart'
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

import { removeLineItemAction } from './actions'

interface Image {
  src: string
  altText: string
}
interface CartPageProps {
  headerLinks: Links[]
  logo: string | Image
  products: CartLineItem[]
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

      <Cart
        title="Cart"
        lineItems={products}
        summary={{
          title: 'Cart',
          subtotal: '$116',
          caption: 'Shipping & taxes calculated at checkout',
          subtotalLabel: 'Subtotal',
          shippingLabel: 'Shipping',
          taxLabel: 'Tax',
          grandTotalLabel: 'Total',
          tax: '$11.60',
          grandTotal: '$127.60',
          cta: {
            label: 'Checkout',
            href: '#',
          },
        }}
        emptyState={{
          title: 'Your cart is empty',
          subtitle: 'Add some products to get started.',
          cta: {
            label: 'Continue shopping',
            href: '#',
          },
        }}
        removeLineItemAction={removeLineItemAction}
        // updateLineItemQuantityAction={updateLineItemQuantityAction}
        // redirectToCheckoutAction={}
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
