import { FeaturedImageProps } from '@/vibes/soul/components/featured-image'
import { HomePage } from '@/vibes/soul/components/page-home'
import { cards } from '@/vibes/soul/examples/sections/card-carousel/luxury'
import { feature } from '@/vibes/soul/examples/sections/feature/luxury'
import { featuredImage } from '@/vibes/soul/examples/sections/featured-image/luxury'
import { featuredProducts } from '@/vibes/soul/examples/sections/featured-products-list/luxury'
import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/luxury'
import { headerLinks } from '@/vibes/soul/examples/sections/header/luxury'
import { heroSlides } from '@/vibes/soul/examples/sections/slideshow/luxury'

// TODO: New Arrivals

// TODO: Recently Viewed

export const featuredImageII: FeaturedImageProps = {
  title: 'Handmade in Spain',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
  image: {
    src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz',
    alt: '',
  },
  cta: { href: '#', label: 'Shop Now' },
}

export default function Preview() {
  return (
    <HomePage
      headerLinks={headerLinks}
      logo={{ src: 'https://rstr.in/monogram/vibes/DVHsMCuLQID', alt: 'Freda Salvador' }}
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
