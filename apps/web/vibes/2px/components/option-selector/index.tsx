import React from 'react'

import { cn } from '@/lib/utils'

export interface Props extends Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'type'> {
  label?: string
  unavailable?: boolean
}

export default function OptionSelector({ label, checked, disabled, unavailable, ...props }: Props) {
  const ref = React.useRef<HTMLLabelElement>(null)
  const [unavailableValues, setUnavailableValues] = React.useState({
    angle: 45,
    diagonalFactor: 1.4142,
  })
  React.useEffect(() => {
    if (!unavailable) return
    if (!ref.current) return
    const labelWidth = ref.current.offsetWidth
    const labelHeight = ref.current.offsetHeight
    const angle = Math.atan(labelHeight / labelWidth) * (180 / Math.PI)
    const diagonalFactor = Math.sqrt(labelWidth ** 2 + labelHeight ** 2) / labelWidth

    setUnavailableValues({ angle, diagonalFactor })
  }, [ref, unavailable])
  return (
    <label
      ref={ref}
      htmlFor={props.id}
      className={cn(
        'line-height-[1.375rem] relative flex min-h-10 min-w-10 items-center justify-center font-body text-xs font-medium hover:border-dashed focus:shadow-[0px_0px_0px_2px_#FE5437]',
        {
          'border-[2px] border-foreground bg-background text-foreground':
            !checked || (unavailable && (!disabled || checked)),
          'bg-foreground text-background': checked && !unavailable && !disabled,
          'border-[2px] border-contrast-300 text-contrast-300 hover:!border-solid': disabled,
          'border-[2px] border-foreground text-foreground hover:!border-solid': unavailable,
          'cursor-pointer': !disabled && !unavailable,
          'cursor-not-allowed': disabled || unavailable,
        }
      )}
    >
      <input type="radio" className="hidden" disabled={disabled || unavailable} {...props} />
      {unavailable && (
        <div
          className={`absolute w-full border border-foreground`}
          style={{
            transform: `rotate(-${unavailableValues.angle}deg) scaleX(${unavailableValues.diagonalFactor})`,
          }}
        />
      )}

      {label && <span>{label}</span>}
    </label>
  )
}
