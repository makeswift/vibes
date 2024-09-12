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
    id: '1',
    title: 'Shoes',
    links: [
      { id: '1', label: 'Sandals', href: '#' },
      { id: '2', label: 'Heels', href: '#' },
      { id: '3', label: 'Loafers', href: '#' },
      { id: '4', label: 'Boots', href: '#' },
    ],
  },
  {
    id: '2',
    title: 'Company',
    links: [
      { id: '1', label: 'About Us', href: '#' },
      { id: '2', label: 'Locations', href: '#' },
      { id: '3', label: 'Careers', href: '#' },
      { id: '4', label: 'Reviews', href: '#' },
    ],
  },
  {
    id: '3',
    title: 'Help & Support',
    links: [
      { id: '1', label: 'FAQs', href: '#' },
      { id: '2', label: 'Contact Us', href: '#' },
      { id: '3', label: 'Returns', href: '#' },
      { id: '4', label: 'Shipping', href: '#' },
    ],
  },
]

export const logo = {
  src: 'https://rstr.in/monogram/vibes/DVHsMCuLQID',
  altText: 'Freda Salvador Logo',
}

export const socialMediaLinks = [
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
