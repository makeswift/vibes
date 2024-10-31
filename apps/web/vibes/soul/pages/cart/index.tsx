import { AnnouncementBar } from '@/vibes/soul/primitives/announcement-bar'
import { Links, Navigation } from '@/vibes/soul/primitives/navigation'
import { Cart, CartLineItem } from '@/vibes/soul/sections/cart'
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
import { Subscribe } from '@/vibes/soul/sections/subscribe'

interface Image {
  src: string
  alt: string
}
interface CartPageProps {
  navigationLinks: Links[]
  logo: string | Image
  lineItems: CartLineItem[] | Promise<CartLineItem[]>
  subtotal: string
  removeLineItemAction(id: string): Promise<void>
  updateLineItemQuantityAction({ id, quantity }: { id: string; quantity: number }): Promise<void>
  redirectToCheckoutAction(): Promise<void>
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
  navigationLinks,
  logo,
  lineItems,
  subtotal,
  removeLineItemAction,
  updateLineItemQuantityAction,
  redirectToCheckoutAction,
  footerLinks,
  copyright,
}: CartPageProps) {
  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>

      <Navigation
        links={navigationLinks}
        logo={logo}
        cartHref="#"
        accountHref="#"
        locales={locales}
        activeLocale="EN"
        searchHref="#"
      />

      <Cart
        title="Cart"
        lineItems={lineItems}
        summary={{
          title: 'Summary',
          subtotal: subtotal,
          caption: 'Shipping & taxes calculated at checkout',
          subtotalLabel: 'Subtotal',
          shippingLabel: 'Shipping',
          shipping: 'TBD',
          taxLabel: 'Tax',
          tax: 'TBD',
          // grandTotalLabel: 'Total',
          // grandTotal: '$127.60',
          ctaLabel: 'Checkout',
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
        updateLineItemQuantityAction={updateLineItemQuantityAction}
        redirectToCheckoutAction={redirectToCheckoutAction}
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
