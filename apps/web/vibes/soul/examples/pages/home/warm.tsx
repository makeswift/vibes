import { getProducts } from '@/vibes/soul/data';
import { locales } from '@/vibes/soul/data/locales';
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions';
import { navigationLinks } from '@/vibes/soul/examples/primitives/navigation/warm';
import { feature } from '@/vibes/soul/examples/sections/feature/warm';
import { featuredImage } from '@/vibes/soul/examples/sections/featured-image/warm';
import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/warm';
import { action } from '@/vibes/soul/examples/sections/inline-email-form/actions';
import { heroSlides } from '@/vibes/soul/examples/sections/slideshow/warm';
import { Banner } from '@/vibes/soul/primitives/banner';
import { Navigation } from '@/vibes/soul/primitives/navigation';
import { Feature } from '@/vibes/soul/sections/feature';
import { FeaturedCardCarousel } from '@/vibes/soul/sections/featured-card-carousel';
import { FeaturedImage, FeaturedImageProps } from '@/vibes/soul/sections/featured-image';
import { FeaturedProductCarousel } from '@/vibes/soul/sections/featured-product-carousel';
import { FeaturedProductList } from '@/vibes/soul/sections/featured-product-list';
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
import { Slideshow } from '@/vibes/soul/sections/slideshow';
import { Subscribe } from '@/vibes/soul/sections/subscribe';

// TODO: New Arrivals
// TODO: Recently Viewed

const logo = {
  src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpiYmVmODMwYi1mMDgyLTRiNTItOGZjNy0zMzNjZjVhYmU2Y2U=/outer-shell.png',
  alt: 'Outer Shell Logo',
};

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

export const featuredImageII: FeaturedImageProps = {
  title: 'Pro-Team',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
  image: {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo4YmIzNWIyYi04MDE5LTRlOWUtYTU1MS0zYWZkODQ3OTJjNDI=/bike-trail-ocean.jpeg',
    alt: '',
  },
  cta: { href: '#', label: 'Shop Now' },
};

// TODO: Footer

export default function Preview() {
  const cards = getProducts('Warm');

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
      <Slideshow slides={heroSlides} />
      <FeaturedCardCarousel cards={cards} title="Categories" />
      <FeaturedImage
        cta={{ href: '#', label: 'Shop Now' }}
        description={featuredImage.description}
        image={{
          src: featuredImage.image.src,
          alt: featuredImage.image.alt,
        }}
        title={featuredImage.title}
      />
      <FeaturedProductList
        cta={{
          label: featuredProducts.cta.label,
          href: featuredProducts.cta.href,
        }}
        description={featuredProducts.description}
        products={featuredProducts.products}
        title={featuredProducts.title}
      />
      <Subscribe
        action={action}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        title="Sign up for our newsletter"
      />
      <FeaturedProductCarousel
        cta={{ label: 'See All', href: '#' }}
        products={featuredProducts.products}
        title="New Arrivals"
      />
      <Feature
        cta={{
          label: feature.cta.label,
          href: feature.cta.href,
        }}
        description={feature.description}
        image={{
          src: feature.image.src,
          alt: feature.image.alt,
        }}
        title={feature.title}
      />
      <FeaturedProductCarousel products={featuredProducts.products} title="Recently Viewed" />
      <FeaturedImage
        cta={{ href: featuredImageII.cta.href, label: featuredImageII.cta.label }}
        description={featuredImageII.description}
        image={{
          src: featuredImageII.image.src,
          alt: featuredImageII.image.alt,
        }}
        title={featuredImageII.title}
      />
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

const defaultProducts = [
  {
    id: '1',
    title: 'Mini Bar Bag',
    subtitle: 'Blue/Black/Green',
    price: '$65',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1YzIwNTljMi04NzcwLTRiM2ItYmIzMy02ZTk0ODNkY2M5MDk=/mini-bar-bag.jpeg',
      alt: 'Mini Bar Bag',
    },
    href: '#',
    rating: 4.3,
  },
  {
    id: '2',
    title: 'Mini Bar Bag',
    subtitle: 'Blue/Black/Green',
    price: '$65',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTphOTFmNjU3Ny0zMDMxLTQzNjYtOWUzNC02MjRkYWQ4OTkzOWI=/mini-bar-bag-2.jpeg',
      alt: 'Mini Bar Bag',
    },
    href: '#',
    rating: 4.5,
  },
  {
    id: '3',
    title: 'Stem Caddy',
    subtitle: 'Blue/Black/Green',
    price: '$60',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo5NTIxMmU4MC0xY2EwLTQxZjktOTBiYS0yOWFhYmU3ZTNkMzA=/stem-caddy.jpeg',
      alt: 'Stem Caddy',
    },
    href: '#',
    rating: 4.2,
  },
  {
    id: '4',
    title: 'Hip Slinger',
    subtitle: 'Blue/Black/Green',
    price: '$105',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo0MDcxNDBlYy1jYmIzLTRiNjQtOTUxMS1mMTIyMGUyYWY5MjQ=/hip-slinger.jpeg',
      alt: 'Hip Slinger',
    },
    href: '#',
    rating: 4.6,
  },
  {
    id: '5',
    title: 'Everyday Tote',
    subtitle: 'Blue/Black/Green',
    price: '$185',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowODYwYTY2NC02NjdjLTRhODYtYTUxYy1jOWExNzI5YTdjMDk=/everyday-tote.jpeg',
      alt: 'Everyday Tote',
    },
    href: '#',
    rating: 4.8,
  },
  {
    id: '6',
    title: 'Mini Saddlebag',
    subtitle: 'Blue/Black/Green',
    price: '$45',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo4YzEyMjUyOC0zMWU5LTQyYWYtOTFlYi04YjQzNmRiZGVmNDU=/mini-saddlebag.jpeg',
      alt: 'Mini Saddlebag',
    },
    href: '#',
    rating: 4.1,
  },
];

const featuredProducts = {
  title: 'Our gear',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit duat pronto.',
  cta: {
    label: 'Shop Now',
    href: '#',
  },
  emptyStateSubtitle: 'Try browsing our complete catalog of products.',
  emptyStateTitle: 'No products found',
  products: defaultProducts,
};
