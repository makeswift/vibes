import MediaSection from '@/vibes/soul/components/media-section'

export default function Preview() {
  return (
    <div className="flex min-h-48 flex-col gap-2">
      <MediaSection
        heading="Pro-Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
        video="https://rstr.in/monogram/vibes/6Wm_wIw5IMf"
        link={{ href: '/', target: '_self' }}
        mediaAlign="right"
      />
    </div>
  )
}
