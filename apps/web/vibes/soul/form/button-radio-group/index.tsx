import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
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
 *   --button-radio-group-focus: var(--primary);
 *   --button-radio-group-light-unchecked-border: var(--contrast-100);
 *   --button-radio-group-light-unchecked-background: var(--background);
 *   --button-radio-group-light-unchecked-text: var(--foreground);
 *   --button-radio-group-light-unchecked-border-hover: var(--contrast-200);
 *   --button-radio-group-light-unchecked-background-hover: var(--contrast-100);
 *   --button-radio-group-light-checked-background: var(--foreground);
 *   --button-radio-group-light-checked-text: var(--background);
 *   --button-radio-group-light-border-error: var(--error);
 *   --button-radio-group-dark-unchecked-border: var(--contrast-500);
 *   --button-radio-group-dark-unchecked-background: var(--background);
 *   --button-radio-group-dark-unchecked-text: var(--background);
 *   --button-radio-group-dark-unchecked-border-hover: var(--contrast-400);
 *   --button-radio-group-dark-unchecked-background-hover: var(--contrast-500);
 *   --button-radio-group-dark-checked-background: var(--background);
 *   --button-radio-group-dark-checked-text: var(--foreground);
 *   --button-radio-group-dark-border-error: var(--error);
 *  }
 * ```
 */
export const ButtonRadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    label?: string;
    options: Option[];
    errors?: string[];
    onOptionMouseEnter?: (value: string) => void;
    colorScheme?: 'light' | 'dark';
  }
>(
  (
    { label, options, errors, className, onOptionMouseEnter, colorScheme = 'light', ...rest },
    ref,
  ) => {
    const id = React.useId();

    return (
      <div className={clsx('button-radio-group space-y-2', className)}>
        {label !== undefined && label !== '' && (
          <Label colorScheme={colorScheme} id={id}>
            {label}
          </Label>
        )}
        <RadioGroupPrimitive.Root
          {...rest}
          aria-labelledby={id}
          className="flex flex-wrap gap-2"
          ref={ref}
        >
          {options.map((option) => (
            <RadioGroupPrimitive.Item
              aria-label={option.label}
              className={clsx(
                'font-body h-12 rounded-full border px-4 text-sm leading-normal font-normal whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:outline-0 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                {
                  light:
                    'border-(--button-radio-group-light-unchecked-border,var(--contrast-100)) focus-visible:ring-(--button-radio-group-light-focus,var(--primary)) data-[state=checked]:bg-(--button-radio-group-light-checked-background,var(--foreground)) data-[state=checked]:text-(--button-radio-group-light-checked-text,var(--background)) data-[state=unchecked]:bg-(--button-radio-group-light-unchecked-background,var(--background)) data-[state=unchecked]:text-(--button-radio-group-light-unchecked-text,var(--foreground)) data-[state=unchecked]:hover:border-(--button-radio-group-light-unchecked-border-hover,var(--contrast-200)) data-[state=unchecked]:hover:bg-(--button-radio-group-light-unchecked-background-hover,var(--contrast-100))',
                  dark: 'border-(--button-radio-group-dark-unchecked-border,var(--contrast-500)) focus-visible:ring-(--button-radio-group-dark-focus,var(--primary)) data-[state=checked]:bg-(--button-radio-group-dark-checked-background,var(--background)) data-[state=checked]:text-(--button-radio-group-dark-checked-text,var(--foreground)) data-[state=unchecked]:bg-(--button-radio-group-dark-unchecked-background,var(--foreground)) data-[state=unchecked]:text-(--button-radio-group-dark-checked-text,var(--background)) data-[state=unchecked]:hover:border-(--button-radio-group-dark-unchecked-border-hover,var(--contrast-400)) data-[state=unchecked]:hover:bg-(--button-radio-group-dark-unchecked-background-hover,var(--contrast-500))',
                }[colorScheme],
                {
                  light:
                    errors && errors.length > 0
                      ? 'data-[state=unchecked]:border-(--button-radio-group-light-border-error,var(--error))'
                      : 'data-[state=checked]:border-(--button-radio-group-light-checked-background,var(--foreground))',
                  dark:
                    errors && errors.length > 0
                      ? 'data-[state=unchecked]:border-(--button-radio-group-dark-border-error,var(--error))'
                      : 'data-[state=checked]:border-(--button-radio-group-dark-checked-background,var(--foreground))',
                }[colorScheme],
              )}
              disabled={option.disabled}
              id={option.value}
              key={option.value}
              onMouseEnter={() => {
                onOptionMouseEnter?.(option.value);
              }}
              value={option.value}
            >
              {option.label}
            </RadioGroupPrimitive.Item>
          ))}
        </RadioGroupPrimitive.Root>
        {errors?.map((error) => <FieldError key={error}>{error}</FieldError>)}
      </div>
    );
  },
);

ButtonRadioGroup.displayName = 'ButtonRadioGroup';
