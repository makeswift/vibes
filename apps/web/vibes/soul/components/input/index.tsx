'use client'

import { ComponentPropsWithRef, Ref, forwardRef } from 'react'

import clsx from 'clsx'

export interface Props extends ComponentPropsWithRef<'input'> {
  prepend?: string
  className?: string
}

export const Input = forwardRef(function Input(
  { prepend, className = '', ...rest }: Props,
  ref: Ref<HTMLInputElement>
) {
  return (
    <div
      className={clsx(
        'relative w-full shrink-0 rounded-lg border border-contrast-100 bg-background text-[15px] transition-colors duration-200 focus-within:border-foreground focus:outline-none',
        className
      )}
    >
      {prepend && (
        <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2">
          {prepend}
        </span>
      )}

      <input
        ref={ref}
        {...rest}
        className={clsx(
          'placeholder-contrast-gray-500 w-full bg-transparent px-6 py-3 text-foreground placeholder:font-normal focus:outline-none',
          {
            'py-3 pl-10 pr-6': prepend,
          }
        )}
      />
    </div>
  )
})

export default Input
