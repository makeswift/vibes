import { Accordions } from '@/vibes/soul/components/accordions'

export default function Preview() {
  const accordions = [
    {
      id: '1',
      title: 'Description',
      content:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    },
    {
      id: '2',
      title: 'Description',
      content:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    },
    {
      id: '3',
      title: 'Description',
      content:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    },
    {
      id: '4',
      title: 'Description',
      content:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    },
  ]

  return (
    <div className="m-auto flex h-screen max-w-screen-lg justify-center p-8">
      <Accordions accordions={accordions} />
    </div>
  )
}
