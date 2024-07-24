import { Slot } from '@radix-ui/react-slot'
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
  children: React.ReactNode
  asChild?: boolean
}

const Button = ({ className, variant, loading, children, asChild = false }: ButtonProps) => {
  const Component = asChild ? Slot : 'button'
  return (
    <div className="flex w-full items-center justify-center font-body @container">
      <Component
        className={cn(
          buttonVariants({ variant, className }),

          'h-10 w-fit px-5 py-[0.625rem] text-sm !leading-[var(--line-height-base)] @lg:h-20 @lg:w-full @lg:px-20 @lg:py-[0.625rem] @lg:text-lg',
          loading &&
            variant === 'primary' &&
            'hover:border-none hover:bg-foreground hover:text-background',
          loading && variant === 'secondary' && 'hover:border-solid '
        )}
      >
        {loading ? <LoadingIcon className="h-4 w-4 @lg:h-6 @lg:w-6" /> : children}
      </Component>
    </div>
  )
}

Button.displayName = 'Button'
export default Button
