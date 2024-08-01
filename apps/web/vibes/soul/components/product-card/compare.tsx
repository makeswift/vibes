import Checkbox from '@/vibes/soul/components/checkbox'

type Props = {
  label?: string
  checked: boolean
  setChecked: (checked: boolean) => void
}

export const Compare = function Compare({ label, checked, setChecked }: Props) {
  return (
    <div
      onClick={e => {
        e.preventDefault()
        setChecked(!checked)
      }}
      className="absolute right-2.5 top-2.5 z-10 flex cursor-default items-center gap-2 text-foreground @4xl:bottom-4 @4xl:right-4 @4xl:top-auto"
    >
      {label && <span className="hidden @4xl:block">{label}</span>}
      <Checkbox checked={checked} setChecked={setChecked} />
    </div>
  )
}

export default Compare
