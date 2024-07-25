import clsx from 'clsx'

interface RadioButtonProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'hidden'> {
  label: string
}

const RadioButton = ({ className, label, ...inputProps }: RadioButtonProps) => {
  return (
    <label
      className={clsx('group inline-flex items-center gap-3', {
        'cursor-pointer': !inputProps.disabled,
        'cursor-not-allowed': inputProps.disabled,
      })}
      htmlFor={inputProps.id}
    >
      <span className="grid grid-cols-[1.5rem] grid-rows-[1.5rem]">
        <span
          className={clsx(
            'col-span-1 col-start-1 row-span-1 row-start-1 h-6 w-6 rounded-full border-2 border-foreground',
            { 'group-hover:border-dashed': !inputProps.disabled }
          )}
        />
        <span
          className={clsx(
            'invisible col-span-1 col-start-1 row-span-1 row-start-1 box-content h-6 w-6 place-self-center rounded-full border-2 border-accent',
            { 'group-focus-within:visible': !inputProps.disabled }
          )}
        />
        <input {...inputProps} type="radio" className="radio-input peer hidden" />
        <span className="dot invisible col-span-1 col-start-1 row-span-1 row-start-1 h-4 w-4 place-self-center rounded-full bg-foreground peer-checked:visible" />
      </span>
      <span
        className={clsx('justify-self-start text-xs !font-medium !leading-snug text-foreground', {
          'line-through': inputProps.disabled,
        })}
      >
        {label}
      </span>
    </label>
  )
}

RadioButton.displayName = 'RadioButton'

export default RadioButton
