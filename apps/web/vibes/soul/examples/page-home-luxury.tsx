import { Feature } from '@/vibes/soul/components/feature'
import HomePage from '@/vibes/soul/components/page-home'
import { cards } from '@/vibes/soul/examples/card-carousel-luxury'
import { featuredImage } from '@/vibes/soul/examples/featured-image-luxury'
import { featuredProducts } from '@/vibes/soul/examples/featured-products-list-luxury'
import { headerLinks } from '@/vibes/soul/examples/header-luxury'
import { heroSlides } from '@/vibes/soul/examples/slideshow-luxury'

import { FeaturedImageProps } from '../components/featured-image'

export const featuredProductsContent = {
  title: 'Trending Now',
  description: '',
  cta: {
    label: '',
    href: '#',
  },
}

// TODO: New Arrivals

export const feature: Feature = {
  image: {
    src: 'https://rstr.in/monogram/vibes/B7iQGslbxE4',
    altText: 'string',
  },
  title: 'DESIGN-LED + FUNCTION-FORMED',
  description:
    'We set out to create reimagined classics for the non-stop woman. Our unique approach to design is what makes us stand out while the quality and function of our handmade shoes and accessories are what has formed our community of badass women. The combination of both Megan and Cristina’s individual styles is present in every piece. While slightly unconventional, our collections are meant to live in your closet forever.',
  // grid: {
  //   icon: 'string',
  //   title: 'string',
  //   description: 'string',
  // },
  cta: {
    href: 'Shop Now',
    label: '#',
  },
}

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

// TODO: Footer

export default function Preview() {
  return (
    <HomePage
      headerLinks={headerLinks}
      logo={{ src: 'https://rstr.in/monogram/vibes/DVHsMCuLQID', altText: 'Freda Salvador' }}
      heroSlides={heroSlides}
      categories={cards}
      featuredImage={featuredImage}
      feature={feature}
      featuredProductsContent={featuredProductsContent}
      featuredProducts={featuredProducts}
      featuredImageII={featuredImageII}
    />
  )
}
