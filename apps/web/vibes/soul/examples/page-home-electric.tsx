import { FeaturedImageProps } from '@/vibes/soul/components/featured-image'
import HomePage from '@/vibes/soul/components/page-home'
import { Product } from '@/vibes/soul/components/product-card'
import { cards } from '@/vibes/soul/examples/card-carousel-electric'
import { feature } from '@/vibes/soul/examples/feature-electric'
import { featuredImage } from '@/vibes/soul/examples/featured-image-electric'
import { featuredProducts } from '@/vibes/soul/examples/featured-products-list-electric'
import { copyright, footerLinks } from '@/vibes/soul/examples/footer-electric'
import { headerLinks } from '@/vibes/soul/examples/header-electric'
import { heroSlides } from '@/vibes/soul/examples/slideshow-electric'

// Featured Products
export const newArrivals: Product[] = [
  {
    id: '1',
    name: 'Heart to Heart',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/zyFDaG5bRQE',
      altText: 'Heart to Heart',
    },
    href: '#',
  },
  {
    id: '2',
    name: 'Caladium Pink',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/AxXaqTzRozM',
      altText: 'Caladium Pink',
    },
    href: '#',
  },
  {
    id: '3',
    name: 'Caladium Angel Wing',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/vznZvupsj2y',
      altText: 'Caladium Angel Wing',
    },
    href: '#',
  },
  {
    id: '4',
    name: 'Philodendron Brandtianum',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/rDuYCY2nPNt',
      altText: 'Philodendron Brandtianum',
    },
    href: '#',
  },
  {
    id: '5',
    name: 'Silver Leaf Philodendron',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/UQMA3XLfWvF',
      altText: 'Silver Leaf Philodendron',
    },
    href: '#',
  },
  {
    id: '6',
    name: 'Pink Beauty Caladium',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/cMF-gCyIas9',
      altText: 'Pink Beauty Caladium',
    },
    href: '#',
  },
  {
    id: '7',
    name: 'Caladium Angel Wing',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/W_zhzrsEqp7',
      altText: 'Caladium Angel Wing',
    },
    href: '#',
  },
  {
    id: '8',
    name: 'Caladium Watermelon',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/HL613sp6BIP',
      altText: 'Caladium Watermelon',
    },
    href: '#',
  },
  {
    id: '9',
    name: 'Speckled Heart Caladium',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/afA-7qP8zih',
      altText: 'Speckled Heart Caladium',
    },
    href: '#',
  },
]

// TODO: New Arrivals

// TODO: Recently Viewed

export const featuredImageII: FeaturedImageProps = {
  title: 'Thoughtfully Curated',
  description:
    'Our team of plant experts inspects every leaf, stem, and root to guarantee quality, resilience, and beauty. We prioritize plants from sustainable growers who share our passion for eco-friendly practices, ensuring that every green addition to your home has been responsibly sourced and lovingly nurtured from the start.',
  image: {
    src: 'https://rstr.in/monogram/vibes/Ip8DYxJT8_b',
    altText: 'Close up of a plant',
  },
  cta: { href: '#', label: 'Shop Now' },
}

// TODO: Footer

export default function Preview() {
  return (
    <HomePage
      headerLinks={headerLinks}
      logo="SOUL"
      heroSlides={heroSlides}
      categories={cards}
      featuredImage={featuredImage}
      feature={feature}
      featuredProducts={featuredProducts}
      newArrivals={newArrivals}
      featuredImageII={featuredImageII}
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
