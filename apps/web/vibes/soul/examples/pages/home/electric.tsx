import { cards } from '@/vibes/soul/examples/sections/card-carousel/electric'
import { feature } from '@/vibes/soul/examples/sections/feature/electric'
import { featuredImage } from '@/vibes/soul/examples/sections/featured-image/electric'
import { featuredProducts } from '@/vibes/soul/examples/sections/featured-products-list/electric'
import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/electric'
import { headerLinks } from '@/vibes/soul/examples/sections/header/electric'
import { heroSlides } from '@/vibes/soul/examples/sections/slideshow/electric'
import { HomePage } from '@/vibes/soul/pages/home'
import { Product } from '@/vibes/soul/primitives/product-card'
import { FeaturedImageProps } from '@/vibes/soul/sections/featured-image'

// Featured Products
export const newArrivals: Product[] = [
  {
    id: '1',
    title: 'Heart to Heart',
    subtitle: 'Sun or Shade',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/zyFDaG5bRQE',
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
      src: 'https://rstr.in/monogram/vibes/AxXaqTzRozM',
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
      src: 'https://rstr.in/monogram/vibes/vznZvupsj2y',
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
      src: 'https://rstr.in/monogram/vibes/rDuYCY2nPNt',
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
      src: 'https://rstr.in/monogram/vibes/UQMA3XLfWvF',
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
      src: 'https://rstr.in/monogram/vibes/cMF-gCyIas9',
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
      src: 'https://rstr.in/monogram/vibes/W_zhzrsEqp7',
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
      src: 'https://rstr.in/monogram/vibes/HL613sp6BIP',
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
      src: 'https://rstr.in/monogram/vibes/afA-7qP8zih',
      alt: 'Speckled Heart Caladium',
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
    alt: 'Close up of a plant',
  },
  cta: { href: '#', label: 'Shop Now' },
}

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
