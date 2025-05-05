'use client';

import * as TooltipRadix from '@radix-ui/react-tooltip';
import { clsx } from 'clsx';
import { Info } from 'lucide-react';
import { ReactNode } from 'react';
import * as React from 'react';

function Tooltip({
  className,
  children,
  content,
  showIcon = true,
  ...props
}: {
  className?: string;
  children?: ReactNode;
  content?: string;
  showIcon?: boolean;
}) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root delayDuration={0}>
        <TooltipRadix.Trigger asChild>
          <div className="mx-2 inline">
            <div className="flex gap-x-1">
              {children}
              {showIcon && (
                <Info
                  absoluteStrokeWidth
                  className="text-contrast-400"
                  size={16}
                  strokeWidth={1.25}
                />
              )}
            </div>
          </div>
        </TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content
            className={clsx(
              'data-[state=delayed-open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=delayed-open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=delayed-open]:zoom-in-95 z-50 outline-hidden',
              className,
            )}
            forceMount
            sideOffset={8}
            {...props}
          >
            <div className="pattern-shadow pattern-shadow-sm border-foreground bg-background max-w-48 border px-2.5 py-2 text-sm leading-snug">
              {content}
            </div>
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
}

export { Tooltip };
