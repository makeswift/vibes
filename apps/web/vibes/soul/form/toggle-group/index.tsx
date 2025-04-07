'use client';

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, useId } from 'react';

import { FieldError } from '@/vibes/soul/form/field-error';
import { Label } from '@/vibes/soul/form/label';

export type ToggleGroupProps = ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & {
  label?: string;
  options: Option[];
  errors?: string[] | null;
  colorScheme?: 'light' | 'dark';
  hideLabel?: boolean;
};

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
 *   --toggle-group-light-focus: hsl(var(--primary));
 *   --toggle-group-light-border: hsl(var(--contrast-100));
 *   --toggle-group-light-on-border: hsl(var(--foreground));
 *   --toggle-group-light-on-background: hsl(var(--foreground));
 *   --toggle-group-light-off-background: hsl(var(--background));
 *   --toggle-group-light-off-text: hsl(var(--foreground));
 *   --toggle-group-light-on-text: hsl(var(--background));
 *   --toggle-group-light-off-border-hover: hsl(var(--contrast-200));
 *   --toggle-group-light-off-background-hover: hsl(var(--contrast-100));
 *   --toggle-group-dark-focus: hsl(var(--primary));
 *   --toggle-group-dark-border: hsl(var(--contrast-500));
 *   --toggle-group-dark-on-border: hsl(var(--background));
 *   --toggle-group-dark-on-background: hsl(var(--background));
 *   --toggle-group-dark-off-background: hsl(var(--foreground));
 *   --toggle-group-dark-off-text: hsl(var(--background));
 *   --toggle-group-dark-on-text: hsl(var(--foreground));
 *   --toggle-group-dark-off-border-hover: hsl(var(--contrast-400));
 *   --toggle-group-dark-off-background-hover: hsl(var(--contrast-500));
 * }
 * ```
 */
export const ToggleGroup = ({
  label,
  options,
  errors = null,
  className = '',
  colorScheme = 'light',
  hideLabel = true,
  ...rest
}: ToggleGroupProps) => {
  const id = useId();

  return (
    <div className={clsx('w-full', className)}>
      {label !== undefined && label !== '' && (
        <Label className={clsx(hideLabel ? 'sr-only' : 'mb-2')} colorScheme={colorScheme} id={id}>
          {label}
        </Label>
      )}

      <ToggleGroupPrimitive.Root {...rest} aria-labelledby={id} className="flex flex-wrap gap-2">
        {options.map((option) => (
          <ToggleGroupPrimitive.Item
            aria-label={option.label}
            className={clsx(
              'h-12 whitespace-nowrap rounded-full border px-4 font-body text-sm font-normal leading-normal transition-colors focus-visible:outline-0 focus-visible:ring-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
              {
                light:
                  'border-[var(--toggle-group-light-border,hsl(var(--contrast-100)))] ring-[var(--toggle-group-light-focus,hsl(var(--primary)))] data-[state=on]:border-[var(--toggle-group-light-on-border,hsl(var(--foreground)))] data-[state=off]:bg-[var(--toggle-group-light-off-background,hsl(var(--background)))] data-[state=on]:bg-[var(--toggle-group-light-on-background,hsl(var(--foreground)))] data-[state=off]:text-[var(--toggle-group-light-off-text,hsl(var(--foreground)))] data-[state=on]:text-[var(--toggle-group-light-on-text,hsl(var(--background)))] data-[state=off]:hover:border-[var(--toggle-group-light-off-border-hover,hsl(var(--contrast-200)))] data-[state=off]:hover:bg-[var(--toggle-group-light-off-background-hover,hsl(var(--contrast-100)))]',
                dark: 'border-[var(--toggle-group-dark-border,hsl(var(--contrast-500)))] ring-[var(--toggle-group-dark-focus,hsl(var(--primary)))] data-[state=on]:border-[var(--toggle-group-dark-on-border,hsl(var(--background)))] data-[state=off]:bg-[var(--toggle-group-dark-off-background,hsl(var(--foreground)))] data-[state=on]:bg-[var(--toggle-group-dark-on-background,hsl(var(--background)))] data-[state=off]:text-[var(--toggle-group-dark-off-text,hsl(var(--background)))] data-[state=on]:text-[var(--toggle-group-dark-on-text,hsl(var(--foreground)))] data-[state=off]:hover:border-[var(--toggle-group-dark-off-border-hover,hsl(var(--contrast-400)))] data-[state=off]:hover:bg-[var(--toggle-group-dark-off-background-hover,hsl(var(--contrast-500)))]',
              }[colorScheme],
            )}
            disabled={option.disabled}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </ToggleGroupPrimitive.Item>
        ))}
      </ToggleGroupPrimitive.Root>
      {errors?.map((error) => (
        <FieldError className="mt-2" key={error}>
          {error}
        </FieldError>
      ))}
    </div>
  );
};
