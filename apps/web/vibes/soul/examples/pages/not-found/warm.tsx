import { locales } from '@/vibes/soul/data/locales';
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions';
import { logo, navigationLinks } from '@/vibes/soul/examples/primitives/navigation/warm';
import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/warm';
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

const paymentIconsArray: React.ReactNode[] = [
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
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'range',
      minValue: '$120',
      maxValue: '$150',
    },
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowNzAzMzk0Ni01NGNhLTQ3ZDYtODgyYi0wYWI3NTUzNTU4YjQ=/kv08IvX08j.jpeg',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'sale',
      previousValue: '$149.99',
      currentValue: '$129.99',
    },
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/AaZW4j2VTd4%202489x3111.jpeg',
      alt: 'Product Name',
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
