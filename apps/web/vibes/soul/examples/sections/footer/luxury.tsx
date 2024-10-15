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

export const footerLinks = [
  {
    title: 'Shoes',
    links: [
      { label: 'Sandals', href: '#' },
      { label: 'Heels', href: '#' },
      { label: 'Loafers', href: '#' },
      { label: 'Boots', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Locations', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Reviews', href: '#' },
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
  src: 'https://rstr.in/monogram/vibes/DVHsMCuLQID',
  alt: 'Freda Salvador Logo',
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

export const paymentIconsArray: React.ReactNode[] = [
  <Visa key="Visa" />,
  <Amex key="Amex" />,
  <Mastercard key="Mastercard" />,
  <Paypal key="Paypal" />,
  <GooglePay key="GooglePay" />,
  <ApplePay key="ApplePay" />,
  <Bitcoin key="Bitcoin" />,
]

export const copyright = `© ${new Date().getFullYear().toString()} FREDA SALVADOR - Powered by Monogram`

export const contactInformation = {
  address: 'info@freda.com',
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
