'use client'

import { cn } from '@/lib/utils'

interface Props {
  size: string
  checked: boolean
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
  disabled: boolean
  unavailable: boolean
}

export default function SizeList({ size, checked, setChecked, disabled, unavailable }: Props) {
  return (
    <label
      htmlFor="size-list-item"
      className={cn(
        'line-height-[1.375rem] relative flex min-h-10 min-w-10 items-center justify-center font-body text-xs font-medium hover:border-dashed focus:shadow-[0px_0px_0px_2px_#FE5437]',
        {
          'border-[2px] border-foreground bg-background text-foreground':
            !checked || (unavailable && (!disabled || checked)),
          'bg-foreground text-background': checked && !unavailable && !disabled,
          'border-[2px] border-contrast-300 text-contrast-300 hover:!border-solid': disabled,
          'border-[2px] border-foreground text-foreground hover:!border-solid': unavailable,
        }
      )}
    >
      <input
        type="checkbox"
        id="size-list-item"
        className="hidden"
        disabled={disabled || unavailable}
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      {unavailable && (
        <div className="absolute w-full -rotate-45 scale-x-[1.4142] border border-foreground " />
      )}

      <span>{size}</span>
    </label>
  )
}
