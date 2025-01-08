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
 *   --card-radio-group-focus: hsl(var(--primary));
 *   --card-radio-group-unchecked-border: hsl(var(--contrast-100));
 *   --card-radio-group-unchecked-border-hover: hsl(var(--contrast-200));
 *   --card-radio-group-unchecked-background: hsl(var(--background));
 *   --card-radio-group-unchecked-background-hover: hsl(var(--contrast-100));
 *   --card-radio-group-checked-background: hsl(var(--foreground));
 *   --card-radio-group-checked-foreground: hsl(var(--background));
 *   --card-radio-group-disabled-border-hover: transparent;
 *   --card-radio-group-border-error: hsl(var(--error));
 *   --card-radio-group-disabled-border-error: hsl(var(--error) / 5%);
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
  }
>(({ label, options, errors, className, onOptionMouseEnter, ...rest }, ref) => {
  const id = React.useId();

  return (
    <div className={clsx('space-y-2', className)}>
      {label !== undefined && label !== '' && <Label id={id}>{label}</Label>}
      <RadioGroupPrimitive.Root {...rest} aria-labelledby={id} className="space-y-2" ref={ref}>
        {options.map((option) => (
          <RadioGroupPrimitive.Item
            aria-label={option.label}
            className={clsx(
              'relative flex h-12 w-full items-center overflow-hidden rounded-lg border border-[var(--card-radio-group-unchecked-border,hsl(var(--contrast-100)))] font-body text-sm font-normal leading-normal transition-colors focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-[var(--card-radio-group-focus,hsl(var(--primary)))] data-[disabled]:pointer-events-none data-[state=checked]:bg-[var(--card-radio-group-checked-background,hsl(var(--foreground)))] data-[state=unchecked]:bg-[var(--card-radio-group-unchecked-background,hsl(var(--background)))] data-[state=checked]:text-[var(--card-radio-group-checked-foreground,hsl(var(--background)))] data-[disabled]:opacity-50 data-[disabled]:hover:border-[var(--card-radio-group-disabled-border-hover,transparent)] data-[state=unchecked]:hover:border-[var(--card-radio-group-unchecked-border-hover,hsl(var(--contrast-200)))] data-[state=unchecked]:hover:bg-[var(--card-radio-group-unchecked-background-hover,hsl(var(--contrast-100)))]',
              errors && errors.length > 0
                ? 'disabled:border-[var(--card-radio-group-disabled-border-error,hsl(var(--error)/5%)))] data-[state=unchecked]:border-[var(--card-radio-group-border-error,hsl(var(--error)))]'
                : 'data-[state=checked]:border-[var(--card-radio-group-checked-background,hsl(var(--foreground)))]',
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

            <span className="flex-1 truncate text-ellipsis px-4 text-left">{option.label}</span>
          </RadioGroupPrimitive.Item>
        ))}
      </RadioGroupPrimitive.Root>
      {errors?.map((error) => <FieldError key={error}>{error}</FieldError>)}
    </div>
  );
});

CardRadioGroup.displayName = 'CardRadioGroup';
