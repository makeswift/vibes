import AnnouncementBar from '@/vibes/soul/components/announcement-bar'
import Carousel from '@/vibes/soul/components/carousel'
import CategoryCard from '@/vibes/soul/components/category-card'
import Feature from '@/vibes/soul/components/feature'
import FeaturedProductList from '@/vibes/soul/components/featured-product-list'
import Footer from '@/vibes/soul/components/footer'
import Header from '@/vibes/soul/components/header'
import MediaSection from '@/vibes/soul/components/media-section'
import Newsletter from '@/vibes/soul/components/newsletter'
import Slideshow from '@/vibes/soul/components/slideshow'
import { categories } from '@/vibes/soul/examples/carousel'
import { featuredProducts } from '@/vibes/soul/examples/featured-product-list'
import { footerLinks } from '@/vibes/soul/examples/footer'
import { headerLinks } from '@/vibes/soul/examples/header'

export const HomePage = function HomePage({ heroSlides }: any) {
  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>
      <div className="relative flex flex-col">
        <Header links={headerLinks} logo={{ alt: 'SOUL' }} />
        <Slideshow slides={heroSlides} />
        <Carousel title="Category" link={{ label: 'See All', href: '/' }}>
          {categories.map(category => (
            <CategoryCard key={category.label} {...category} />
          ))}
        </Carousel>
        <MediaSection
          heading="Pro-Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
          video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
          link={{ href: '/', target: '_self' }}
        />
        <FeaturedProductList
          title="Off-Race"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          link={{ label: 'Shop Now', href: '/new-arrivals' }}
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
        <Newsletter
          heading="Sign up for our newsletter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          theme="brand-highlight"
        />
        <Carousel title="New Arrivals" link={{ label: 'See All', href: '/' }}>
          {categories.map(category => (
            <CategoryCard key={category.label} {...category} />
          ))}
        </Carousel>
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
        <Carousel title="Recently Viewed" link={{ label: 'Shop All', href: '/' }}>
          {categories.map(category => (
            <CategoryCard key={category.label} {...category} />
          ))}
        </Carousel>
        <MediaSection
          heading="Pro-Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
          video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
          link={{ href: '/', target: '_self' }}
          mediaAlign="left"
        />
        <Newsletter
          heading="Sign up for our newsletter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          theme="light"
        />
        <Footer links={footerLinks} logo={{ alt: 'SOUL' }} companyName="Soul" />
      </div>
    </>
  )
}

export default HomePage
