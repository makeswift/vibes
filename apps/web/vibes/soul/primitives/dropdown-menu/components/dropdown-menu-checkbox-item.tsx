import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { clsx } from 'clsx';
import { Check } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';

export interface DropdownMenuCheckboxItemProps
  extends ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> {
  variant?: 'default' | 'danger';
  icon?: ReactNode;
}

export function DropdownMenuCheckboxItem({
  className,
  variant = 'default',
  children,
  checked,
  icon,
  ...props
}: DropdownMenuCheckboxItemProps) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      checked={checked}
      className={clsx(
        'flex h-9 w-full cursor-pointer items-center rounded-lg bg-(--dropdown-menu-item-background,transparent) pr-1.5 pl-3 transition-colors outline-none select-none',
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
      data-slot="dropdown-menu-checkbox-item"
      data-variant={variant}
      {...props}
    >
      <div className="flex flex-1 items-center justify-between gap-2">
        {icon !== undefined && icon}
        {children}
        <span className="flex size-6 items-center justify-center">
          <DropdownMenuPrimitive.ItemIndicator>
            <Check absoluteStrokeWidth size={16} strokeWidth={1.5} />
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
      </div>
    </DropdownMenuPrimitive.CheckboxItem>
  );
}
