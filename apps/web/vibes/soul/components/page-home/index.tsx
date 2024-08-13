import AnnouncementBar from '@/vibes/soul/components/announcement-bar'
import Card, { CardProps } from '@/vibes/soul/components/card'
import CardCarousel from '@/vibes/soul/components/card-carousel'
import Feature from '@/vibes/soul/components/feature'
import FeaturedProductsList from '@/vibes/soul/components/featured-products-list'
import FeaturedVideo from '@/vibes/soul/components/featured-video'
import Footer from '@/vibes/soul/components/footer'
import Header from '@/vibes/soul/components/header'
import Slideshow from '@/vibes/soul/components/slideshow'
import Subscribe from '@/vibes/soul/components/subscribe'
import { featuredProducts } from '@/vibes/soul/examples/featured-products-list'
import { footerLinks } from '@/vibes/soul/examples/footer'
import { headerLinks } from '@/vibes/soul/examples/header'

import FeaturedProductsCarousel from '../featured-products-carousel'

export const HomePage = function HomePage({ heroSlides, categories }: any) {
  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>
      <div className="relative flex flex-col">
        <Header links={headerLinks} logo="SOUL" cartHref="#" accountHref="#" />
        <Slideshow slides={heroSlides} />
        <CardCarousel>
          {categories.map((card: CardProps) => (
            <Card key={card.title} {...card} />
          ))}
        </CardCarousel>
        <FeaturedVideo
          heading="Pro-Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
          video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
          link={{ href: '#', target: '_self' }}
        />
        <FeaturedProductsList
          title="Off-Race"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          cta={{ label: 'Shop Now', href: '#' }}
          products={featuredProducts}
        />
        <FeaturedVideo
          heading="Pro-Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
          video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
          link={{ href: '#', target: '_self' }}
          mediaAlign="right"
        />
        <Subscribe
          title="Sign up for our newsletter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          theme="brand-highlight"
        />
        <FeaturedProductsCarousel
          title="New Arrivals"
          cta={{ label: 'See All', href: '#' }}
          products={featuredProducts}
        />

        <Feature
          image={{
            url: 'https://rstr.in/monogram/vibes/ZHUBk7gO45U',
            alt: 'Biker in Mountains',
          }}
          heading="A global community"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
          link={{
            label: 'Shop Now',
            href: '#',
            target: '_self',
          }}
        />
        <FeaturedProductsCarousel title="Recently Viewed" products={featuredProducts} />
        <FeaturedVideo
          heading="Pro-Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
          video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
          link={{ href: '#', target: '_self' }}
          mediaAlign="left"
        />
        <Subscribe
          title="Sign up for our newsletter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          theme="light"
        />
        <Footer sections={footerLinks} logo="SOUL" />
      </div>
    </>
  )
}

export default HomePage
