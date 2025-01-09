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
 *   --button-radio-group-focus: hsl(var(--primary));
 *   --button-radio-group-unchecked-border: hsl(var(--contrast-100));
 *   --button-radio-group-unchecked-background: hsl(var(--background));
 *   --button-radio-group-unchecked-border-hover: hsl(var(--contrast-200));
 *   --button-radio-group-unchecked-background-hover: hsl(var(--contrast-100));
 *   --button-radio-group-checked-background: hsl(var(--foreground));
 *   --button-radio-group-checked-text: hsl(var(--background));
 *   --button-radio-group-disabled-border-hover: transparent;
 *   --button-radio-group-border-error: hsl(var(--error));
 *   --button-radio-group-disabled-border-error: hsl(var(--error) / 5%);
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
  }
>(({ label, options, errors, className, onOptionMouseEnter, ...rest }, ref) => {
  const id = React.useId();

  return (
    <div className={clsx('space-y-2', className)}>
      {label !== undefined && label !== '' && <Label id={id}>{label}</Label>}
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
              'h-12 whitespace-nowrap rounded-full border border-[var(--button-radio-group-unchecked-border,hsl(var(--contrast-100)))] px-4 font-body text-sm font-normal leading-normal transition-colors focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-[var(--button-radio-group-focus,hsl(var(--primary)))] data-[disabled]:pointer-events-none data-[state=checked]:bg-[var(--button-radio-group-checked-background,hsl(var(--foreground)))] data-[state=unchecked]:bg-[var(--button-radio-group-unchecked-background,hsl(var(--background)))] data-[state=checked]:text-[var(--button-radio-group-checked-text,hsl(var(--background)))] data-[disabled]:opacity-50 data-[disabled]:hover:border-[var(--button-radio-group-disabled-border-hover,transparent)] data-[state=unchecked]:hover:border-[var(--button-radio-group-unchecked-border-hover,hsl(var(--contrast-200)))] data-[state=unchecked]:hover:bg-[var(--button-radio-group-unchecked-background-hover,hsl(var(--contrast-100)))]',
              errors && errors.length > 0
                ? 'disabled:border-[var(--button-radio-group-disabled-border-error,hsl(var(--error)/5%)))] data-[state=unchecked]:border-[var(--button-radio-group-border-error,hsl(var(--error)))]'
                : 'data-[state=checked]:border-[var(--button-radio-group-checked-background,hsl(var(--foreground)))]',
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
});

ButtonRadioGroup.displayName = 'ButtonRadioGroup';
