import { ReactNode } from 'react';

import { locales } from '@/vibes/soul/data/locales';
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions';
import { logo, navigationLinks } from '@/vibes/soul/examples/primitives/navigation/luxury';
import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/luxury';
import { action } from '@/vibes/soul/examples/sections/inline-email-form/actions';
import { Banner } from '@/vibes/soul/primitives/banner';
import { Navigation } from '@/vibes/soul/primitives/navigation';
import { type Product } from '@/vibes/soul/primitives/product-card';
import { FeaturedProductCarousel } from '@/vibes/soul/sections/featured-product-carousel';
import { Footer } from '@/vibes/soul/sections/footer';
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
import { NotFound } from '@/vibes/soul/sections/not-found';
import { Subscribe } from '@/vibes/soul/sections/subscribe';

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
];

const paymentIconsArray: ReactNode[] = [
  <Visa key="Visa" />,
  <Amex key="Amex" />,
  <Mastercard key="Mastercard" />,
  <Paypal key="Paypal" />,
  <GooglePay key="GooglePay" />,
  <ApplePay key="ApplePay" />,
  <Bitcoin key="Bitcoin" />,
];

// Products
export const products: Product[] = [
  {
    id: '1',
    title: 'DARYA LUG SOLE FISHERMAN',
    subtitle: 'Cuoro Embossed Snake',
    badge: '',
    price: '$325',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo5MGE5YjM1ZS0wY2Q5LTQ2ZWQtOTg4My1iYTk0ZWQwNDA5ZDM=/darya-lug-2.webp',
      alt: 'DARYA LUG SOLE FISHERMAN',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'ROMA ROUND TOE BALLET FLAT',
    subtitle: 'Rust Closed Woven Calf',
    badge: 'New',
    price: {
      type: 'sale',
      previousValue: '$369.99',
      currentValue: '$129.99',
    },
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo3ZjAyMzkyYS1iN2ViLTQ0YzAtYmUxNi1kOThjMjk0MTU0ZGQ=/darya-lug.webp',
      alt: 'ROMA ROUND TOE BALLET FLAT',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpiMmI4ZmIwMC02NzY2LTQyNzMtYmRkYi00OGM4NGQ0YzAxZTg=/small-plant-clay-pot.jpeg',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '4',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'range',
      minValue: '$110',
      maxValue: '$150',
    },
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo4NDliYmI1Ni1lOTIwLTQ1ODMtOWU2MC1lN2I0Y2EyMGNhNmM=/medium-plant-black-pot.jpeg',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '5',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'sale',
      previousValue: '$170',
      currentValue: '$150',
    },
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozZWFjZDhlZi1lY2EzLTRiMzYtYTJkNS02ZGJkOWE4MzUwYjQ=/lJg081kQqvc.jpeg',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '6',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToyMTIwYzE1ZC01YzlkLTQ3MDgtOTZhOS1hZDkwYjVmNDAwZWY=/n0P83RMnClS%202930x3663.jpeg',
      alt: 'Product Name',
    },
    href: '#',
  },
];

export default function Preview() {
  return (
    <>
      <Banner id="example-banner">
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </Banner>

      <Navigation
        accountHref="#"
        activeLocaleId="en"
        cartHref="#"
        links={navigationLinks}
        localeAction={localeAction}
        locales={locales}
        logo={logo}
        searchHref="#"
      />

      <NotFound />

      <FeaturedProductCarousel products={products} title="Other products" />

      <Subscribe
        action={action}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        title="Sign up for our newsletter"
      />

      <Footer
        copyright={copyright}
        logo={logo}
        paymentIcons={paymentIconsArray}
        sections={footerLinks}
        socialMediaLinks={socialMediaLinks}
      />
    </>
  );
}
