import { Card } from '@/vibes/eclipse/components/card'
import { Tabs } from '@/vibes/eclipse/components/tabs'

const tabs = [
  {
    title: 'Tab 1',
    children: (
      <Card topGlow={false} className="w-80">
        <div className="p-8">Content of Tab 1!</div>
      </Card>
    ),
  },
  {
    title: 'Tab 2',
    children: (
      <Card topGlow={false} className="w-80">
        <div className="p-8">Content of Tab 1!</div>
      </Card>
    ),
  },
]

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-[#07090D] p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Tabs tabs={tabs} />
    </div>
  )
}
