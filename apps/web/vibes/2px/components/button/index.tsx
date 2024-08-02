import { ComponentProps } from 'react'

import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

import { LoadingIcon } from '../icons'

export interface ButtonProps extends ComponentProps<'button'> {
  className?: string
  variant?: 'primary' | 'secondary'
  loading?: boolean
  loadingText?: string
  children: React.ReactNode
  asChild?: boolean
}

const Button = ({
  className,
  variant = 'primary',
  loading,
  children,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot : 'button'
  return (
    <div className="flex w-full items-center justify-center font-body">
      <Component
        className={cn(
          'group flex items-center justify-center whitespace-nowrap rounded-[2.5rem]',
          'h-10 w-fit px-5 py-[0.625rem] text-sm !leading-[var(--line-height-base)] @lg:h-20 @lg:w-full @lg:px-20 @lg:py-[0.625rem] @lg:text-lg',
          loading && variant === 'primary' && 'hover:bg-foreground hover:text-background',
          loading && variant === 'secondary' && 'hover:border-solid',
          {
            primary:
              'bg-foreground text-background hover:border-2 hover:border-foreground hover:bg-background hover:text-foreground',
            secondary:
              'border-2 border-foreground bg-background text-foreground hover:border-dashed',
          }[variant],
          className
        )}
        {...props}
      >
        {loading ? (
          <LoadingIcon
            className={cn('h-4 w-4 @lg:h-6 @lg:w-6', {
              'stroke-background group-hover:stroke-foreground': variant === 'primary',
              'stroke-foreground': variant === 'secondary',
            })}
          />
        ) : (
          children
        )}
      </Component>
    </div>
  )
}

Button.displayName = 'Button'
export default Button
