import * as RadixCheckbox from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import Icon from '@/vibes/soul/components/icon'

interface Props {
  checked: boolean
  setChecked: (checked: boolean) => void
  label?: string
  className?: string
}

export const Checkbox = function Checkbox({
  checked = false,
  setChecked,
  label,
  className = '',
}: Props) {
  return (
    <div className={clsx('flex gap-2', className)}>
      <RadixCheckbox.Root
        className={clsx(
          'flex h-6 w-6 items-center justify-center rounded-md border transition-colors duration-150',
          checked ? 'border-foreground bg-foreground' : 'border-contrast-100 bg-background'
        )}
        defaultChecked
        id="checkbox"
        checked={checked}
        onCheckedChange={setChecked}
      >
        <RadixCheckbox.Indicator>
          <Icon
            name="Check"
            color="white"
            className={clsx(
              'h-4 w-4 text-white transition-[opacity,transform] duration-150',
              checked ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            )}
          />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>

      {label && (
        <label className="cursor-pointer select-none text-foreground" htmlFor="checkbox">
          {label}
        </label>
      )}
    </div>
  )
}

export default Checkbox
