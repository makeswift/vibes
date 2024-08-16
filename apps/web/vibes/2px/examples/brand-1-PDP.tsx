'use client'

import Link from 'next/link'

import CarouselSection from '@/vibes/2px/components/carousel-section'
import FAQSection from '@/vibes/2px/components/faq-section'
import FooterSection from '@/vibes/2px/components/footer-section'
import Gallery from '@/vibes/2px/components/gallery'
import Header from '@/vibes/2px/components/header'
import MediaAndTextSection from '@/vibes/2px/components/media-and-text-section'
import TextSection from '@/vibes/2px/components/text-section'

import Logo from './assets/logo.svg'
import moltenStool from './assets/molten-stool.png'
import material2 from './assets/swatch-example-1.png'
import material3 from './assets/swatch-example-2.png'
import material1 from './assets/swatch-example.png'
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
              src: moltenStool.src,
              altText: 'Molten Stool',
            },
            {
              src: moltenStool.src,
              altText: 'Molten Stool',
            },
            {
              src: moltenStool.src,
              altText: 'Molten Stool',
            },
          ],
          id: 1,
          name: 'Molten Stool',
          price: '549,00 €',
          options: [
            {
              label: 'Colour / treatment',
              type: 'swatch',
              values: [
                {
                  value: 'natural',
                  inStock: true,
                  sample: material1.src,
                },
                {
                  value: 'black',
                  inStock: false,
                  sample: material2.src,
                },
                {
                  value: 'white',
                  inStock: true,
                  sample: material3.src,
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
      {/* @TODO: replace by new component */}
      <TextSection
        className="bg-white"
        heading=""
        text="Our Molten stool in the perfect piece for your entrance hall where guests will stub their toes on it, resulting in a general panic and a hospital trip."
      />

      {/* @TODO: create new details section */}
      <MediaAndTextSection
        className="flex-row-reverse bg-white"
        image={{ url: '/2px/mirror-chair.png', alt: 'Mirror chair', width: 1024, height: 720 }}
        subtitle="now in stock"
        text={`Come try it on at our studio.`}
        links={[
          { label: 'Contact us', href: 'mailto:' },
          { label: 'Maps', href: 'www.instagram.com' },
        ]}
      />

      <FAQSection title="FAQs" items={faqs} />

      <CarouselSection items={productSlides} title="New in" showArrows />

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
