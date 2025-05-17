import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { clsx } from 'clsx';
import * as React from 'react';

import { FieldError } from '@/vibes/soul/form/field-error';
import { Label } from '@/vibes/soul/form/label';

interface Option {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    label?: string;
    options: Option[];
    errors?: string[];
    colorScheme?: 'light' | 'dark';
    onOptionMouseEnter?: (value: string) => void;
  }
>(
  (
    { label, options, errors, className, onOptionMouseEnter, colorScheme = 'light', ...rest },
    ref,
  ) => {
    const id = React.useId();

    return (
      <div className={clsx('space-y-2', className)}>
        {label !== undefined && label !== '' && <Label id={id}>{label}</Label>}
        <RadioGroupPrimitive.Root {...rest} aria-labelledby={id} className="space-y-2" ref={ref}>
          {options.map((option, index) => (
            <RadioGroupItem
              colorScheme={colorScheme}
              error={errors != null && errors.length > 0}
              key={index}
              onOptionMouseEnter={onOptionMouseEnter}
              option={option}
            />
          ))}
        </RadioGroupPrimitive.Root>
        {errors?.map((error) => <FieldError key={error}>{error}</FieldError>)}
      </div>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *   --radio-group-light-background: var(--background);
 *   --radio-group-light-border: var(--contrast-200);
 *   --radio-group-light-border-error: var(--error);
 *   --radio-group-light-disabled-border-error: color-mix(in oklab, var(--error) 50%, transparent);
 *   --radio-group-light-border-hover: var(--contrast-300);
 *   --radio-group-light-border-focus: var(--contrast-300);
 *   --radio-group-light-indicator-background: var(--foreground);
 *   --radio-group-light-label: var(--foreground);
 *   --radio-group-dark-background: var(--foreground);
 *   --radio-group-dark-border: var(--contrast-400);
 *   --radio-group-dark-border-error: var(--error);
 *   --radio-group-dark-disabled-border-error: color-mix(in oklab, var(--error) 50%, transparent);
 *   --radio-group-dark-border-hover: var(--contrast-300);
 *   --radio-group-dark-border-focus: var(--contrast-300);
 *   --radio-group-dark-indicator-background: var(--background);
 *   --radio-group-dark-label: var(--background);
 *  }
 * ```
 */
function RadioGroupItem({
  option,
  error = false,
  colorScheme = 'light',
  onOptionMouseEnter,
}: {
  option: Option;
  error?: boolean;
  colorScheme?: 'light' | 'dark';
  onOptionMouseEnter?: (value: string) => void;
}) {
  const id = React.useId();

  return (
    <div className="flex items-center" key={option.value}>
      <RadioGroupPrimitive.Item
        aria-labelledby={
          option.description !== undefined ? `${id}-label ${id}-description` : `${id}-label`
        }
        className={clsx(
          'size-5 cursor-default rounded-full border outline-hidden data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&:disabled+label]:pointer-events-none [&:disabled+label]:opacity-50',
          {
            light: 'bg-(--radio-group-light-background,var(--background))',
            dark: 'bg-(--radio-group-dark-background,var(--foreground))',
          }[colorScheme],
          {
            light: error
              ? 'border-(--radio-group-light-border-error,var(--error)) disabled:border-(--radio-group-light-disabled-border-error,color-mix(in_oklab,var(--error)_50%,transparent))'
              : 'border-(--radio-group-light-border,var(--contrast-200)) hover:border-(--radio-group-light-border-hover,var(--contrast-300)) focus:border-(--radio-group-light-border-focus,var(--contrast-300))',
            dark: error
              ? 'border-(--radio-group-dark-border-error,var(--error)) disabled:border-(--radio-group-dark-disabled-border-error,color-mix(in_oklab,var(--error)_50%,transparent))'
              : 'border-(--radio-group-dark-border,var(--contrast-400)) hover:border-(--radio-group-dark-border-hover,var(--contrast-300)) focus:border-(--radio-group-light-border-focus,var(--contrast-300))',
          }[colorScheme],
        )}
        disabled={option.disabled}
        id={id}
        onMouseEnter={() => {
          onOptionMouseEnter?.(option.value);
        }}
        value={option.value}
      >
        <RadioGroupPrimitive.Indicator
          className={clsx(
            'relative flex size-full items-center justify-center after:block after:size-3 after:rounded-full',
            {
              light: 'after:bg-(--radio-group-light-indicator-background,var(--foreground))',
              dark: 'after:bg-(--radio-group-dark-indicator-background,var(--background))',
            }[colorScheme],
          )}
        />
      </RadioGroupPrimitive.Item>
      <label
        className={clsx(
          'flex flex-grow justify-between pl-3 text-sm leading-none',
          {
            light: 'text-(--radio-group-light-label,var(--foreground))',
            dark: 'text-(--radio-group-dark-label,var(--background))',
          }[colorScheme],
        )}
        htmlFor={id}
      >
        <span id={`${id}-label`}>{option.label}</span>
        {option.description !== undefined && (
          <span id={`${id}-description`}>{option.description}</span>
        )}
      </label>
    </div>
  );
}
