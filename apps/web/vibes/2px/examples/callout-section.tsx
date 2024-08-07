import CalloutSection from '@/vibes/2px/components/callout-section'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white @container sm:min-h-64 lg:min-h-80">
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
    </div>
  )
}
