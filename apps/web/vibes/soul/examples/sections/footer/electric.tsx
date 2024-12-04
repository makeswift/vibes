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
    title: 'Categories',
    links: [
      { label: 'Small Plants', href: '#' },
      { label: 'Low Maintenance', href: '#' },
      { label: 'Indestructible', href: '#' },
      { label: 'Succulents', href: '#' },
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
  {
    title: 'Help & Support',
    links: [
      { label: 'FAQs', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'Shipping', href: '#' },
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

export const logo = 'SOUL'

export const paymentIconsArray: React.ReactNode[] = [
  <Visa key="Visa" />,
  <Amex key="Amex" />,
  <Mastercard key="Mastercard" />,
  <Paypal key="Paypal" />,
  <GooglePay key="GooglePay" />,
  <ApplePay key="ApplePay" />,
  <Bitcoin key="Bitcoin" />,
]

export const copyright = `© ${new Date().getFullYear().toString()} SOUL - Powered by Monogram`

export const contactInformation = {
  address: 'info@soul.com',
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
