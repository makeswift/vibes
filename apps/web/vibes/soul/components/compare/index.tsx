import Checkbox from '@/vibes/soul/components/checkbox'

type Props = {
  label: string
  checked: boolean
  setChecked: (checked: boolean) => void
}

export default function Compare({ label, checked, setChecked }: Props) {
  return (
    <button
      onClick={() => setChecked(!checked)}
      className="flex items-center gap-2 focus:outline-none focus:ring-1"
    >
      {label}
      <Checkbox checked={checked} setChecked={setChecked} />
    </button>
  )
}
