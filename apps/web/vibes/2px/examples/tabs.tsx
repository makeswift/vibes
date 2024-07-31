import Tabs from '@/vibes/2px/components/tabs'

const tabs = [
  {
    title: 'Tab 1',
    children: <div className="mt-4 p-2 text-center font-body text-2xl">Content of Tab 1!</div>,
  },
  {
    title: 'Tab 2',
    children: <div className="mt-4 p-2 text-center font-body text-2xl">Content of Tab 2!</div>,
  },
  {
    title: 'Tab 3',
    children: <div className="mt-4 p-2 text-center font-body text-2xl">Content of Tab 3!</div>,
  },
  {
    title: 'Tab 4',
    children: <div className="mt-4 p-2 text-center font-body text-2xl">Content of Tab 4!</div>,
  },
]

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Tabs tabs={tabs} />
    </div>
  )
}
