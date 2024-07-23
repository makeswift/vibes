import { Accordions } from '@/vibes/soul/components/accordions'

export default function Preview() {
  const accordions = [
    {
      title: 'Description',
      body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    },
    {
      title: 'Description',
      body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    },
    {
      title: 'Description',
      body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    },
    {
      title: 'Description',
      body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    },
  ]

  return (
    <div className="min-h-48 bg-background py-5">
      <Accordions accordions={accordions} />
    </div>
  )
}
