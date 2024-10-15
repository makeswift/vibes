'use client'

import { ChangeEvent, ComponentPropsWithRef, Ref, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import { Label } from '@/vibes/soul/components/label'

export interface Props extends ComponentPropsWithRef<'input'> {
  prepend?: string
  label?: string
  error?: string
  className?: string
}

export const Input = forwardRef(function Input(
  { prepend, label, className, required, error, type = 'text', ...rest }: Props,
  ref: Ref<HTMLInputElement>
) {
  const [value, setValue] = useState<string>(String(rest.value ?? ''))

  const formatPhoneNumber = (input: string): string => {
    const cleanedInput = input.replace(/\D/g, '')
    const size = cleanedInput.length

    if (size > 10) return cleanedInput

    const areaCode = cleanedInput.slice(0, 3)
    const prefix = cleanedInput.slice(3, 6)
    const line = cleanedInput.slice(6, 10)

    if (size > 6) return `(${areaCode}) ${prefix}-${line}`
    if (size > 3) return `(${areaCode}) ${prefix}`
    if (size > 0) return `(${areaCode}`
    return cleanedInput
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.replace(/\D/g, '')
    setValue(input)

    rest.onChange?.({
      ...event,
      target: {
        ...event.target,
        value: input,
      },
    })
  }

  return (
    <div className={clsx('w-full', className)}>
      <div className="flex items-center justify-between">
        {label != null && label !== '' && (
          <Label className="mb-2 block text-foreground">{label}</Label>
        )}
        {required === true && <span className="text-xs text-contrast-300">Required</span>}
      </div>
      <div
        className={clsx(
          'relative overflow-hidden rounded-lg border bg-background transition-colors duration-200 focus-within:border-foreground focus:outline-none',
          error != null && error !== '' ? 'border-error' : 'border-contrast-100'
        )}
      >
        {prepend != null && prepend !== '' && (
          <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2">
            {prepend}
          </span>
        )}
        <input
          ref={ref}
          type={type}
          value={type === 'tel' ? formatPhoneNumber(value) : value}
          onChange={handleChange}
          className={clsx(
            'placeholder-contrast-gray-500 w-full bg-transparent px-6 py-3 text-foreground [appearance:textfield] placeholder:font-normal focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
            {
              'py-3 pl-10 pr-6': prepend,
            }
          )}
          {...rest}
        />
      </div>
      {error != null && error !== '' && <span className="text-xs text-error">{error}</span>}
    </div>
  )
})
