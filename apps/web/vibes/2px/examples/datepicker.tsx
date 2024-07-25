import DatePicker from '@/vibes/2px/components/datepicker'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <DatePicker defaultDate="2025-01-01" />
    </div>
  )
}
