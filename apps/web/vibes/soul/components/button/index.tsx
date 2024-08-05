'use client'

import Link from 'next/link'
import { ReactNode, Ref, forwardRef } from 'react'

import clsx from 'clsx'

import '@/vibes/soul/styles.css'

export interface Props {
  className?: string
  link?: { href: string; target?: string }
  variant?: 'primary' | 'dark' | 'light'
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
        'group relative flex w-fit shrink-0 overflow-hidden rounded-full text-center font-medium leading-normal transition-colors focus:outline-none focus:ring-1',
        link?.href === '#' && 'pointer-events-none opacity-20',
        {
          primary: 'bg-primary text-foreground',
          dark: 'bg-foreground text-foreground hover:bg-transparent hover:text-background',
          light: 'bg-background text-background hover:bg-transparent hover:text-foreground',
        }[variant],
        {
          default: 'px-6 py-[13px] text-base',
          small: 'px-4 py-2 text-sm',
        }[size],
        // BG Pseudo Element Styles
        'after:absolute after:left-0 after:top-0 after:z-0 after:w-full after:-translate-x-[110%] after:rounded-full after:transition-[opacity,transform] after:duration-300 after:ease-out hover:after:translate-x-0',
        link?.href === '#' && 'after:pointer-events-none after:opacity-20',
        {
          primary: 'after:bg-white/40',
          dark: 'after:bg-background',
          light: 'after:bg-foreground',
        }[variant],
        {
          default: 'after:h-[50px]',
          small: 'after:h-[37px]',
        }[size]
      )}
      href={link?.href ?? '#'}
      target={link?.target}
    >
      <span
        className={clsx('relative z-10 flex items-center justify-center gap-2 transition-colors', {
          invert: variant !== 'primary',
        })}
      >
        {children}
      </span>
    </Link>
  )
})

export default Button
