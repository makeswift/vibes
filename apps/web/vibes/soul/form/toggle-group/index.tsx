'use client';

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { clsx } from 'clsx';
import * as React from 'react';

import { FieldError } from '@/vibes/soul/form/field-error';
import { Label } from '@/vibes/soul/form/label';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *   --toggle-group-focus: hsl(var(--primary));
 *   --toggle-group-border: hsl(var(--border-contrast-100));
 *   --toggle-group-on-border: hsl(var(--foreground));
 *   --toggle-group-on-background: hsl(var(--foreground));
 *   --toggle-group-off-background: hsl(var(--background));
 *   --toggle-group-on-text: hsl(var(--background));
 *   --toggle-group-disabled-border-hover: transparent;
 *   --toggle-group-off-border-hover: hsl(var(--contrast-200));
 *   --toggle-group-off-background-hover: hsl(var(--contrast-100));
 * ```
 */
export const ToggleGroup = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & {
    label?: string;
    options: Option[];
    errors?: string[];
  }
>(({ label, options, errors, className, ...rest }, ref) => {
  const id = React.useId();

  return (
    <div className={clsx('space-y-2', className)}>
      {label !== undefined && label !== '' && <Label id={id}>{label}</Label>}
      <ToggleGroupPrimitive.Root
        {...rest}
        aria-labelledby={id}
        className="flex flex-wrap gap-2"
        ref={ref}
      >
        {options.map((option) => (
          <ToggleGroupPrimitive.Item
            aria-label={option.label}
            className="h-12 whitespace-nowrap rounded-full border border-[var(--toggle-group-border,hsl(var(--border-contrast-100)))] px-4 font-body text-sm font-normal leading-normal ring-[var(--toggle-group-focus,hsl(var(--primary)))] transition-colors focus-visible:outline-0 focus-visible:ring-2 data-[disabled]:pointer-events-none data-[state=on]:border-[var(--toggle-group-on-border,hsl(var(--foreground)))] data-[state=off]:bg-[var(--toggle-group-off-background,hsl(var(--background)))] data-[state=on]:bg-[var(--toggle-group-on-background,hsl(var(--foreground)))] data-[state=on]:text-[var(--toggle-group-on-text,hsl(var(--background)))] data-[disabled]:opacity-50 data-[disabled]:hover:border-[var(--toggle-group-disabled-border-hover,transparent)] data-[state=off]:hover:border-[var(--toggle-group-off-border-hover,hsl(var(--contrast-200)))] data-[state=off]:hover:bg-[var(--toggle-group-off-background-hover,hsl(var(--contrast-100)))]"
            disabled={option.disabled}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </ToggleGroupPrimitive.Item>
        ))}
      </ToggleGroupPrimitive.Root>
      {errors?.map((error) => <FieldError key={error}>{error}</FieldError>)}
    </div>
  );
});

ToggleGroup.displayName = 'ToggleGroup';
