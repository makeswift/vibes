import AnnouncementBar from '@/vibes/soul/components/announcement-bar'
import CardCarousel from '@/vibes/soul/components/card-carousel'
import CategoryCard from '@/vibes/soul/components/category-card'
import Feature from '@/vibes/soul/components/feature'
import FeaturedProductsList from '@/vibes/soul/components/featured-products-list'
import Footer from '@/vibes/soul/components/footer'
import Header from '@/vibes/soul/components/header'
import MediaSection from '@/vibes/soul/components/media-section'
import Slideshow from '@/vibes/soul/components/slideshow'
import Subscribe from '@/vibes/soul/components/subscribe'
import { featuredProducts } from '@/vibes/soul/examples/featured-products-list'
import { footerLinks } from '@/vibes/soul/examples/footer'
import { headerLinks } from '@/vibes/soul/examples/header'

export const HomePage = function HomePage({ heroSlides, categories }: any) {
  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>
      <div className="relative flex flex-col">
        <Header links={headerLinks} logo={{ alt: 'SOUL' }} />
        <Slideshow slides={heroSlides} />
        <CardCarousel title="Category" link={{ label: 'See All', href: '/' }}>
          {categories.map((category: CategoryCard) => (
            <CategoryCard key={category.label} {...category} />
          ))}
        </CardCarousel>
        <MediaSection
          heading="Pro-Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
          video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
          link={{ href: '/', target: '_self' }}
        />
        <FeaturedProductsList
          title="Off-Race"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          cta={{ label: 'Shop Now', href: '/#' }}
          products={featuredProducts}
        />
        <MediaSection
          heading="Pro-Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
          video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
          link={{ href: '/', target: '_self' }}
          mediaAlign="right"
        />
        <Subscribe
          title="Sign up for our newsletter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          theme="brand-highlight"
          action={(formData: FormData) => console.log(formData)}
        />
        <CardCarousel title="New Arrivals" link={{ label: 'See All', href: '/' }}>
          {categories.map((category: CategoryCard) => (
            <CategoryCard key={category.label} {...category} />
          ))}
        </CardCarousel>
        <Feature
          image={{
            url: 'https://rstr.in/monogram/vibes/ZHUBk7gO45U',
            alt: 'Biker in Mountains',
          }}
          heading="A global community"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
          link={{
            label: 'Shop Now',
            href: '/shop',
            target: '_self',
          }}
        />
        <CardCarousel title="Recently Viewed" link={{ label: 'Shop All', href: '/' }}>
          {categories.map((category: CategoryCard) => (
            <CategoryCard key={category.label} {...category} />
          ))}
        </CardCarousel>
        <MediaSection
          heading="Pro-Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
          video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
          link={{ href: '/', target: '_self' }}
          mediaAlign="left"
        />
        <Subscribe
          title="Sign up for our newsletter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          theme="light"
          action={(formData: FormData) => console.log(formData)}
        />
        <Footer sections={footerLinks} logo="SOUL" />
      </div>
    </>
  )
}

export default HomePage
