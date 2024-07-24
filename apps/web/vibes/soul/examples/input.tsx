import Input from '@/vibes/soul/components/input'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-contrast-100 p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Input variant="large" placeholder="Placeholder" className="max-w-[390px]" />
    </div>
  )
}
