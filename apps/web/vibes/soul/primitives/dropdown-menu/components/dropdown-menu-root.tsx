import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import type { ComponentProps } from 'react';

export type DropdownMenuRootProps = ComponentProps<typeof DropdownMenuPrimitive.Root>;

export function DropdownMenuRoot({ ...props }: DropdownMenuRootProps) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu-root" {...props} />;
}
