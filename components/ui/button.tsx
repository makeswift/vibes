import * as React from 'react'

import { type VariantProps, cva } from 'class-variance-authority'
import clsx from 'clsx'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full border text-sm font-semibold outline-none ring-offset-background transition-colors before:hidden',
  {
    variants: {
      variant: {
        default:
          'bg-background text-foreground border-foreground pattern-shadow pattern-shadow-sm hover:pattern-shadow-hover',
        ghost: 'hover:bg-foreground/5 border-transparent',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className="relative z-0 focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        ref={ref}
        {...props}
      >
        <span className={clsx(buttonVariants({ variant, size, className }))}>{children}</span>
      </button>
    )
  }
)
Button.displayName = 'Button'
export { Button, buttonVariants }
