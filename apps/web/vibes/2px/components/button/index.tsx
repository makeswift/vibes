import { ElementRef, forwardRef } from 'react'

import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

import { LoadingIcon } from '../icons'

export const buttonVariants = cva(
  'rounded-[2.5rem] whitespace-nowrap flex items-center justify-center mx-auto font-body text-lg',
  {
    variants: {
      variant: {
        primary:
          'bg-foreground text-background hover:bg-background hover:text-foreground hover:border-2 hover:border-foreground',
        secondary: 'bg-background text-foreground border-2 border-foreground hover:border-dashed',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export interface ButtonProps {
  className?: string
  variant?: 'primary' | 'secondary'
  loading?: boolean
  loadingText?: string
  text?: string
  size?: 'large' | 'small'
}

const Button = forwardRef<ElementRef<'button'>, ButtonProps>(
  ({ className, variant, loading, loadingText, text, size = 'large', ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, className }),
          {
            'leading-lg tracking-lg h-20 w-full px-20 py-[0.625rem] text-lg': size === 'large',
            'h-10 w-[6.5625rem] px-5 py-[0.625rem] text-sm': size === 'small',
            'leading-base': size === 'small',
          },
          loading && 'hover:'
        )}
        disabled={loading}
        ref={ref}
        {...props}
      >
        {loading ? (
          <LoadingIcon
            className={cn({
              'h-4 w-4': size === 'small',
              'h-6 w-6': size === 'large',
            })}
          />
        ) : (
          text
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
