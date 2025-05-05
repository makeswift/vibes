'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as LabelPrimitive from '@radix-ui/react-label';
import { clsx } from 'clsx';
import { Check } from 'lucide-react';
import { ComponentPropsWithoutRef, ReactNode, useId } from 'react';

import { FieldError } from '@/vibes/soul/form/field-error';

export interface CheckboxProps extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: ReactNode;
  errors?: string[];
  colorScheme?: 'light' | 'dark';
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *    --checkbox-focus: var(--primary);
 *    --checkbox-light-label: var(--foreground);
 *    --checkbox-light-error: var(--error);
 *    --checkbox-light-unchecked-border: var(--contrast-200);
 *    --checkbox-light-unchecked-border-hover: var(--contrast-300);
 *    --checkbox-light-unchecked-background: var(--background);
 *    --checkbox-light-unchecked-icon: var(--foreground);
 *    --checkbox-light-checked-border: var(--foreground);
 *    --checkbox-light-checked-border-hover: var(--foreground);
 *    --checkbox-light-checked-background: var(--foreground);
 *    --checkbox-light-checked-icon: var(--background);
 *    --checkbox-dark-label: var(--background);
 *    --checkbox-dark-error: var(--error);
 *    --checkbox-dark-unchecked-border: var(--contrast-400);
 *    --checkbox-dark-unchecked-border-hover: var(--contrast-300);
 *    --checkbox-dark-unchecked-background: var(--foreground);
 *    --checkbox-dark-unchecked-icon: var(--background);
 *    --checkbox-dark-checked-border: var(--background);
 *    --checkbox-dark-checked-border-hover: var(--background);
 *    --checkbox-dark-checked-background: var(--foreground);
 *    --checkbox-dark-checked-icon: var(--foreground);
 *    --checkbox-font-family: var(--font-family-body);
 *  }
 * ```
 */
export function Checkbox({
  id,
  label,
  errors,
  className,
  colorScheme = 'light',
  ...props
}: CheckboxProps) {
  const generatedId = useId();

  return (
    <div className="space-y-2">
      <div
        className={clsx(
          'flex items-center gap-2 font-(family-name:--checkbox-font-family,var(--font-family-body))',
          className,
        )}
      >
        <CheckboxPrimitive.Root
          {...props}
          aria-labelledby={id !== undefined ? `${id}-label` : `${generatedId}-label`}
          className={clsx(
            'flex h-5 w-5 items-center justify-center rounded-md border transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-(--checkbox-focus,var(--primary)) focus-visible:outline-0',
            {
              light:
                errors && errors.length > 0
                  ? 'border-(--checkbox-light-error,var(--error))'
                  : 'data-[state=checked]:border-(--checkbox-light-checked-border,var(--foreground)) data-[state=checked]:bg-(--checkbox-light-checked-background,var(--foreground)) data-[state=checked]:text-(--checkbox-light-checked-text,var(--background)) data-[state=checked]:hover:border-(--checkbox-light-checked-border-hover,var(--foreground)) data-[state=unchecked]:border-(--checkbox-light-unchecked-border,var(--contrast-200)) data-[state=unchecked]:bg-(--checkbox-light-unchecked-background,var(--background)) data-[state=unchecked]:text-(--checkbox-light-unchecked-text,var(--foreground)) data-[state=unchecked]:hover:border-(--checkbox-light-unchecked-border-hover,var(--contrast-300))',
              dark:
                errors && errors.length > 0
                  ? 'border-(--checkbox-dark-error,var(--error))'
                  : 'data-[state=checked]:border-(--checkbox-dark-checked-border,var(--background)) data-[state=checked]:bg-(--checkbox-dark-checked-background,var(--foreground)) data-[state=checked]:text-(--checkbox-dark-checked-text,var(--background)) data-[state=checked]:hover:border-(--checkbox-dark-checked-border-hover,var(--background)) data-[state=unchecked]:border-(--checkbox-dark-unchecked-border,var(--contrast-400)) data-[state=unchecked]:bg-(--checkbox-dark-unchecked-background,var(--foreground)) data-[state=unchecked]:text-(--checkbox-dark-unchecked-text,var(--background)) data-[state=unchecked]:hover:border-(--checkbox-dark-unchecked-border-hover,var(--contrast-300))',
            }[colorScheme],
          )}
          id={id ?? generatedId}
        >
          <CheckboxPrimitive.Indicator>
            <Check className="h-4 w-4" color="currentColor" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        {label != null && label !== '' && (
          <LabelPrimitive.Root
            className={clsx(
              'cursor-pointer text-sm',
              {
                light: 'text-(--checkbox-light-label,var(--foreground))',
                dark: 'text-(--checkbox-dark-label,var(--background))',
              }[colorScheme],
            )}
            htmlFor={id ?? generatedId}
            id={id !== undefined ? `${id}-label` : `${generatedId}-label`}
          >
            {label}
          </LabelPrimitive.Root>
        )}
      </div>
      {errors?.map((error) => <FieldError key={error}>{error}</FieldError>)}
    </div>
  );
}
