import List from '.'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white">
      <List items={[{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }]} />
    </div>
  )
}
