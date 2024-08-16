'use client'

import Link from 'next/link'

import BlogListSection from '@/vibes/2px/components/blog-list-section'
import BlogPostCard from '@/vibes/2px/components/blog-post-card'
import CalloutSection from '@/vibes/2px/components/callout-section'
import CarouselSection from '@/vibes/2px/components/carousel-section'
import FAQSection from '@/vibes/2px/components/faq-section'
import FooterSection from '@/vibes/2px/components/footer-section'
import FullscreenProductCardSection from '@/vibes/2px/components/fullscreen-product-card-section'
import Header from '@/vibes/2px/components/header'
import HeroHeader from '@/vibes/2px/components/hero-header'
import MediaAndTextSection from '@/vibes/2px/components/media-and-text-section'
import Newsletter from '@/vibes/2px/components/newsletter-section'
import ScratchToRevealSection from '@/vibes/2px/components/scratch-to-reveal-section'
import SectionHeader from '@/vibes/2px/components/section-header'
import SlideshowSection from '@/vibes/2px/components/slideshow-section'
import Tabs from '@/vibes/2px/components/tabs'
import TextSection from '@/vibes/2px/components/text-section'

import Logo from './assets/logo.svg'
import { posts as blogPosts } from './blog-list-section'
import { content as blogPost } from './blog-post-card'
import { items as productSlides } from './carousel-section'
import { items as faqs } from './faq-section'
import { sections as footerGroups, socialMediaLinks as footerSocials } from './footer-section'
import { headerLinks } from './header'
import { childrenToReveal } from './scratch-to-reveal-section'
import { slideshowSlides } from './slideshow-section'

export default function Preview() {
  return (
    <div className="flex flex-col @container">
      <Header
        accountHref="/"
        cartHref="/"
        searchAction={async () => []}
        links={headerLinks}
        activeLocale="English"
        cartCount={3}
        locales={[
          {
            id: 'en',
            region: 'US',
            language: 'English',
          },
          {
            id: 'fr',
            region: 'FR',
            language: 'Français',
          },
        ]}
        logo={{
          url: Logo.src,
          altText: '2px Logo',
        }}
      />
      <HeroHeader
        heading="Summer timber hits from Project 213A"
        text="Project 213A is a European design house founded in 2020 as an idea by four friends linked by common design philosophy. This Project became reality with its launch in September 2021."
        image={{
          src: '/2px/hero-header-example-large.png',
          alt: 'Hero header example',
          width: 1920,
          height: 1080,
        }}
        cta={{ label: 'Shop collection', href: '/docs/2px/hero-header' }}
      />

      <TextSection
        heading="We are an international design gallery"
        text="We aim to provide artists with a platform to show off their one-of-a-kind and limited edition contemporary work in furniture, ceramics, sculpture, and design. The designers range from well-known names to emerging talents, each exhibiting a distinctive approach or style that is unequivocally unique in some manner."
      />

      <CarouselSection items={productSlides} title="New in" showArrows />

      <SlideshowSection slides={slideshowSlides} />

      <SectionHeader
        title="Arc de Stool '52 now available in 3 colours!"
        subtitle="UPDATE UPDATE UPDATE"
        headline="UPDATE UPDATE UPDATE"
      />

      <Tabs
        tabs={[
          {
            value: 'Walnut',
            content: (
              <FullscreenProductCardSection
                name={`Arc de Stool '52`}
                cartCta={{
                  label: 'Add to cart',
                  onClick: count => {
                    console.log('Product added to cart - count:', count)
                  },
                }}
                image={{
                  url: '/2px/fullscreen-table-card-example.jpg',
                  alt: 'Arc de Stool 52',
                  width: 1920,
                  height: 1080,
                }}
                price="€1,100"
                detailsColor="light"
              />
            ),
          },
          {
            value: 'Cherry',
            content: (
              <FullscreenProductCardSection
                name={`Arc de Stool '52`}
                cartCta={{
                  label: 'Add to cart',
                  onClick: count => {
                    console.log('Product added to cart - count:', count)
                  },
                }}
                image={{
                  url: '/2px/fullscreen-table-card-example.jpg',
                  alt: 'Arc de Stool 52',
                  width: 1920,
                  height: 1080,
                }}
                price="€1,100"
                detailsColor="light"
              />
            ),
          },
          {
            value: 'Oak',
            content: (
              <FullscreenProductCardSection
                name={`Arc de Stool '52`}
                cartCta={{
                  label: 'Add to cart',
                  onClick: count => {
                    console.log('Product added to cart - count:', count)
                  },
                }}
                image={{
                  url: '/2px/fullscreen-table-card-example.jpg',
                  alt: 'Arc de Stool 52',
                  width: 1920,
                  height: 1080,
                }}
                price="€1,100"
                detailsColor="light"
              />
            ),
          },
        ]}
      />

      <CalloutSection
        text="Use our AR configurator to view our products in your space, or download our catalogue for architects and interior designers."
        image={{
          src: '/2px/logo-apple-ar-large.svg',
          alt: 'Image example',
          width: 600,
          height: 600,
        }}
        ctas={{
          primary: { label: 'AR Configurator', href: '#' },
          secondary: { label: 'Download Catalogue', href: '#' },
        }}
      />

      <ScratchToRevealSection
        backgroundChildren={childrenToReveal}
        coverImage={{
          url: '/2px/mirror-chair-layer.png',
          alt: 'A mirror chair',
        }}
      />

      <MediaAndTextSection
        image={{ url: '/2px/mirror-chair.png', alt: 'Mirror chair', width: 1024, height: 720 }}
        subtitle="Friedrichstrasse 89, 10119 Berlin"
        text={`We aim to provide artists with a platform to show off their one-of-a-kind and limited edition contemporary work in furniture, ceramics, sculpture, and design. The designers range from well-known names to emerging talents, each exhibiting a distinctive approach or style that is unequivocally unique in some manner.  With the use of unique and special materials that can suit diverse interiors and styles, our curation attempts to reflect the diversity of artistic inspirations. `}
        links={[
          { label: 'email', href: 'mailto:' },
          { label: 'instagram', href: 'www.instagram.com' },
        ]}
      />

      <BlogPostCard
        date="17.03.24"
        author={{ name: 'Cicero', href: '/' }}
        link={{ href: '/', label: 'READ MORE' }}
        image={{ url: '/2px/blog-post-card-section.png', altText: 'A photo of the workshop' }}
        title="Update 23 from the workshop"
        content={blogPost}
      />

      <BlogListSection
        title="More from our Blog"
        cta={{ label: 'See all articles', href: '#' }}
        posts={blogPosts}
      />

      <Newsletter
        title="Sign up for our newsletter"
        action={async (formData: FormData) => {
          //sleep(2000)
          await new Promise(resolve => setTimeout(resolve, 2000))

          const shouldFail = Math.random() > 0.5

          if (shouldFail) {
            throw new Error('Email is required')
          }

          console.log('Email:', formData.get('email'))
        }}
        description="Get the latest updates and insights delivered to your inbox"
        successMessage="Thanks for signing up to our newsletter."
        errorMessage="There has been a system error. Please, send your form again. "
      />

      <FAQSection title="FAQs" items={faqs} />

      <FooterSection
        title={
          <>
            VIBE DESIGNED AND built by&nbsp;
            <Link href="www.tinloof.com" target="_blank" className="hover:underline">
              WWW.TINLOOF.COM
            </Link>
          </>
        }
        logo={{ src: '/2px/logo.svg', altText: '2px Logo', width: 293, height: 149 }}
        copyright={
          <p className="flex gap-6">
            <span>© 2024 2px</span>
            <span>
              Built by{' '}
              <Link href="www.tinloof.com" target="_blank">
                Tinloof
              </Link>
            </span>
          </p>
        }
        socialMediaLinks={footerSocials}
        sections={footerGroups}
      />
    </div>
  )
}
