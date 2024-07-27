import HeroCategory from '@/vibes/soul/components/hero-category'

export default function Preview() {
  return (
    <div className="min-h-48 bg-background">
      <HeroCategory
        heading="Pro-Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
        video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
        link={{ href: '/', target: '_self' }}
        mediaAlign="left"
      />
    </div>
  )
}
