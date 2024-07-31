'use client'

import Link from 'next/link'
import { ReactNode, Ref, forwardRef } from 'react'

import clsx from 'clsx'

import '@/vibes/soul/styles.css'

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
  const lightness = 300

  return (
    <Link
      ref={ref}
      className={clsx(
        className,
        'group relative w-fit shrink-0 overflow-hidden rounded-full text-center font-medium leading-normal transition-colors focus:outline-none focus:ring-1',
        link?.href === '#' && 'pointer-events-none opacity-20',
        {
          primary: 'bg-primary text-foreground',
          secondary: 'bg-foreground text-foreground hover:text-background',
          tertiary: 'bg-background text-background hover:text-foreground',
        }[variant],
        {
          default: 'px-6 py-[13px] text-base',
          small: 'px-4 py-2 text-sm',
        }[size]
      )}
      href={link?.href ?? '#'}
      target={link?.target}
    >
      <div
        className={clsx(
          'absolute left-0 top-0 z-0 w-full -translate-x-[110%] rounded-full transition-[opacity,transform] duration-300 ease-out group-hover:translate-x-0',
          link?.href === '#' && 'pointer-events-none opacity-20',
          {
            primary: 'bg-primary-300',
            secondary: 'bg-background',
            tertiary: 'bg-foreground',
          }[variant],
          {
            default: 'h-[50px]',
            small: 'h-[37px]',
          }[size]
        )}
      />
      <span
        className={clsx('relative z-10 flex transition-colors', {
          'group-hover:text-foreground': variant === 'primary' && lightness < 700,
          'group-hover:text-background': variant === 'primary' && lightness >= 700,
          invert: variant !== 'primary',
        })}
      >
        {children}
      </span>
    </Link>
  )
})

export default Button
