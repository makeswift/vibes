import { clsx } from 'clsx'
import { Loader2 } from 'lucide-react'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'large' | 'medium' | 'small' | 'icon'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button = function Button({
  variant = 'primary',
  size = 'large',
  onClick,
  loading,
  disabled,
  className,
  children,
  type = 'button',
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        'relative z-0 select-none justify-center overflow-hidden rounded-full border text-center font-medium leading-normal transition-colors focus-visible:outline-none focus-visible:ring-2',
        {
          primary: 'border-primary bg-primary text-foreground ring-foreground',
          secondary: 'border-foreground bg-foreground text-background ring-primary',
          tertiary: 'border-contrast-200 bg-background text-background ring-primary',
        }[variant],
        // After Pseudo Element / Animated Background Styles
        'after:absolute after:inset-0 after:-z-10 after:-translate-x-[105%] after:rounded-full after:transition-[opacity,transform] after:duration-300 after:[animation-timing-function:cubic-bezier(0,0.25,0,1)]',
        !loading && !disabled && 'hover:after:translate-x-0',
        {
          primary: 'after:bg-background/40',
          secondary: 'after:bg-background',
          tertiary: 'after:bg-contrast-100',
        }[variant],
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
      type={type}
      onClick={onClick}
      aria-busy={loading}
      {...props}
    >
      <>
        <span
          className={clsx(
            'flex items-center justify-center transition-all duration-300 ease-in-out',
            loading ? '-translate-y-10 opacity-0' : 'translate-y-0 opacity-100',
            {
              icon: 'p-2.5 text-sm',
              small: 'gap-x-2 px-4 py-2.5 text-sm',
              medium: 'gap-x-2.5 px-5 py-3 text-base',
              large: 'gap-x-3 px-6 py-4 text-base',
            }[size],
            (variant === 'secondary' || variant === 'tertiary') && 'mix-blend-difference'
          )}
        >
          {children}
        </span>

        <span
          className={clsx(
            'absolute inset-0 grid place-content-center transition-all duration-300 ease-in-out',
            loading ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          )}
        >
          <Loader2 className={clsx('animate-spin', variant === 'tertiary' && 'text-foreground')} />
        </span>
      </>
    </button>
  )
}
