import HeroCategory from '@/vibes/soul/components/hero-category'

export default function Preview() {
  return (
    <div className="min-h-48 bg-background">
      <HeroCategory
        heading="Pro-Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
        link={{ href: '/', target: '_self' }}
      />
    </div>
  )
}
