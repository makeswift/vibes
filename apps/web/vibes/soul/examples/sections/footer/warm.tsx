import { ReactNode } from 'react';

import { Footer, Section } from '@/vibes/soul/sections/footer';
import {
  Amex,
  ApplePay,
  Bitcoin,
  GooglePay,
  Mastercard,
  Paypal,
  Visa,
} from '@/vibes/soul/sections/footer/payment-icons';
import { Facebook, Instagram, X, Youtube } from '@/vibes/soul/sections/footer/social-icons';

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
];

export const logo = {
  src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpiYmVmODMwYi1mMDgyLTRiNTItOGZjNy0zMzNjZjVhYmU2Y2U=/outer-shell.png',
  alt: 'Outer Shell Logo',
};

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
];

const paymentIconsArray: React.ReactNode[] = [
  <Visa key="Visa" />,
  <Amex key="Amex" />,
  <Mastercard key="Mastercard" />,
  <Paypal key="Paypal" />,
  <GooglePay key="GooglePay" />,
  <ApplePay key="ApplePay" />,
  <Bitcoin key="Bitcoin" />,
];

export const copyright = `© ${new Date().getFullYear().toString()} OUTER SHELL - Designed by Monogram`;

export const contactInformation = {
  address: 'info@outershell.com',
  phone: '+(1) 408 123 4567',
};

export default function Preview() {
  const sectionsPromise = new Promise<Section[]>((res) => setTimeout(() => res(footerLinks), 1000));

  const logoPromise = new Promise<string | { src: string; alt: string }>((res) =>
    setTimeout(() => res(logo), 1000),
  );

  const copyrightPromise = new Promise<string>((res) => setTimeout(() => res(copyright), 1000));

  const paymentIconsPromise = new Promise<React.ReactNode[]>((res) =>
    setTimeout(() => res(paymentIconsArray), 1000),
  );

  const socialMediaLinksPromise = new Promise<
    Array<{
      href: string;
      icon: ReactNode;
    }>
  >((res) => setTimeout(() => res(socialMediaLinks), 1000));

  const contactInformationPromise = new Promise<{ address?: string; phone?: string }>((res) =>
    setTimeout(() => res(contactInformation), 1000),
  );
  return (
    <Footer
      contactInformation={contactInformationPromise}
      copyright={copyrightPromise}
      logo={logoPromise}
      paymentIcons={paymentIconsPromise}
      sections={sectionsPromise}
      socialMediaLinks={socialMediaLinksPromise}
    />
  );
}
