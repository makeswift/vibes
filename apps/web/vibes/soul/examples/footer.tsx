'use client'

import Image from 'next/image'

import { Facebook, Linkedin, Youtube } from 'lucide-react'

import Footer from '@/vibes/soul/components/footer'

export const footerLinks = [
  {
    title: 'Categories',
    links: [
      { label: 'Coats & Jackets', href: '#' },
      { label: 'T-Shirts', href: '#' },
      { label: 'Sweatshirts', href: '#' },
      { label: 'Pants', href: '#' },
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

const copyright = `© ${new Date().getFullYear()} SOUL - Powered by BigCommerce`

const socialMediaLinks = [
  {
    href: '#',
    icon: <Facebook size={16} />,
  },
  {
    href: '#',
    icon: <Linkedin size={16} />,
  },
  {
    href: '#',
    icon: <Youtube size={16} />,
  },
]

const contactInformation = {
  address: 'info@mywebsite.com',
  phone: '+(1)408 123 4567',
}

const paymentIconsArray: React.ReactNode[] = [
  <Image src="https://rstr.in/monogram/vibes/8hv4difQbxs" alt="Visa" width={35} height={24} />,
  <Image src="https://rstr.in/monogram/vibes/2si5pZsQe24" alt="Amex" width={35} height={24} />,
  <Image
    src="https://rstr.in/monogram/vibes/j5TMUICitrf"
    alt="Mastercard"
    width={35}
    height={24}
  />,
  <Image src="https://rstr.in/monogram/vibes/bpLWRFd4Myo" alt="Paypal" width={35} height={24} />,
  <Image
    src="https://rstr.in/monogram/vibes/cko6FUZ4dQB"
    alt="Google Pay"
    width={35}
    height={24}
  />,
  <Image src="https://rstr.in/monogram/vibes/doCkqTXefki" alt="Apple Pay" width={35} height={24} />,
  <Image src="https://rstr.in/monogram/vibes/yINUOYdzjlz" alt="Bitcoin" width={35} height={24} />,
]

export default function Preview() {
  return (
    <Footer
      sections={footerLinks}
      logo={{
        src: 'https://rstr.in/monogram/vibes/5UckSov0byo',
        altText: 'SOUL Logo',
      }}
      copyright={copyright}
      paymentIcons={paymentIconsArray}
      socialMediaLinks={socialMediaLinks}
      contactInformation={contactInformation}
    />
  )
}
