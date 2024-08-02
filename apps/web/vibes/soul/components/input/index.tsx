'use client'

import { ComponentPropsWithRef, Ref, forwardRef } from 'react'

import clsx from 'clsx'

import Arrow from '@/vibes/soul/components/icons/Arrow'
import '@/vibes/soul/styles.css'

export interface Props extends ComponentPropsWithRef<'input'> {
  variant?: 'default' | 'price' | 'large' | 'brand' | 'button'
}

export const Input = forwardRef(function Input(
  { variant = 'default', ...rest }: Props,
  ref: Ref<HTMLInputElement>
) {
  return (
    <div
      className={clsx(
        { 'bg-primary-100': variant === 'brand' },
        'relative w-full shrink-0 rounded-lg border border-contrast-100 bg-background font-medium transition-colors duration-200 focus-within:border-foreground focus:outline-none'
      )}
    >
      {variant === 'price' && (
        <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2">$</span>
      )}

      <input
        ref={ref}
        {...rest}
        className={clsx(
          'placeholder-contrast-gray-500 w-full bg-transparent text-foreground placeholder:font-normal focus:outline-none',
          {
            'px-6 py-3': variant === 'default',
            'py-3 pl-12 pr-6': variant === 'price',
            'py-5 pl-5 pr-16': variant === 'large' || variant === 'button' || variant === 'brand',
          }
        )}
      />

      {(variant === 'button' || variant === 'brand') && (
        <button
          type="submit"
          className="group absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg bg-foreground text-background transition-transform focus:outline-none focus:ring-1"
        >
          <Arrow
            size="small"
            direction="right"
            className="transition-transform group-hover:translate-x-0.5"
          />
        </button>
      )}
    </div>
  )
})

export default Input
