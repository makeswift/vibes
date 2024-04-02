import Link from 'next/link'
import { ReactNode, Ref, forwardRef } from 'react'

import clsx from 'clsx'

export interface Props {
  className?: string
  link?: { href: string; target?: string }
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'small'
  children?: ReactNode
  borderGlow?: boolean
}

const Button = forwardRef(function Button(
  {
    className,
    link,
    variant = 'primary',
    size = 'default',
    children = 'Button',
    borderGlow,
  }: Props,
  ref: Ref<HTMLAnchorElement>
) {
  return (
    <Link
      ref={ref}
      className={clsx(
        className,
        'group relative z-0 overflow-hidden rounded-xl p-[1px] text-center leading-normal text-white shadow-xl shadow-black/25',
        link?.href === '#' && 'pointer-events-none'
      )}
      href={link?.href ?? '#'}
      target={link?.target}
    >
      <div
        className={clsx(
          'animate-rotatingGradient absolute left-1/2 top-1/2 -z-10 aspect-square w-[200%] origin-top-left bg-[conic-gradient(var(--tw-gradient-stops))] from-transparent via-transparent to-primary transition-all duration-1000',
          borderGlow ? 'opacity-100' : 'opacity-0'
        )}
      />
      <div
        className={clsx(
          'before:rounded-circle inline-flex items-center justify-center gap-x-3 overflow-hidden rounded-xl bg-black leading-normal text-white ring-1 ring-white/20 transition duration-700 before:absolute before:bottom-0 before:left-1/2 before:-z-0 before:h-full before:w-full before:-translate-x-1/2 before:translate-y-1/2 before:blur-lg before:transition-all before:duration-700 before:ease-in-out hover:ring-white/40 before:hover:scale-110 hover:before:opacity-40',
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
        <span className="shrink-0 text-white">{children}</span>
      </div>
    </Link>
  )
})

export default Button
