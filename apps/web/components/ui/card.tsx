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
      className={clsx('not-prose border-foreground bg-background w-full border', className)}
    >
      {children}
    </div>
  );
}
