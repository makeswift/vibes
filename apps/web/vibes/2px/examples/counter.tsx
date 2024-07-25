import Counter from '@/vibes/2px/components/counter'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Counter initialValue={0} minValue={0} maxValue={10} />
    </div>
  )
}
