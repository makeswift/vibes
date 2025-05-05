import { clsx } from 'clsx';
import Link from 'next/link';
import * as React from 'react';

export interface Props {
  className?: string;
  href?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'ghost' | 'link';
  size?: 'large' | 'medium' | 'small' | 'icon';
}

export function ButtonLink({
  className,
  href,
  variant = 'default',
  size = 'medium',
  children = 'Button',
  ...props
}: Props) {
  return (
    <Link
      className={clsx(
        'not-prose group relative z-0 inline-block rounded-full outline-hidden',
        className,
      )}
      href={href ?? '#'}
      {...props}
    >
      <span
        className={clsx(
          'stroke-foreground text-foreground group-focus-visible:border-primary group-focus-visible:ring-primary inline-flex items-center justify-center rounded-full border font-bold whitespace-nowrap ring-1 ring-transparent ring-offset-0 transition-colors ring-inset',
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
        )}
      >
        {children}
      </span>
    </Link>
  );
}
