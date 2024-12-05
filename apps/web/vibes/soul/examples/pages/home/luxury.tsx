import { locales } from '@/vibes/soul/data/locales';
import { cards } from '@/vibes/soul/examples/primitives/card-carousel/luxury';
import { action } from '@/vibes/soul/examples/primitives/inline-email-form/actions';
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions';
import { navigationLinks } from '@/vibes/soul/examples/primitives/navigation/luxury';
import { feature } from '@/vibes/soul/examples/sections/feature/luxury';
import { featuredImage } from '@/vibes/soul/examples/sections/featured-image/luxury';
import { featuredProducts } from '@/vibes/soul/examples/sections/featured-products-list/luxury';
import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/luxury';
import { heroSlides } from '@/vibes/soul/examples/sections/slideshow/luxury';
import { Banner } from '@/vibes/soul/primitives/banner';
import { Navigation } from '@/vibes/soul/primitives/navigation';
import { Feature } from '@/vibes/soul/sections/feature';
import { FeaturedCardCarousel } from '@/vibes/soul/sections/featured-card-carousel';
import { FeaturedImage, FeaturedImageProps } from '@/vibes/soul/sections/featured-image';
import { FeaturedProductsCarousel } from '@/vibes/soul/sections/featured-products-carousel';
import { FeaturedProductsList } from '@/vibes/soul/sections/featured-products-list';
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
      <FeaturedProductsList
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
