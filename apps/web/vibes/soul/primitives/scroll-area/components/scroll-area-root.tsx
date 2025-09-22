'use client';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { clsx } from 'clsx';
import type { ComponentProps } from 'react';

import { ScrollAreaBar } from '@/vibes/soul/primitives/scroll-area/components/scroll-area-bar';

export interface ScrollAreaRootProps extends ComponentProps<typeof ScrollAreaPrimitive.Root> {
  orientation?: 'vertical' | 'horizontal' | 'both';
}

export function ScrollAreaRoot({
  className,
  children,
  orientation = 'vertical',
  ...props
}: ScrollAreaRootProps) {
  return (
    <ScrollAreaPrimitive.Root
      className={clsx('relative', className)}
      data-slot="scroll-area-root"
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        className="focus-visible:outline-primary size-full rounded-[inherit] transition-[color,box-shadow] focus-visible:outline-1 focus-visible:outline-offset-2"
        data-slot="scroll-area-viewport"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      {(orientation === 'vertical' || orientation === 'both') && (
        <ScrollAreaBar orientation="vertical" />
      )}
      {(orientation === 'horizontal' || orientation === 'both') && (
        <ScrollAreaBar orientation="horizontal" />
      )}
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}
