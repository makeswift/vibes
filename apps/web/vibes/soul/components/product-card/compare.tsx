import Checkbox from '@/vibes/soul/components/checkbox'

type Props = {
  label?: string
  checked: boolean
  setChecked: (checked: boolean) => void
}

export const Compare = function Compare({ label, checked, setChecked }: Props) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setChecked(!checked)
    }
  }
  return (
    <div
      onClick={e => {
        e.preventDefault()
        setChecked(!checked)
      }}
      onKeyDown={handleKeyDown}
      role="button"
      className="absolute right-2.5 top-2.5 z-10 flex cursor-default items-center gap-2 text-foreground @xs:right-4 @xs:top-4"
    >
      {label && <span className="hidden @xs/card:block">{label}</span>}
      <Checkbox checked={checked} setChecked={setChecked} />
    </div>
  )
}

export default Compare
