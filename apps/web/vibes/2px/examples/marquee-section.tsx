import MarqueeSection from '@/vibes/2px/components/marquee-section'

export default function Preview() {
  return (
    <div className="flex min-h-48 max-w-[90rem] items-center justify-center bg-white py-5 sm:min-h-64 sm:py-8 lg:min-h-80 lg:py-12">
      <MarqueeSection text={`Summer 24’ we moved into Reform´s bright showroom in Copenhagen.`} />
    </div>
  )
}
