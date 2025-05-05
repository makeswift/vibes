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
 *    --swatch-radio-group-focus: var(--primary);
 *    --swatch-radio-group-light-icon: var(--foreground);
 *    --swatch-radio-group-light-unchecked-border: transparent;
 *    --swatch-radio-group-light-unchecked-border-hover: var(--contrast-200);
 *    --swatch-radio-group-light-disabled-border: transparent;
 *    --swatch-radio-group-light-border-error: var(--error);
 *    --swatch-radio-group-light-checked-border: var(--foreground);
 *    --swatch-radio-group-light-option-border: color-mix(in oklab, var(--foreground) 10%, transparent);
 *    --swatch-radio-group-dark-icon: var(--background);
 *    --swatch-radio-group-dark-unchecked-border: transparent;
 *    --swatch-radio-group-dark-unchecked-border-hover: var(--contrast-400);
 *    --swatch-radio-group-dark-disabled-border: transparent;
 *    --swatch-radio-group-dark-border-error: var(--error);
 *    --swatch-radio-group-dark-checked-border: var(--background);
 *    --swatch-radio-group-dark-option-border: color-mix(in oklab, var(--background) 10%, transparent);
 *  }
 * ```
 */
export const SwatchRadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    label?: string;
    options: SwatchOption[];
    errors?: string[];
    colorScheme?: 'light' | 'dark';
    onOptionMouseEnter?: (value: string) => void;
  }
>(
  (
    { label, options, errors, className, colorScheme = 'light', onOptionMouseEnter, ...rest },
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
                'group relative box-content h-8 w-8 rounded-full border p-0.5 transition-colors focus-visible:ring-2 focus-visible:ring-(--swatch-radio-group-focus,var(--primary)) focus-visible:outline-hidden data-[disabled]:pointer-events-none [&:disabled>.disabled-icon]:grid',
                {
                  light:
                    'hover:border-(--swatch-radio-group-light-unchecked-border-hover,var(--contrast-200)) data-[state=checked]:border-(--swatch-radio-group-light-checked-border,var(--foreground))',
                  dark: 'hover:border-(--swatch-radio-group-dark-unchecked-border-hover,var(--contrast-400)) data-[state=checked]:border-(--swatch-radio-group-dark-checked-border,var(--background))',
                }[colorScheme],
                {
                  light:
                    errors && errors.length > 0
                      ? 'border-(--swatch-radio-group-light-border-error,var(--error)) disabled:border-(--swatch-radio-group-light-disabled-border,transparent)'
                      : 'border-(--swatch-radio-group-light-unchecked-border,transparent)',
                  dark:
                    errors && errors.length > 0
                      ? 'border-(--swatch-radio-group-dark-border-error,var(--error)) disabled:border-(--swatch-radio-group-dark-disabled-border,transparent)'
                      : 'border-(--swatch-radio-group-dark-unchecked-border,transparent)',
                }[colorScheme],
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
                  className={clsx(
                    'block size-full rounded-full border group-disabled:opacity-20',
                    {
                      light:
                        'border-(--swatch-radio-group-light-option-border,color-mix(in_oklab,var(--foreground)_10%,transparent))',
                      dark: 'border-(--swatch-radio-group-dark-option-border,color-mix(in_oklab,var(--background)_10%,transparent))',
                    }[colorScheme],
                  )}
                  style={{ backgroundColor: option.color }}
                />
              ) : (
                <span
                  className={clsx(
                    'relative block size-full overflow-hidden rounded-full border',
                    {
                      light:
                        'border-(--swatch-radio-group-light-option-border,color-mix(in_oklab,var(--foreground)_10%,transparent))',
                      dark: 'border-(--swatch-radio-group-dark-option-border,color-mix(in_oklab,var(--background)_10%,transparent))',
                    }[colorScheme],
                  )}
                >
                  <Image alt={option.image.alt} height={40} src={option.image.src} width={40} />
                </span>
              )}
              <div
                className={clsx(
                  'disabled-icon absolute inset-0 hidden place-content-center',
                  {
                    light: 'text-(--swatch-radio-group-light-icon,var(--foreground))',
                    dark: 'text-(--swatch-radio-group-dark-icon,var(--background))',
                  }[colorScheme],
                )}
              >
                <X size={16} strokeWidth={1.5} />
              </div>
            </RadioGroupPrimitive.Item>
          ))}
        </RadioGroupPrimitive.Root>
        {errors?.map((error) => <FieldError key={error}>{error}</FieldError>)}
      </div>
    );
  },
);

SwatchRadioGroup.displayName = 'SwatchRadioGroup';
