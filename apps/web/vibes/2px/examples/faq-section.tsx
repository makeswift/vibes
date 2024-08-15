import FAQSection from '@/vibes/2px/components/faq-section'

export const faqs = [
  {
    title: 'What are your minimum order quantities?',
    body: 'Summer 24’ we moved into Reform´s bright showroom in Copenhagen. For a week the NIKO JUNE production was happening here behind the glass front facing warm pavement and the oyster bar across the road.',
  },
  {
    title: 'What are your minimum order quantities?',
    body: 'Summer 24’ we moved into Reform´s bright showroom in Copenhagen. For a week the NIKO JUNE production was happening here behind the glass front facing warm pavement and the oyster bar across the road.',
  },
  {
    title: 'What are your minimum order quantities?',
    body: 'Summer 24’ we moved into Reform´s bright showroom in Copenhagen. For a week the NIKO JUNE production was happening here behind the glass front facing warm pavement and the oyster bar across the road.',
  },
  {
    title: 'What are your minimum order quantities?',
    body: 'Summer 24’ we moved into Reform´s bright showroom in Copenhagen. For a week the NIKO JUNE production was happening here behind the glass front facing warm pavement and the oyster bar across the road.',
  },
]
export default function Preview() {
  return (
    <div className="flex min-h-48 justify-center bg-background  @container sm:min-h-64 lg:min-h-80">
      <FAQSection title="FAQs" items={faqs} />
    </div>
  )
}
