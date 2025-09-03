import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { clsx } from 'clsx';
import type { ComponentProps } from 'react';

export type DropdownMenuSeparatorProps = ComponentProps<typeof DropdownMenuPrimitive.Separator>;

export function DropdownMenuSeparator({ className, ...props }: DropdownMenuSeparatorProps) {
  return (
    <DropdownMenuPrimitive.Separator
      className={clsx(
        'relative my-1.5 after:absolute after:-right-5 after:-left-2 after:h-px after:bg-(--dropdown-menu-seperator,var(--contrast-100))',
        className,
      )}
      data-slot="dropdown-menu-separator"
      {...props}
    />
  );
}
