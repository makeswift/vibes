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
 *   --toggle-group-light-focus: var(--primary);
 *   --toggle-group-light-border: var(--contrast-100);
 *   --toggle-group-light-on-border: var(--foreground);
 *   --toggle-group-light-on-background: var(--foreground);
 *   --toggle-group-light-off-background: var(--background);
 *   --toggle-group-light-off-text: var(--foreground);
 *   --toggle-group-light-on-text: var(--background);
 *   --toggle-group-light-off-border-hover: var(--contrast-200);
 *   --toggle-group-light-off-background-hover: var(--contrast-100);
 *   --toggle-group-dark-focus: var(--primary);
 *   --toggle-group-dark-border: var(--contrast-500);
 *   --toggle-group-dark-on-border: var(--background);
 *   --toggle-group-dark-on-background: var(--background);
 *   --toggle-group-dark-off-background: var(--foreground);
 *   --toggle-group-dark-off-text: var(--background);
 *   --toggle-group-dark-on-text: var(--foreground);
 *   --toggle-group-dark-off-border-hover: var(--contrast-400);
 *   --toggle-group-dark-off-background-hover: var(--contrast-500);
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
              'font-body h-12 rounded-full border px-4 text-sm leading-normal font-normal whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:outline-0 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
              {
                light:
                  'border-(--toggle-group-light-border,var(--contrast-100)) ring-(--toggle-group-light-focus,var(--primary)) data-[state=off]:bg-(--toggle-group-light-off-background,var(--background)) data-[state=off]:text-(--toggle-group-light-off-text,var(--foreground)) data-[state=off]:hover:border-(--toggle-group-light-off-border-hover,var(--contrast-200)) data-[state=off]:hover:bg-(--toggle-group-light-off-background-hover,var(--contrast-100)) data-[state=on]:border-(--toggle-group-light-on-border,var(--foreground)) data-[state=on]:bg-(--toggle-group-light-on-background,var(--foreground)) data-[state=on]:text-(--toggle-group-light-on-text,var(--background))',
                dark: 'border-(--toggle-group-dark-border,var(--contrast-500)) ring-(--toggle-group-dark-focus,var(--primary)) data-[state=off]:bg-(--toggle-group-dark-off-background,var(--foreground)) data-[state=off]:text-(--toggle-group-dark-off-text,var(--background)) data-[state=off]:hover:border-(--toggle-group-dark-off-border-hover,var(--contrast-400)) data-[state=off]:hover:bg-(--toggle-group-dark-off-background-hover,var(--contrast-500)) data-[state=on]:border-(--toggle-group-dark-on-border,var(--background)) data-[state=on]:bg-(--toggle-group-dark-on-background,var(--background)) data-[state=on]:text-(--toggle-group-dark-on-text,var(--foreground))',
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
