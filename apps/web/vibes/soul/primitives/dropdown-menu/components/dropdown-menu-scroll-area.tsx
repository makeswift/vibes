import { clsx } from 'clsx';
import type { ComponentProps } from 'react';

import { ScrollArea } from '@/vibes/soul/primitives/scroll-area';

export type DropdownMenuScrollAreaProps = ComponentProps<typeof ScrollArea>;

export function DropdownMenuScrollArea({
  className,
  children,
  ...props
}: DropdownMenuScrollAreaProps) {
  return (
    <ScrollArea {...props}>
      <div
        className={clsx('flex flex-col gap-0.5 rounded-[inherit] p-2', className)}
        data-slot="dropdown-menu-scroll-area"
      >
        {children}
      </div>
    </ScrollArea>
  );
}
