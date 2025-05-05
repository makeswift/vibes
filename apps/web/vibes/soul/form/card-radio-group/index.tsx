import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { clsx } from 'clsx';
import Image from 'next/image';
import * as React from 'react';

import { FieldError } from '@/vibes/soul/form/field-error';
import { Label } from '@/vibes/soul/form/label';

interface Option {
  value: string;
  label: string;
  image: { src: string; alt: string };
  disabled?: boolean;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *   --card-radio-group-focus: var(--primary);
 *   --card-radio-group-light-unchecked-border: var(--contrast-100);
 *   --card-radio-group-light-unchecked-border-hover: var(--contrast-200);
 *   --card-radio-group-light-unchecked-background: var(--background);
 *   --card-radio-group-light-unchecked-text: var(--foreground);
 *   --card-radio-group-light-unchecked-background-hover: var(--contrast-100);
 *   --card-radio-group-light-checked-background: var(--foreground);
 *   --card-radio-group-light-checked-text: var(--background);
 *   --card-radio-group-light-border-error: var(--error);
 *   --card-radio-group-dark-unchecked-border: var(--contrast-500);
 *   --card-radio-group-dark-unchecked-border-hover: var(--contrast-400);
 *   --card-radio-group-dark-unchecked-background: var(--foreground);
 *   --card-radio-group-dark-unchecked-background-hover: var(--contrast-500);
 *   --card-radio-group-dark-unchecked-text: var(--background);
 *   --card-radio-group-dark-checked-background: var(--background);
 *   --card-radio-group-dark-checked-text: var(--foreground);
 *   --card-radio-group-dark-border-error: var(--error);
 *  }
 * ```
 */
export const CardRadioGroup = React.forwardRef<
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
      <div className={clsx('space-y-2', className)}>
        {label !== undefined && label !== '' && (
          <Label colorScheme={colorScheme} id={id}>
            {label}
          </Label>
        )}
        <RadioGroupPrimitive.Root {...rest} aria-labelledby={id} className="space-y-2" ref={ref}>
          {options.map((option) => (
            <RadioGroupPrimitive.Item
              aria-label={option.label}
              className={clsx(
                'font-body relative flex h-12 w-full items-center overflow-hidden rounded-lg border text-sm leading-normal font-normal transition-colors focus-visible:ring-2 focus-visible:ring-(--card-radio-group-focus,var(--primary)) focus-visible:outline-0 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                {
                  light:
                    'border-(--card-radio-group-light-unchecked-border,var(--contrast-100)) text-(--card-radio-group-light-unchecked-text,var(--foreground)) data-[state=checked]:bg-(--card-radio-group-light-checked-background,var(--foreground)) data-[state=checked]:text-(--card-radio-group-light-checked-text,var(--background)) data-[state=unchecked]:bg-(--card-radio-group-light-unchecked-background,var(--background)) data-[state=unchecked]:hover:border-(--card-radio-group-light-unchecked-border-hover,var(--contrast-200)) data-[state=unchecked]:hover:bg-(--card-radio-group-light-unchecked-background-hover,var(--contrast-100))',
                  dark: 'border-(--card-radio-group-dark-unchecked-border,var(--contrast-500)) text-(--card-radio-group-dark-unchecked-text,var(--background)) data-[state=checked]:bg-(--card-radio-group-dark-checked-background,var(--background)) data-[state=checked]:text-(--card-radio-group-dark-checked-text,var(--foreground)) data-[state=unchecked]:bg-(--card-radio-group-dark-unchecked-background,var(--foreground)) data-[state=unchecked]:hover:border-(--card-radio-group-dark-unchecked-border-hover,var(--contrast-400)) data-[state=unchecked]:hover:bg-(--card-radio-group-dark-unchecked-background-hover,var(--contrast-500))',
                }[colorScheme],
                {
                  light:
                    errors && errors.length > 0
                      ? 'data-[state=unchecked]:border-(--card-radio-group-light-border-error,var(--error))'
                      : 'data-[state=checked]:border-(--card-radio-group-light-checked-background,var(--foreground))',
                  dark:
                    errors && errors.length > 0
                      ? 'data-[state=unchecked]:border-(--card-radio-group-dark-border-error,var(--error))'
                      : 'data-[state=checked]:border-(--card-radio-group-dark-checked-background,var(--foreground))',
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
              <div className="relative aspect-square h-full">
                <Image
                  alt={option.image.alt}
                  className="bg-background object-fill"
                  fill
                  src={option.image.src}
                />
              </div>

              <span className="flex-1 truncate px-4 text-left text-ellipsis">{option.label}</span>
            </RadioGroupPrimitive.Item>
          ))}
        </RadioGroupPrimitive.Root>
        {errors?.map((error) => <FieldError key={error}>{error}</FieldError>)}
      </div>
    );
  },
);

CardRadioGroup.displayName = 'CardRadioGroup';
