'use client';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { clsx } from 'clsx';
import type { ComponentProps } from 'react';

import { ScrollAreaBar } from '@/vibes/soul/primitives/scroll-area/components/scroll-area-bar';

export interface ScrollAreaRootProps extends ComponentProps<typeof ScrollAreaPrimitive.Root> {
  orientation?: 'vertical' | 'horizontal';
}

export function ScrollAreaRoot({
  className,
  children,
  orientation,
  ...props
}: ScrollAreaRootProps) {
  return (
    <ScrollAreaPrimitive.Root
      className={clsx('overflow-hidden', className)}
      data-slot="scroll-area-root"
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        className="size-full rounded-[inherit]"
        data-slot="scroll-area-viewport"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaBar orientation={orientation} />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}
