import { FeaturedImageProps } from '@/vibes/soul/components/featured-image'
import HomePage from '@/vibes/soul/components/page-home'
import { cards, textContrast } from '@/vibes/soul/examples/card-carousel-blue'
import { feature } from '@/vibes/soul/examples/feature-blue'
import { featuredImage } from '@/vibes/soul/examples/featured-image-blue'
import { featuredProducts } from '@/vibes/soul/examples/featured-products-list-blue'
import { copyright, footerLinks } from '@/vibes/soul/examples/footer-blue'
import { headerLinks, logo } from '@/vibes/soul/examples/header-blue'
import { heroSlides } from '@/vibes/soul/examples/slideshow-blue'

// TODO: New Arrivals
// TODO: Recently Viewed
export const featuredImageII: FeaturedImageProps = {
  title: 'Where Every Ride Meets Perfect Fit.',
  description:
    'Our custom bike bags are designed to seamlessly integrate with your bike, like this perfectly fitted square bag for your front basket. Adventure, style, and functionality—tailored just for you.',
  image: {
    src: 'https://rstr.in/monogram/vibes/KeSfQ1z8c9-',
    altText: 'Basket Bag',
  },
  cta: { href: '#', label: 'Shop Now' },
}

export default function Preview() {
  return (
    <HomePage
      headerLinks={headerLinks}
      logo={logo}
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
