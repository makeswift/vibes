import { clsx } from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className, ...rest }: Props) {
  return (
    <div
      {...rest}
      className={clsx('not-prose w-full border border-foreground bg-background', className)}
    >
      {children}
    </div>
  );
}
