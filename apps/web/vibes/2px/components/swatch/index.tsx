'use client'

import { cn } from '@/lib/utils'

interface Props {
  id: string
  className?: string
  name: string
  disabled: boolean
  inStock: boolean
  sample: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Swatch({
  id,
  className,
  name,
  disabled,
  inStock,
  sample,
  checked,
  onChange,
}: Props) {
  const hexColorRegex = /^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/

  const style = hexColorRegex.test(sample)
    ? { backgroundColor: sample }
    : {
        backgroundImage: `url(${sample})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
  return (
    <label
      htmlFor={id}
      className={cn(className, 'group inline-flex items-center gap-3', {
        'cursor-pointer': inStock && !disabled,
        'cursor-not-allowed': !inStock || disabled,
      })}
    >
      <span className="relative grid grid-cols-[2.25rem] grid-rows-[2.25rem] @lg:grid-cols-[4.75rem] @lg:grid-rows-[4.75rem]">
        <span
          className={cn(
            'absolute left-0 right-0 col-span-1 col-start-1 row-span-1 row-start-1 h-full w-full rounded-full ',
            {
              'group-hover:border-2 group-hover:border-dashed group-hover:border-foreground':
                !disabled,
            }
          )}
        />
        <span
          className={cn(
            'invisible absolute left-0 right-0 col-span-1 col-start-1 row-span-1 row-start-1 box-content h-full w-full place-self-center rounded-full border-2 border-accent',
            { 'group-focus-within:visible': !disabled }
          )}
        />
        <input
          type="radio"
          name={name}
          className="hidden"
          value={sample}
          id={id}
          checked={checked}
          disabled={disabled || !inStock}
          onChange={onChange}
        />
        <span
          className={cn(
            'box-border h-[2.25rem] w-[2.25rem] rounded-full border-foreground  @lg:h-[4.75rem] @lg:w-[4.75rem]',
            checked && 'border-[2px] border-solid'
          )}
          style={style}
        />
        {disabled && (
          <span className="absolute top-1/2 w-full rotate-45 scale-x-[120%] border-t-2 border-foreground" />
        )}
        {!inStock && (
          <span className="absolute top-1/2 w-full rotate-45 scale-x-[120%] border-t-2 border-dashed border-foreground" />
        )}
      </span>
    </label>
  )
}
