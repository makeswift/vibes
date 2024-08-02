import { cn } from '@/lib/utils'

interface Props extends Omit<React.HTMLProps<HTMLInputElement>, 'type'> {
  inStock: boolean
  sample: string
}

export default function Swatch({ className, disabled, inStock, sample, ...props }: Props) {
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
      className={cn(className, 'group inline-flex cursor-pointer items-center gap-3', {
        'cursor-not-allowed': disabled,
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
        <input type="radio" className="peer hidden" disabled={disabled} {...props} />
        <span
          className="box-border h-9 w-9 rounded-full border-2 border-transparent peer-checked:border-foreground @lg:h-[4.75rem] @lg:w-[4.75rem]"
          style={style}
        />
        {disabled || !inStock ? (
          <span
            className={cn(
              'absolute top-1/2 w-full rotate-45 scale-x-[120%] border-t-2 border-foreground',
              {
                'border-dashed': !inStock,
              }
            )}
          />
        ) : null}
      </span>
    </label>
  )
}
