import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { clsx } from 'clsx';
import type { ComponentProps } from 'react';

export type DropdownMenuGroupProps = ComponentProps<typeof DropdownMenuPrimitive.Group>;

export function DropdownMenuGroup({ className, ...props }: DropdownMenuGroupProps) {
  return (
    <DropdownMenuPrimitive.Group
      className={clsx('flex flex-col gap-0.5', className)}
      data-slot="dropdown-menu-group"
      {...props}
    />
  );
}
