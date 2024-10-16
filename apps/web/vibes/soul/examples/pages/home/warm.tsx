import { cards, textContrast } from '@/vibes/soul/examples/sections/card-carousel/warm'
import { feature } from '@/vibes/soul/examples/sections/feature/warm'
import { featuredImage } from '@/vibes/soul/examples/sections/featured-image/warm'
import { featuredProducts } from '@/vibes/soul/examples/sections/featured-products-list/warm'
import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/warm'
import { headerLinks } from '@/vibes/soul/examples/sections/header/warm'
import { heroSlides } from '@/vibes/soul/examples/sections/slideshow/warm'
import { HomePage } from '@/vibes/soul/pages/home'
import { FeaturedImageProps } from '@/vibes/soul/sections/featured-image'

// TODO: New Arrivals
// TODO: Recently Viewed

export const featuredImageII: FeaturedImageProps = {
  title: 'Pro-Team',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
  image: {
    src: 'https://rstr.in/monogram/vibes/mQ0gb1u9_CO',
    alt: '',
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
      textContrast={textContrast}
      featuredImage={featuredImage}
      feature={feature}
      featuredProducts={featuredProducts}
      featuredImageII={featuredImageII}
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
