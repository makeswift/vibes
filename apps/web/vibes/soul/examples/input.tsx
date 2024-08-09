import Input from '@/vibes/soul/components/input'

export default function Preview() {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center gap-5 p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <div className="grid max-w-[390px] grid-cols-2 gap-3">
        <Input variant="default" placeholder="Placeholder" />
        <Input variant="price" placeholder="Placeholder" />
      </div>
      <Input variant="large" placeholder="Placeholder" className="max-w-[390px]" />
      <Input variant="button" placeholder="Placeholder" className="max-w-[390px]" />
      <Input variant="brand" placeholder="Placeholder" className="max-w-[390px]" />
    </div>
  )
}
