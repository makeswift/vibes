'use client'

import { ReactNode, Ref, forwardRef } from 'react'

import clsx from 'clsx'

export interface Props {
  className?: string
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'small'
  onClick?: () => void
  children?: ReactNode
  borderGlow?: boolean
}

export const Button = forwardRef(function Button(
  {
    className,
    onClick,
    variant = 'primary',
    size = 'default',
    children = 'Button',
    borderGlow = true,
  }: Props,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      className={clsx(
        className,
        'group relative z-0 overflow-hidden rounded-full p-px text-center leading-normal text-foreground'
      )}
      onClick={onClick}
    >
      <div
        className={clsx(
          'absolute left-1/2 top-1/2 -z-10 aspect-square w-[200%] origin-top-left animate-rotate bg-[conic-gradient(var(--tw-gradient-stops))] from-transparent via-transparent to-primary ease-linear',
          borderGlow ? 'opacity-100' : 'opacity-0'
        )}
      />
      <div
        className={clsx(
          'inline-flex items-center justify-center gap-x-3 overflow-hidden rounded-full bg-background leading-normal text-foreground ring-1 ring-foreground/20 transition duration-700 before:absolute before:bottom-0 before:left-1/2 before:-z-0 before:h-full before:w-full before:-translate-x-1/2 before:translate-y-1/2 before:rounded-full before:blur-lg before:transition-all before:duration-700 before:ease-in-out hover:ring-foreground/40 before:hover:scale-110 hover:before:opacity-40',
          {
            primary: 'before:bg-primary before:opacity-25',
            secondary: 'before:opacity-0',
          }[variant],
          {
            default: 'px-6 py-3 text-sm',
            small: 'px-4 py-2 text-sm',
          }[size]
        )}
      >
        <span className="shrink-0 text-foreground">{children}</span>
      </div>
    </button>
  )
})

export default Button
