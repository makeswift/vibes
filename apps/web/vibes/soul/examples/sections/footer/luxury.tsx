import { ReactNode } from 'react'

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
  const sectionsPromise = new Promise<Section[]>(res => setTimeout(() => res(footerLinks), 1000))

  const logoPromise = new Promise<string | { src: string; alt: string }>(res =>
    setTimeout(() => res(logo), 1000)
  )

  const copyrightPromise = new Promise<string>(res => setTimeout(() => res(copyright), 1000))

  const paymentIconsPromise = new Promise<React.ReactNode[]>(res =>
    setTimeout(() => res(paymentIconsArray), 1000)
  )

  const socialMediaLinksPromise = new Promise<
    {
      href: string
      icon: ReactNode
    }[]
  >(res => setTimeout(() => res(socialMediaLinks), 1000))

  const contactInformationPromise = new Promise<{ address?: string; phone?: string }>(res =>
    setTimeout(() => res(contactInformation), 1000)
  )

  return (
    <Footer
      sections={sectionsPromise}
      logo={logoPromise}
      copyright={copyrightPromise}
      paymentIcons={paymentIconsPromise}
      socialMediaLinks={socialMediaLinksPromise}
      contactInformation={contactInformationPromise}
    />
  )
}
