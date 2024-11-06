import { getLineItems, getSubtotal } from '@/vibes/soul/data/line-items'
import { locales } from '@/vibes/soul/data/locales'
import { action } from '@/vibes/soul/examples/primitives/inline-email-form/actions'
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions'
import { logo, navigationLinks } from '@/vibes/soul/examples/primitives/navigation/electric'
import { checkoutAction, lineItemAction } from '@/vibes/soul/examples/sections/cart/actions'
import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/electric'
import { Banner } from '@/vibes/soul/primitives/banner'
import { Navigation } from '@/vibes/soul/primitives/navigation'
import { Cart } from '@/vibes/soul/sections/cart'
import { Footer } from '@/vibes/soul/sections/footer'
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

export default async function Preview() {
  const lineItems = await getLineItems('Warm')
  const subtotal = await getSubtotal('Warm')

  return (
    <>
      <Banner>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </Banner>

      <Navigation
        links={navigationLinks}
        logo={logo}
        cartHref="#"
        accountHref="#"
        locales={locales}
        activeLocaleId="en"
        localeAction={localeAction}
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
        lineItemAction={lineItemAction}
        checkoutAction={checkoutAction}
      />

      <Subscribe
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        action={action}
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
