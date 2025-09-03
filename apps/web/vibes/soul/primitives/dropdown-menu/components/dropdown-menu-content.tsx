import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { clsx } from 'clsx';
import type { ComponentProps } from 'react';

import { DropdownMenuScrollArea } from '@/vibes/soul/primitives/dropdown-menu/components/dropdown-menu-scroll-area';

export type DropdownMenuContentProps = ComponentProps<typeof DropdownMenuPrimitive.Content>;

export function DropdownMenuContent({
  sideOffset = 6,
  align = 'end',
  className,
  children,
  ...props
}: DropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Content
      align={align}
      className={clsx(
        'z-50 min-w-32 rounded-2xl border border-(--dropdown-menu-border,var(--contrast-100)) bg-(--dropdown-menu-background,var(--background)) shadow-xl',
        // Open styles
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        // Closed styles
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        className,
      )}
      data-slot="dropdown-menu-content"
      sideOffset={sideOffset}
      {...props}
    >
      <DropdownMenuScrollArea>{children}</DropdownMenuScrollArea>
    </DropdownMenuPrimitive.Content>
  );
}
