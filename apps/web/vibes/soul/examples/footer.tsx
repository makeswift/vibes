import Image from 'next/image'

import { Facebook, Linkedin, Youtube } from 'lucide-react'

import Footer from '@/vibes/soul/components/footer'

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
]

const socialMediaLinks = [
  {
    href: '#',
    icon: <Facebook size={18} strokeWidth={1} />,
  },
  {
    href: '#',
    icon: <Linkedin size={18} strokeWidth={1} />,
  },
  {
    href: '#',
    icon: <Youtube size={18} strokeWidth={1} />,
  },
]

const paymentIconsArray: React.ReactNode[] = [
  <Image
    key={1}
    src="https://rstr.in/monogram/vibes/8hv4difQbxs"
    alt="Visa"
    width={35}
    height={24}
  />,
  <Image
    key={2}
    src="https://rstr.in/monogram/vibes/2si5pZsQe24"
    alt="Amex"
    width={35}
    height={24}
  />,
  <Image
    key={3}
    src="https://rstr.in/monogram/vibes/j5TMUICitrf"
    alt="Mastercard"
    width={35}
    height={24}
  />,
  <Image
    key={4}
    src="https://rstr.in/monogram/vibes/bpLWRFd4Myo"
    alt="Paypal"
    width={35}
    height={24}
  />,
  <Image
    key={5}
    src="https://rstr.in/monogram/vibes/cko6FUZ4dQB"
    alt="Google Pay"
    width={35}
    height={24}
  />,
  <Image
    key={6}
    src="https://rstr.in/monogram/vibes/doCkqTXefki"
    alt="Apple Pay"
    width={35}
    height={24}
  />,
  <Image
    key={7}
    src="https://rstr.in/monogram/vibes/yINUOYdzjlz"
    alt="Bitcoin"
    width={35}
    height={24}
  />,
]

export default function Preview() {
  return (
    <Footer
      sections={footerLinks}
      logo={{
        src: 'https://rstr.in/monogram/vibes/5UckSov0byo',
        altText: 'SOUL Logo',
      }}
      copyright={`© ${new Date().getFullYear()} SOUL - Powered by BigCommerce`}
      paymentIcons={paymentIconsArray}
      socialMediaLinks={socialMediaLinks}
      contactInformation={{
        address: 'info@mywebsite.com',
        phone: '+(1)408 123 4567',
      }}
    />
  )
}
