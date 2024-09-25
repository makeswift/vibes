import { Accordions } from '@/vibes/eclipse/components/accordions'

export default function Preview() {
  const accordions = [
    { title: 'This is a title', body: 'This is the body!' },
    { title: 'This is a title', body: 'This is the body!' },
    { title: 'This is a title', body: 'This is the body!' },
    { title: 'This is a title', body: 'This is the body!' },
  ]

  return (
    <div className="flex h-screen items-start justify-center bg-background p-10">
      <Accordions type="multiple" accordions={accordions} />
    </div>
  )
}
