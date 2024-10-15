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

export const footerLinks = [
  {
    title: 'Categories',
    links: [
      { label: 'Handle Bags', href: '#' },
      { label: 'Frame Bags', href: '#' },
      { label: 'Seat Bags', href: '#' },
      { label: 'Rack Bags', href: '#' },
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
]

export const logo = {
  src: 'https://rstr.in/monogram/vibes/JzEctN2uDqL',
  alt: 'Outer Shell Logo',
}

export const socialMediaLinks = [
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

export const copyright = `© ${new Date().getFullYear().toString()} OUTER SHELL - Powered by Monogram`

export const contactInformation = {
  address: 'info@outershell.com',
  phone: '+(1) 408 123 4567',
}

export default function Preview() {
  return (
    <Footer
      sections={footerLinks}
      logo={logo}
      copyright={copyright}
      paymentIcons={paymentIconsArray}
      socialMediaLinks={socialMediaLinks}
      contactInformation={contactInformation}
    />
  )
}
