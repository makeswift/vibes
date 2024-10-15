import { FeaturedImageProps } from '@/vibes/soul/components/featured-image'
import { HomePage } from '@/vibes/soul/components/page-home'
import { cards, textContrast } from '@/vibes/soul/examples/card-carousel-warm'
import { feature } from '@/vibes/soul/examples/feature-warm'
import { featuredImage } from '@/vibes/soul/examples/featured-image-warm'
import { featuredProducts } from '@/vibes/soul/examples/featured-products-list-warm'
import { copyright, footerLinks } from '@/vibes/soul/examples/footer-warm'
import { headerLinks } from '@/vibes/soul/examples/header-warm'
import { heroSlides } from '@/vibes/soul/examples/slideshow-warm'

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
