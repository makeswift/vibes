import Tabs from '@/vibes/2px/components/tabs'
import TextSection from '@/vibes/2px/components/text-section'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-5 @container sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <TextSection
        heading="We are an international design gallery"
        text="We aim to provide artists with a platform to show off their one-of-a-kind and limited edition contemporary work in furniture, ceramics, sculpture, and design. The designers range from well-known names to emerging talents, each exhibiting a distinctive approach or style that is unequivocally unique in some manner."
      />
    </div>
  )
}
