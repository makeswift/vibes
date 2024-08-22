import Accordions from '@/vibes/2px/components/accordions'

export default function Preview() {
  const accordions = [
    {
      title: 'What are your minimum order quantities?',
      content:
        'Summer 24’ we moved into Reform´s bright showroom in Copenhagen. For a week the NIKO JUNE production was happening here behind the glass front facing warm pavement and the oyster bar across the road.',
    },
    {
      title: 'What are your minimum order quantities?',
      content:
        'Summer 24’ we moved into Reform´s bright showroom in Copenhagen. For a week the NIKO JUNE production was happening here behind the glass front facing warm pavement and the oyster bar across the road.',
    },
    {
      title: 'What are your minimum order quantities?',
      content:
        'Summer 24’ we moved into Reform´s bright showroom in Copenhagen. For a week the NIKO JUNE production was happening here behind the glass front facing warm pavement and the oyster bar across the road.',
    },
    {
      title: 'What are your minimum order quantities?',
      content:
        'Summer 24’ we moved into Reform´s bright showroom in Copenhagen. For a week the NIKO JUNE production was happening here behind the glass front facing warm pavement and the oyster bar across the road.',
    },
  ]

  return (
    <div className="flex min-h-48 justify-center bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Accordions accordions={accordions} type="multiple" />
    </div>
  )
}
