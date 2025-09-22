'use client';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { clsx } from 'clsx';
import type { ComponentProps } from 'react';

export type ScrollAreaBarProps = ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>;

export function ScrollAreaBar({
  className,
  orientation = 'vertical',
  ...props
}: ScrollAreaBarProps) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      className={clsx(
        'data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out-0 data-[state=visible]:fade-in-0 flex touch-none bg-transparent p-1 transition-colors select-none',
        orientation === 'vertical' && 'h-full w-3.5 border-l border-l-transparent',
        orientation === 'horizontal' && 'h-3.5 flex-col border-t border-t-transparent',
        className,
      )}
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        className="bg-contrast-200 relative flex-1 rounded-full"
        data-slot="scroll-area-thumb"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}
