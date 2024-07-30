'use client'

import clsx from 'clsx'

import Check from '@/vibes/soul/components/icons/Check'

interface Props {
  checked: boolean
  setChecked: (checked: boolean) => void
}

export const Checkbox = function Checkbox({ checked = false, setChecked }: Props) {
  return (
    <label
      htmlFor="checkbox"
      className={clsx(
        'flex h-6 w-6 items-center justify-center rounded-md border transition-colors duration-150',
        checked ? 'border-foreground bg-foreground' : 'border-contrast-100 bg-background'
      )}
    >
      <input
        type="checkbox"
        id="checkbox"
        onClick={() => setChecked(!checked)}
        checked={checked}
        className="hidden"
      />
      <Check
        className={clsx(
          'h-4 w-4 text-background transition-[opacity,transform] duration-150',
          checked ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        )}
      />
    </label>
  )
}

export default Checkbox
