import Checkbox from '@/vibes/soul/components/checkbox'

type Props = {
  className?: string
  label?: string
  checked: boolean
  setChecked: (checked: boolean) => void
}

export const Compare = function Compare({ className, label, checked, setChecked }: Props) {
  return (
    <button
      onClick={e => {
        e.preventDefault()
        setChecked(!checked)
      }}
      className={`flex cursor-default items-center gap-2 ${className}`}
    >
      {label && <span className="hidden text-foreground @4xl:block">{label}</span>}
      <Checkbox checked={checked} setChecked={setChecked} />
    </button>
  )
}

export default Compare
