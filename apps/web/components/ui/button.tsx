import { clsx } from 'clsx';
import * as React from 'react';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'default' | 'ghost' | 'link';
  size?: 'large' | 'medium' | 'small' | 'icon';
  active?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = 'default', size = 'medium', active = true, children, ...props }, ref) => {
    return (
      <button
        className={clsx('group relative z-0 rounded-full focus:outline-hidden', className)}
        ref={ref}
        {...props}
      >
        <span
          className={clsx(
            'group-focus-visible:border-primary group-focus-visible:ring-primary inline-flex items-center justify-center rounded-full border font-bold whitespace-nowrap ring-1 ring-transparent ring-offset-0 transition-colors ring-inset',
            {
              default:
                'pattern-shadow pattern-shadow-sm pattern-shadow-hover border-foreground bg-background',
              ghost: 'hover:bg-contrast-100 border-transparent',
              link: 'underline-offset-4 hover:underline',
            }[variant],
            {
              large: 'gap-x-2 px-4 py-2 text-base',
              medium: 'gap-x-2 px-4 py-2 text-sm',
              small: 'gap-x-1.5 px-3 py-1.5 text-xs',
              icon: 'p-1.5',
            }[size],
            active
              ? 'text-foreground'
              : 'text-contrast-300 hover:text-contrast-400 [&_svg]:stroke-current',
          )}
        >
          {children}
        </span>
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
