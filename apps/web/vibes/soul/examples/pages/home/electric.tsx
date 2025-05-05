import { ReactNode } from 'react';

import { getProducts } from '@/vibes/soul/data';
import { locales } from '@/vibes/soul/data/locales';
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions';
import { navigationLinks } from '@/vibes/soul/examples/primitives/navigation/electric';
import { feature } from '@/vibes/soul/examples/sections/feature/electric';
import { featuredImage } from '@/vibes/soul/examples/sections/featured-image/electric';
import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/electric';
import { action } from '@/vibes/soul/examples/sections/inline-email-form/actions';
import { heroSlides } from '@/vibes/soul/examples/sections/slideshow/electric';
import { Banner } from '@/vibes/soul/primitives/banner';
import { Navigation } from '@/vibes/soul/primitives/navigation';
import { type Product } from '@/vibes/soul/primitives/product-card';
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

const logo = 'SOUL';

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

// Featured Products
export const newArrivals: Product[] = [
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
    href: '#1',
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
    href: '#2',
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
    href: '#3',
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
    href: '#4',
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
    href: '#5',
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
    href: '#6',
  },
  {
    id: '7',
    title: 'Caladium Angel Wing',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1YTEzYjY0My01OGJmLTRjYWItOWQ3ZS1mMjFjOGI3MTYyYTg=/caladium-angel-wing.jpeg',
      alt: 'Caladium Angel Wing',
    },
    href: '#7',
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
    href: '#8',
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
    href: '#9',
  },
];

// TODO: New Arrivals
// TODO: Recently Viewed

export const featuredImageII: FeaturedImageProps = {
  title: 'Thoughtfully Curated',
  description:
    'Our team of plant experts inspects every leaf, stem, and root to guarantee quality, resilience, and beauty. We prioritize plants from sustainable growers who share our passion for eco-friendly practices, ensuring that every green addition to your home has been responsibly sourced and lovingly nurtured from the start.',
  image: {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo4Njc3MzZjZi1iYTE0LTQyOTEtOGQ2NS00NTZiNTJhNGIyOTY=/close-up-plant.jpeg',
    alt: 'Close up of a plant',
  },
  cta: { href: '#', label: 'Shop Now' },
};

export default function Preview() {
  const cards = getProducts('Electric');

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
      <FeaturedCardCarousel
        cards={cards}
        cta={{ label: 'Shop all', href: '/all' }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        title="Categories"
      />
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        products={newArrivals}
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
    title: 'Philodendron Imperial Red',
    subtitle: 'Indoor Plant',
    badge: 'Popular',
    price: '$44.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowNzAzMzk0Ni01NGNhLTQ3ZDYtODgyYi0wYWI3NTUzNTU4YjQ=/kv08IvX08j.jpeg',
      alt: 'Philodendron Imperial Red',
    },
    href: '#1',
    rating: 4,
  },
  {
    id: '2',
    title: 'Monstera',
    subtitle: 'Indoor Plant',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToyMTIwYzE1ZC01YzlkLTQ3MDgtOTZhOS1hZDkwYjVmNDAwZWY=/n0P83RMnClS%202930x3663.jpeg',
      alt: 'Monstera',
    },
    href: '#2',
    rating: 4.4,
  },
  {
    id: '3',
    title: 'Pink Caladium',
    subtitle: 'Indoor Plant',
    price: '$19.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/AaZW4j2VTd4%202489x3111.jpeg',
      alt: 'Pink Caladium',
    },
    href: '#3',
    rating: 4.8,
  },
  {
    id: '4',
    title: 'Hoya Kerrii',
    subtitle: 'Indoor Plant',
    price: '$16.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmZmRlZDM2MS0yMWMwLTRiYjktOTU2Ny1mNWM0YjcwMGIwZWQ=/QSaMw6aC_AN%208600x10750.jpeg',
      alt: 'Hoya Kerrii',
    },
    href: '#4',
    rating: 2.2,
  },
  {
    id: '5',
    title: 'Bird Nest Fern',
    subtitle: 'Indoor Plant',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTplYTBhYzExNC1lYWIwLTQyZjAtYmQzZS04NDJlNmRlM2RkNTc=/gfGRQi5pHeJ%203094x3868.jpeg',
      alt: 'Bird Nest Fern',
    },
    href: '#5',
    rating: 3.5,
  },
  {
    id: '6',
    title: 'Jade Plant',
    subtitle: 'Indoor Plant',
    price: '$24.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozZWFjZDhlZi1lY2EzLTRiMzYtYTJkNS02ZGJkOWE4MzUwYjQ=/lJg081kQqvc.jpeg',
      alt: 'Jade Plant',
    },
    href: '#6',
    rating: 5,
  },
  {
    id: '7',
    title: 'Snake Plant',
    subtitle: 'Indoor Plant',
    price: '$34.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozOTRmNDIyNC0wZDRkLTRmOWMtYjVjNi03ZjljNGE2ZjdiOTU=/snake-plant.jpg',
      alt: 'Snake Plant',
    },
    href: '#7',
    rating: 4.9,
  },
  {
    id: '8',
    title: 'Spider Plant',
    subtitle: 'Indoor Plant',
    price: '$12.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTphNzdlNDQwNS1mNDIxLTRiZTQtOGJkMy0wZTc2OWMyYmEzYjY=/spider-plant.jpg',
      alt: 'Spider Plant',
    },
    href: '#8',
    rating: 4.2,
  },
  {
    id: '9',
    title: 'African Fig Tree',
    subtitle: 'Indoor Plant',
    price: '$49.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo2YTk0Y2E0Yy0wMjcyLTRkZTItOWQ2Mi0xMTY4OTczYzI1ZWM=/african-fig.jpg',
      alt: 'African Fig Tree',
    },
    href: '#9',
    rating: 4.7,
  },
  {
    id: '10',
    title: 'Birds of Paradise',
    subtitle: 'Indoor Plant',
    price: '$29.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo2MTE4YmY5MC0wOWJlLTRlZDUtYjYyOS0wNzgwOTdiOWNjYTk=/birds-of-paradise.jpg',
      alt: 'Birds of Paradise',
    },
    href: '#10',
    rating: 4.5,
  },
  {
    id: '11',
    title: 'ZZ Plant',
    subtitle: 'Indoor Plant',
    price: '$22.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToxNTFhZTMwNC0zYWZhLTRiZDgtOWRlYy01ODU1OTZlNjQyZDM=/zz-plant.jpg',
      alt: 'ZZ Plant',
    },
    href: '#11',
    rating: 4.6,
  },
  {
    id: '12',
    title: 'Dracaena',
    subtitle: 'Indoor Plant',
    price: '$18.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozOWNmZThkOC00Y2M0LTQ2ZTAtODUwMy1lZmVhMzhhMWRmN2Y=/dracaena.jpg',
      alt: 'Dracanea',
    },
    href: '#12',
    rating: 4.3,
  },
];

const featuredProducts = {
  title: 'Our plants',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit duat pronto.',
  cta: {
    label: 'Shop Now',
    href: '#',
  },
  emptyStateSubtitle: 'Try browsing our complete catalog of products.',
  emptyStateTitle: 'No products found',
  products,
};
