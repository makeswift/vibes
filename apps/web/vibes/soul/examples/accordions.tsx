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
    <div className="m-auto flex h-screen max-w-screen-lg items-start justify-center p-10">
      <Accordions accordions={accordions} />
    </div>
  )
}
