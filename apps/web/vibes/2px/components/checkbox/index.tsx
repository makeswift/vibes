import { cn } from '@/lib/utils'
import { CheckIcon } from '@/vibes/2px/components/icons/CheckIcon'

interface Props extends Omit<React.HTMLProps<HTMLInputElement>, 'type'> {
  checked: boolean
  setChecked: (checked: boolean) => void
}

export default function Checkbox({ checked = false, setChecked, ...props }: Props) {
  return (
    <label
      htmlFor={props.id}
      className={cn(
        'flex h-6 w-6 cursor-pointer items-center justify-center border-2 border-foreground hover:border-dashed',
        {
          'bg-background text-background': !checked,
          'bg-foreground text-foreground': checked,
        },
        props.className
      )}
    >
      <input
        type="checkbox"
        className="hidden"
        onChange={e => setChecked(e.target.checked)}
        checked={checked}
        {...props}
      />
      {checked && <CheckIcon className=" h-4 w-4 text-background" />}
    </label>
  )
}
