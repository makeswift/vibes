import CalloutSection from '@/vibes/2px/components/callout-section'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white p-5 @container sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <CalloutSection
        text="Use our AR configurator to view our products in your space, or download our catalogue for architects and interior designers."
        images={{
          small: { url: '/2px/logo-apple-ar-small.svg', alt: 'Image example' },
          large: { url: '/2px/logo-apple-ar-large.svg', alt: 'Image example' },
        }}
        ctas={[
          { label: 'AR Configurator', href: '#' },
          { label: 'Download Catalogue', href: '#' },
        ]}
      />
    </div>
  )
}
