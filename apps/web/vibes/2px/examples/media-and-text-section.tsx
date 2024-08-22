import MediaAndTextSection from '@/vibes/2px/components/media-and-text-section'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white @container sm:min-h-64 lg:min-h-80">
      <MediaAndTextSection
        image={{ url: '/2px/mirror-chair.png', alt: 'Mirror chair', width: 1024, height: 720 }}
        subtitle="Friedrichstrasse 89, 10119 Berlin"
        text={`We aim to provide artists with a platform to show off their one-of-a-kind and limited edition contemporary work in furniture, ceramics, sculpture, and design. The designers range from well-known names to emerging talents, each exhibiting a distinctive approach or style that is unequivocally unique in some manner.  With the use of unique and special materials that can suit diverse interiors and styles, our curation attempts to reflect the diversity of artistic inspirations. `}
        links={[
          { label: 'email', href: 'mailto:' },
          { label: 'instagram', href: 'www.instagram.com' },
        ]}
      />
    </div>
  )
}
