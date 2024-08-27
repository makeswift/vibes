import { FeaturedImageProps } from '@/vibes/soul/components/featured-image'
import { cards } from '@/vibes/soul/examples/card-carousel-blue'
import { feature } from '@/vibes/soul/examples/feature-blue'
import { featuredImage } from '@/vibes/soul/examples/featured-image-blue'
import { featuredProducts } from '@/vibes/soul/examples/featured-products-list-blue'
import { copyright, footerLinks, logo } from '@/vibes/soul/examples/footer-blue'
import { headerLinks } from '@/vibes/soul/examples/header-blue'
import { heroSlides } from '@/vibes/soul/examples/slideshow-blue'

import HomePage from '../components/page-home'

export const featuredProductsContent = {
  title: '',
  description: '',
  cta: {
    label: '',
    href: '#',
  },
}

// TODO: New Arrivals
// TODO: Recently Viewed
export const featuredImageII: FeaturedImageProps = {
  title: 'Pro-Team',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
  image: {
    src: 'Close up of a plant',
    altText: '',
  },
  cta: { href: '#', label: 'Shop Now' },
}

export default function Preview() {
  return (
    <>
      <HomePage
        headerLinks={headerLinks}
        logo={logo}
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
    </>
  )
}
