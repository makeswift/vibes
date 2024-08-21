import DatePicker from '@/vibes/2px/components/date-picker'

export default function Preview() {
  return (
    <div className="flex max-w-lg flex-col items-center justify-center gap-5 bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-[500px] lg:p-12">
      <DatePicker disabled />
      <DatePicker />
      <DatePicker variant="success" />
      <DatePicker variant="error" />
    </div>
  )
}
