import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { clsx } from 'clsx';
import { X } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

import { FieldError } from '@/vibes/soul/form/field-error';
import { Label } from '@/vibes/soul/form/label';

type SwatchOption =
  | {
      type: 'color';
      value: string;
      label: string;
      color: string;
      disabled?: boolean;
    }
  | {
      type: 'image';
      value: string;
      label: string;
      image: { src: string; alt: string };
      disabled?: boolean;
    };

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *    --swatch-radio-group-icon: hsl(var(--foreground));
 *    --swatch-radio-group-focus: hsl(var(--primary));
 *    --swatch-radio-group-unchecked-border: transparent;
 *    --swatch-radio-group-unchecked-border-hover: hsl(var(--border-contrast-200));
 *    --swatch-radio-group-disabled-border: transparent;
 *    --swatch-radio-group-disabled-border-hover: transparent;
 *    --swatch-radio-group-border-error: hsl(var(--error));
 *    --swatch-radio-group-checked-border: hsl(var(--foreground));
 *    --swatch-radio-group-option-border: hsl(var(--foreground) / 10%);
 *  }
 * ```
 */
export const SwatchRadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    label?: string;
    options: SwatchOption[];
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
        className="flex flex-wrap gap-1"
        ref={ref}
      >
        {options.map((option) => (
          <RadioGroupPrimitive.Item
            aria-label={option.label}
            className={clsx(
              'group relative box-content h-8 w-8 rounded-full border p-0.5 transition-colors hover:border-[var(--swatch-radio-group-unchecked-border-hover,hsl(var(--border-contrast-200)))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--swatch-radio-group-focus,hsl(var(--primary)))] disabled:hover:border-[var(--swatch-radio-group-disabled-border-hover,transparent)] data-[disabled]:pointer-events-none data-[state=checked]:border-[var(--swatch-radio-group-checked-border,hsl(var(--foreground)))] [&:disabled>.disabled-icon]:grid',
              errors && errors.length > 0
                ? 'border-[var(--swatch-radio-group-border-error,hsl(var(--error)))] disabled:border-[var(--swatch-radio-group-disabled-border,transparent)]'
                : 'border-[var(--swatch-radio-group-unchecked-border,transparent)]',
            )}
            disabled={option.disabled}
            key={option.value}
            onMouseEnter={() => {
              onOptionMouseEnter?.(option.value);
            }}
            value={option.value}
          >
            {option.type === 'color' ? (
              <span
                className="block size-full rounded-full border border-[var(--swatch-radio-group-option-border,hsl(var(--foreground)/10%))] group-disabled:opacity-20"
                style={{ backgroundColor: option.color }}
              />
            ) : (
              <span className="relative block size-full overflow-hidden rounded-full border border-[var(--swatch-radio-group-option-border,hsl(var(--foreground)/10%))]">
                <Image alt={option.image.alt} height={40} src={option.image.src} width={40} />
              </span>
            )}
            <div className="disabled-icon absolute inset-0 hidden place-content-center text-[var(--swatch-radio-group-icon,hsl(var(--foreground)))]">
              <X size={16} strokeWidth={1.5} />
            </div>
          </RadioGroupPrimitive.Item>
        ))}
      </RadioGroupPrimitive.Root>
      {errors?.map((error) => <FieldError key={error}>{error}</FieldError>)}
    </div>
  );
});

SwatchRadioGroup.displayName = 'SwatchRadioGroup';
