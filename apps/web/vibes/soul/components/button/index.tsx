'use client'

import Link from 'next/link'
import { ReactNode, Ref, forwardRef } from 'react'

import clsx from 'clsx'

export interface Props {
  className?: string
  link?: { href: string; target?: string }
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'default' | 'small'
  children?: ReactNode
}

export const Button = forwardRef(function Button(
  { className, link, variant = 'primary', size = 'default', children = 'Button' }: Props,
  ref: Ref<HTMLAnchorElement>
) {
  return (
    <Link
      ref={ref}
      className={clsx(
        className,
        'group relative shrink-0 overflow-hidden rounded-full text-center font-medium leading-normal before:absolute before:left-0 before:top-0 before:z-0 before:h-14 before:w-full before:-translate-x-[110%] before:rounded-[28px] before:transition-transform before:duration-300 before:ease-in-out hover:before:translate-x-0',
        link?.href === '#' && 'pointer-events-none',
        {
          primary: 'bg-primary text-background before:bg-accent',
          secondary: 'bg-foreground text-background before:bg-background hover:text-foreground',
          tertiary: 'bg-background text-foreground before:bg-foreground hover:text-background',
        }[variant],
        {
          default: 'px-6 py-4 text-base',
          small: 'px-4 py-2 text-sm',
        }[size]
      )}
      href={link?.href ?? '#'}
      target={link?.target}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  )
})

export default Button
