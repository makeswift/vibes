import Link from 'next/link'
import { ReactNode, Ref, forwardRef } from 'react'

import clsx from 'clsx'

export interface Props {
  className?: string
  link?: { href: string; target?: string }
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'default' | 'small'
  onClick?: () => void
  children?: ReactNode
}

function ctaStyles(
  className = '',
  variant: Props['variant'] = 'primary',
  size: Props['size'] = 'default'
) {
  return clsx(
    'relative flex justify-center w-fit shrink-0 overflow-hidden rounded-full',
    'text-center font-medium leading-normal select-none',
    'border border-transparent focus:outline-none focus:ring-2  transition-colors',
    {
      primary: 'bg-primary text-foreground ring-primary-shadow',
      secondary:
        'bg-foreground text-foreground hover:border-foreground hover:text-background ring-primary',
      tertiary:
        'bg-background text-background hover:border-background hover:text-foreground ring-primary',
    }[variant],
    {
      default: 'px-6 py-[13px] text-base',
      small: 'px-4 py-2 text-sm',
    }[size],
    // After Pseudo Element / Animated Background Styles
    'after:absolute after:inset-0 after:h-full after:z-0 after:w-full after:rounded-full',
    'after:-translate-x-[110%] hover:after:translate-x-0',
    'after:transition-[opacity,transform] after:duration-300 after:ease-out',
    {
      primary: 'after:bg-white/40',
      secondary: 'after:bg-background',
      tertiary: 'after:bg-foreground',
    }[variant],
    {
      default: 'after:h-[50px]',
      small: 'after:h-[37px]',
    }[size],

    className
  )
}

export const Button = forwardRef(function Button(
  { className, link, variant = 'primary', size = 'default', onClick, children = 'Button' }: Props,
  ref: Ref<HTMLAnchorElement | HTMLButtonElement>
) {
  const InnerSpan = () => {
    return (
      <span
        className={clsx(
          'relative z-10 flex h-full items-center justify-center gap-2 transition-colors',
          { invert: variant !== 'primary' }
        )}
      >
        {children}
      </span>
    )
  }

  if (link?.href) {
    return (
      <Link
        ref={ref as Ref<HTMLAnchorElement>}
        className={ctaStyles(className, variant, size)}
        href={link?.href ?? '#'}
        target={link?.target}
      >
        <InnerSpan />
      </Link>
    )
  } else {
    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        className={ctaStyles(className, variant, size)}
        onClick={onClick}
      >
        <InnerSpan />
      </button>
    )
  }
})

export default Button
