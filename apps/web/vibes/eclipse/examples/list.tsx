import { List } from '@/vibes/eclipse/components/list'

export default function Preview() {
  const items = [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }, { text: 'Item 4' }]

  return (
    <div className="flex min-h-48 items-center justify-center bg-[#07090D] p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <List items={items} />
    </div>
  )
}
