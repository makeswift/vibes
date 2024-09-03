'use client'

import Link from 'next/link'

import CarouselSection from '@/vibes/2px/components/carousel-section'
import FAQSection from '@/vibes/2px/components/faq-section'
import FooterSection from '@/vibes/2px/components/footer-section'
import Gallery from '@/vibes/2px/components/gallery'
import Header from '@/vibes/2px/components/header'
import MediaAndTextSection from '@/vibes/2px/components/media-and-text-section'

import ProductDetails from '../components/product-details'
import SectionHeader from '../components/section-header'
import Logo from './assets/logo.svg'
import { items as productSlides } from './carousel-section'
import { items as faqs } from './faq-section'
import { sections as footerGroups, socialMediaLinks as footerSocials } from './footer-section'
import { headerLinks } from './header'

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
      <Gallery
        description="Summer 2022 we moved into Reform´s big bright showroom in Copenhagen. For a week the NIKO JUNE production was happening here behind the glass front facing warm pavement and the oyster bar across the road at Torvehallerne. The showroom was filled with the scent of fresh paint and the sound of sewing machines. The NIKO JUNE collection was presented in the showroom and the production was open for the public to see."
        warranty="1 year warranty"
        relatedProducts={[]}
        product={{
          images: [
            {
              src: '/2px/alentejo-coffee-table.png',
              altText: 'Alentejo coffee table',
            },
            {
              src: '/2px/alentejo-coffee-table-top-view.png',
              altText: 'Alentejo coffee table',
            },
            {
              src: '/2px/alentejo-coffee-table-detail.png',
              altText: 'Alentejo coffee table',
            },
          ],
          id: 1,
          name: 'Alentejo coffee table',
          price: '4,500 €',
          options: [
            {
              label: 'Colour / treatment',
              type: 'swatch',
              values: [
                {
                  value: 'natural',
                  inStock: true,
                  sample: '/2px/swatch-example.png',
                },
                {
                  value: 'black',
                  inStock: false,
                  sample: '/2px/alentejo-swatch-2.png',
                },
                {
                  value: 'white',
                  inStock: true,
                  sample: '/2px/alentejo-swatch-3.png',
                },
              ],
            },
            {
              label: 'Size',
              type: 'dropdown',
              values: [
                { label: 'S', value: 's' },
                { label: 'M', value: 'm' },
                { label: 'L', value: 'l' },
              ],
            },
          ],
        }}
      />
      <SectionHeader
        className="bg-white"
        title="Our Molten stool in the perfect piece for your entrance hall where guests will stub their toes on it, resulting in a general panic and a hospital trip."
      />

      <ProductDetails
        details={[
          { label: 'Dimensions', value: '200mm x 200mm' },
          {
            label: 'Weight',
            value: '600kg',
          },
          {
            label: 'Material',
            value: 'Pure molten hatred',
          },
          {
            label: 'Delivery size',
            value: '3000mm x 3000mm palette',
          },
          {
            label: 'Care instructions',
            value: 'Clean with a damp cloth',
          },
        ]}
      />
      <MediaAndTextSection
        className="bg-white"
        reverse
        image={{
          url: '/2px/alentejo-media.png',
          alt: 'Alentejo coffee table',
          width: 2880,
          height: 1440,
        }}
        subtitle="now in stock"
        text={
          <p className="text-body text-3xl font-medium leading-8  @2xl:text-6xl @2xl:leading-[4rem] @2xl:-tracking-[0.0675em]">
            Come try it on at our studio.
          </p>
        }
        links={[
          { label: 'Contact us', href: 'mailto:' },
          { label: 'Maps', href: 'www.instagram.com' },
        ]}
      />

      <FAQSection title="FAQs" items={faqs} />

      <CarouselSection items={productSlides} title="Related products" showArrows />

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
