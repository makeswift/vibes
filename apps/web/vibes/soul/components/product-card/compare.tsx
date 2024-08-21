import Checkbox from '@/vibes/soul/components/checkbox'

interface Props {
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
      className="absolute right-2.5 top-2.5 z-10 flex cursor-default items-center gap-2 text-foreground @lg:bottom-4 @lg:right-4 @lg:top-auto"
    >
      {label && <span className="hidden @lg:block">{label}</span>}
      <Checkbox checked={checked} setChecked={setChecked} />
    </div>
  )
}

export default Compare
