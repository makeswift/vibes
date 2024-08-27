import HomePage from '@/vibes/soul/components/page-home'
import { cards } from '@/vibes/soul/examples/card-carousel-luxury'
import { feature } from '@/vibes/soul/examples/feature-luxury'
import { featuredImage } from '@/vibes/soul/examples/featured-image-luxury'
import { featuredProducts } from '@/vibes/soul/examples/featured-products-list-luxury'
import { copyright, footerLinks } from '@/vibes/soul/examples/footer-luxury'
import { headerLinks } from '@/vibes/soul/examples/header-luxury'
import { heroSlides } from '@/vibes/soul/examples/slideshow-luxury'

import { FeaturedImageProps } from '../components/featured-image'

// TODO: New Arrivals

// TODO: Recently Viewed

export const featuredImageII: FeaturedImageProps = {
  title: 'Handmade in Spain',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
  image: {
    src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz',
    altText: '',
  },
  cta: { href: '#', label: 'Shop Now' },
}

export default function Preview() {
  return (
    <HomePage
      headerLinks={headerLinks}
      logo={{ src: 'https://rstr.in/monogram/vibes/DVHsMCuLQID', altText: 'Freda Salvador' }}
      heroSlides={heroSlides}
      categories={cards}
      featuredImage={featuredImage}
      feature={feature}
      featuredProducts={featuredProducts}
      featuredImageII={featuredImageII}
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
