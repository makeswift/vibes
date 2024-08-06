import { Accordions } from '@/vibes/soul/components/accordions'

export default function Preview() {
  const accordions = [
    {
      title: 'Description',
      content:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    },
    {
      title: 'Description',
      content:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    },
    {
      title: 'Description',
      content:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    },
    {
      title: 'Description',
      content:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    },
  ]

  return (
    <div className="flex min-h-48 items-center justify-center bg-background px-5 sm:min-h-64 sm:py-8 lg:min-h-80 lg:px-20 lg:py-12">
      <Accordions accordions={accordions} />
    </div>
  )
}
