import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { clsx } from 'clsx';
import { ChevronRight } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';

export interface DropdownMenuSubTriggerProps
  extends ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> {
  variant?: 'default' | 'danger';
  icon?: ReactNode;
}

export function DropdownMenuSubTrigger({
  children,
  variant = 'default',
  icon,
  className,
  ...props
}: DropdownMenuSubTriggerProps) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      className={clsx(
        'flex h-9 cursor-pointer items-center rounded-lg bg-(--dropdown-menu-item-background,transparent) pr-1 pl-3 transition-colors outline-none select-none',
        // Font styles
        'font-[family-name:var(--dropdown-menu-item-font-family,var(--font-family-body))] text-sm font-medium',
        // Disabled styles
        'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
        // Default variant styles
        'data-[variant=default]:text-(--dropdown-menu-item-text,var(--contrast-500)) data-[variant=default]:[&:not([data-disabled])]:focus:bg-(--dropdown-menu-item-background-hover,var(--contrast-100)) data-[variant=default]:[&:not([data-disabled])]:focus:text-(--dropdown-menu-item-text-hover,var(--foreground))',
        // Danger variant styles
        'data-[variant=danger]:text-(--dropdown-menu-item-danger-text,var(--error)) data-[variant=danger]:[&:not([data-disabled])]:focus:bg-(--dropdown-menu-item-danger-background-hover,color-mix(in_oklab,_var(--error),_white_75%)) data-[variant=danger]:[&:not([data-disabled])]:focus:text-(--dropdown-menu-item-danger-text-hover,color-mix(in_oklab,_var(--error),_black_75%))',
        className,
      )}
      data-slot="dropdown-menu-sub-trigger"
      data-variant={variant}
      {...props}
    >
      <div className="flex flex-1 items-center justify-between gap-2">
        {icon !== undefined && icon}
        {children}
        <span className="flex size-6 items-center justify-center">
          <ChevronRight absoluteStrokeWidth size={16} strokeWidth={1.5} />
        </span>
      </div>
    </DropdownMenuPrimitive.SubTrigger>
  );
}
