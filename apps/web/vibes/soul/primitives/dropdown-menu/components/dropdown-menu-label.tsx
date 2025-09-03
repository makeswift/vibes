import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { clsx } from 'clsx';
import type { ComponentProps } from 'react';

export type DropdownMenuLabelProps = ComponentProps<typeof DropdownMenuPrimitive.Label>;

export function DropdownMenuLabel({ className, ...props }: DropdownMenuLabelProps) {
  return (
    <DropdownMenuPrimitive.Label
      className={clsx('sr-only', className)}
      data-slot="dropdown-menu-label"
      {...props}
    />
  );
}
