import { locales } from '@/vibes/soul/data/locales';
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions';
import { logo, navigationLinks } from '@/vibes/soul/examples/primitives/navigation/electric';
import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/electric';
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
    title: 'Heart to Heart',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTplZDg3NmU0OC1jODI1LTQ0YTgtODAzZi02OTg0YTE4ODE2MzU=/heart-to-heart.jpeg',
      alt: 'Heart to Heart',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'Caladium Pink',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpjZmYzMzkzNS03NzlhLTQ5ZTUtOGM3Ny1lZjA2MmUyMjZlNTk=/sun-or-shade.jpeg',
      alt: 'Caladium Pink',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Caladium Angel Wing',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkNGU0ODM3NC1jZjQzLTRjMDItOThlMi1iYjcwMDJmZmFjMDc=/angel-wing.jpeg',
      alt: 'Caladium Angel Wing',
    },
    href: '#',
  },
  {
    id: '4',
    title: 'Philodendron Brandtianum',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpiZjZjY2QwMC02NWE4LTQ1YjYtODg0MS02YzRmNDlmYzIwZjE=/philodendron-brandtianum.jpeg',
      alt: 'Philodendron Brandtianum',
    },
    href: '#',
  },
  {
    id: '5',
    title: 'Silver Leaf Philodendron',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTplYzg3NTEzMi04OTU4LTQ4Y2QtYjZmYS1jMzU4MGRkZjRlMTI=/silver-leaf.jpeg',
      alt: 'Silver Leaf Philodendron',
    },
    href: '#',
  },
  {
    id: '6',
    title: 'Pink Beauty Caladium',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1ZmM1ODkzYi1hZDFhLTQ2YmYtYTYzZS0zMzNlZGYyNWM5MmE=/pink-beauty.jpeg',
      alt: 'Pink Beauty Caladium',
    },
    href: '#',
  },
  {
    id: '7',
    title: 'Caladium Angel Wing',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkNGU0ODM3NC1jZjQzLTRjMDItOThlMi1iYjcwMDJmZmFjMDc=/angel-wing.jpeg',
      alt: 'Caladium Angel Wing',
    },
    href: '#',
  },
  {
    id: '8',
    title: 'Caladium Watermelon',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowYTA1YzBjNS0zMzU3LTQ5MWMtOWNjZS01OGM3YjcxNTgzNWI=/caladium-watermelon.jpeg',
      alt: 'Caladium Watermelon',
    },
    href: '#',
  },
  {
    id: '9',
    title: 'Speckled Heart Caladium',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo4YTE5ZWVkZC1lMjc4LTQwM2YtYjJlOC03MDQ5MGEzMjU1YzU=/speckled-heart.jpeg',
      alt: 'Speckled Heart Caladium',
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

      <FeaturedProductCarousel products={products} title="Featured Products" />

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
