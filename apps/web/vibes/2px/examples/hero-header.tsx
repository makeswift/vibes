import HeroHeader from '@/vibes/2px/components/hero-header'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white  @container sm:min-h-64 lg:min-h-80">
      <HeroHeader
        heading="Summer timber hits from Project 213A"
        text="Project 213A is a European design house founded in 2020 as an idea by four friends linked by common design philosophy. This Project became reality with its launch in September 2021."
        image={{
          small: { url: '/2px/hero-header-example-small.png', alt: 'Hero header example' },
          large: { url: '/2px/hero-header-example-large.png', alt: 'Hero header example' },
        }}
        cta={{ label: 'Shop collection', href: '/docs/2px/hero-header' }}
      />
    </div>
  )
}
