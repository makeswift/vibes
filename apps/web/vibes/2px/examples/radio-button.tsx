import RadioButton from '@/vibes/2px/components/radio-button'

export default function Preview() {
  return (
    <div className="flex min-h-48 flex-col items-start justify-center gap-3 bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <RadioButton label="Radio item" />
      <RadioButton label="Disabled" disabled />
      <RadioButton label="Checked" checked />
    </div>
  )
}
