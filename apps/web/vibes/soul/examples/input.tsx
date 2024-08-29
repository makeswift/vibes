import Input from '@/vibes/soul/components/input'

export default function Preview() {
  return (
    <div className="mx-auto flex max-w-[390px] flex-col justify-center gap-3 p-5 sm:p-8 lg:p-12">
      <Input placeholder="Placeholder" label="Label" />
      <Input prepend="$" placeholder="Placeholder" />
    </div>
  )
}
