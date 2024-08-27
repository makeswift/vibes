import Feature from '@/vibes/soul/components/feature'
import HomePage from '@/vibes/soul/components/page-home'
import { cards } from '@/vibes/soul/examples/card-carousel-warm'
import { featuredImage } from '@/vibes/soul/examples/featured-image-warm'
import { featuredProducts } from '@/vibes/soul/examples/featured-products-list-warm'
import { copyright, footerLinks } from '@/vibes/soul/examples/footer-warm'
import { headerLinks } from '@/vibes/soul/examples/header-warm'
import { heroSlides } from '@/vibes/soul/examples/slideshow-warm'

import { FeaturedImageProps } from '../components/featured-image'

export const featuredProductsContent = {
  title: '',
  description: '',
  cta: {
    label: '',
    href: '#',
  },
}

// TODO: New Arrivals

const feature: Feature = {
  image: {
    src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9',
    altText: 'string',
  },
  title: 'Our Everday Tote',
  description: 'Fits Perfectly in a Basket',
  // grid: {
  //   icon: 'string',
  //   title: 'string',
  //   description: 'string',
  // },
  cta: {
    href: 'string',
    label: 'string',
  },
}

// TODO: Recently Viewed

export const featuredImageII: FeaturedImageProps = {
  title: 'Pro-Team',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
  image: {
    src: 'https://rstr.in/monogram/vibes/mQ0gb1u9_CO',
    altText: '',
  },
  cta: { href: '#', label: 'Shop Now' },
}

// TODO: Footer

export default function Preview() {
  return (
    <HomePage
      headerLinks={headerLinks}
      logo={{
        src: 'https://rstr.in/monogram/vibes/JzEctN2uDqL',
        alt: 'Outer Shell Logo',
      }}
      heroSlides={heroSlides}
      categories={cards}
      featuredImage={featuredImage}
      feature={feature}
      featuredProductsContent={featuredProductsContent}
      featuredProducts={featuredProducts}
      featuredImageII={featuredImageII}
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
