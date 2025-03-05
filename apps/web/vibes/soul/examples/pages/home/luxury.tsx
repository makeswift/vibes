import { getProducts } from '@/vibes/soul/data';
import { locales } from '@/vibes/soul/data/locales';
import { action } from '@/vibes/soul/examples/primitives/inline-email-form/actions';
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions';
import { navigationLinks } from '@/vibes/soul/examples/primitives/navigation/luxury';
import { feature } from '@/vibes/soul/examples/sections/feature/luxury';
import { featuredImage } from '@/vibes/soul/examples/sections/featured-image/luxury';
import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/luxury';
import { heroSlides } from '@/vibes/soul/examples/sections/slideshow/luxury';
import { Banner } from '@/vibes/soul/primitives/banner';
import { Navigation } from '@/vibes/soul/primitives/navigation';
import { Feature } from '@/vibes/soul/sections/feature';
import { FeaturedCardCarousel } from '@/vibes/soul/sections/featured-card-carousel';
import { FeaturedImage, FeaturedImageProps } from '@/vibes/soul/sections/featured-image';
import { FeaturedProductList } from '@/vibes/soul/sections/featured-product-list';
import { FeaturedProductsCarousel } from '@/vibes/soul/sections/featured-products-carousel';
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

const logo = { src: 'https://rstr.in/monogram/vibes/DVHsMCuLQID', alt: 'Freda Salvador' };

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
  title: 'Handmade in Spain',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
  image: {
    src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz',
    alt: '',
  },
  cta: { href: '#', label: 'Shop Now' },
};

export default function Preview() {
  const cards = getProducts('Luxury');

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
      <FeaturedProductsCarousel
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
      <FeaturedProductsCarousel products={featuredProducts.products} title="Recently Viewed" />
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

const products = [
  {
    id: '1',
    title: 'Jada Square Toe Ballet Flat',
    subtitle: '',
    badge: 'Bestseller',
    price: '$350',
    image: {
      src: 'https://rstr.in/monogram/vibes/9vu9tSw1WdA',
      alt: 'Jada Square Toe Ballet Flat',
    },
    href: '#',
    rating: 4.5,
  },
  {
    id: '2',
    title: 'Jayla Woven Ballet Heel',
    subtitle: '',
    badge: 'Bestseller',
    price: '$395',
    image: {
      src: 'https://rstr.in/monogram/vibes/jD25Jjm0zbT',
      alt: 'Jayla Woven Ballet Heel',
    },
    href: '#',
    rating: 4.8,
  },
  {
    id: '3',
    title: 'Jessie Ballet Flat',
    subtitle: '',
    badge: 'Bestseller',
    price: '$450',
    image: {
      src: 'https://rstr.in/monogram/vibes/1ipihAyvRQj',
      alt: 'Jessie Ballet Flat',
    },
    href: '#',
    rating: 4.6,
  },
  {
    id: '4',
    title: 'Leighton Soft Leather Loafer',
    subtitle: '',
    badge: 'Almost Gone',
    price: '$350',
    image: {
      src: 'https://rstr.in/monogram/vibes/YfQW8M1Gv2H/zTWKcqJrdIu',
      alt: 'Leighton Soft Leather Loafer',
    },
    href: '#',
    rating: 4.2,
  },
  {
    id: '5',
    title: 'JADA SQUARE TOE BALLET FLAT',
    subtitle: '',
    badge: 'Bestseller',
    price: '$350',
    image: {
      src: 'https://rstr.in/monogram/vibes/5QBR05kyrYo',
      alt: 'JADA SQUARE TOE BALLET FLAT',
    },
    href: '#',
    rating: 4.7,
  },
  {
    id: '6',
    title: 'DARYA LUG SOLE FISHERMAN',
    subtitle: '',
    badge: 'Almost Gone',
    price: '$290',
    image: {
      src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz/vfCehRZDBGk',
      alt: 'DARYA LUG SOLE FISHERMAN',
    },
    href: '#',
    rating: 4.4,
  },
];

const featuredProducts = {
  title: 'Our apparel',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit duat pronto.',
  cta: {
    label: 'Shop Now',
    href: '#',
  },
  emptyStateSubtitle: 'Try browsing our complete catalog of products.',
  emptyStateTitle: 'No products found',
  products,
};
