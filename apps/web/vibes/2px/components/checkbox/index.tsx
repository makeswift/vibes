import { cn } from '@/lib/utils'
import { CheckIcon } from '@/vibes/2px/components/icons/CheckIcon'

interface Props extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'className'> {
  checked: boolean
  setChecked: (checked: boolean) => void
}

export default function Checkbox({ checked = false, setChecked, ...props }: Props) {
  return (
    <label
      htmlFor="checkbox-element"
      className={cn(
        'flex h-6 w-6 items-center justify-center border-[2px] border-foreground  hover:border-dashed',
        {
          'bg-background text-background': !checked,
          'bg-foreground text-foreground': checked,
        }
      )}
    >
      <input
        type="checkbox"
        className="hidden"
        id="checkbox-element"
        onChange={e => setChecked(e.target.checked)}
        checked={checked}
        {...props}
      />
      {checked && <CheckIcon className=" h-4 w-4 text-background" />}
    </label>
  )
}
