'use client';

import { clsx } from 'clsx';
import { Minus, Plus } from 'lucide-react';
import * as React from 'react';

import { FieldError } from '@/vibes/soul/form/field-error';
import { Label } from '@/vibes/soul/form/label';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *   --number-input-focus: hsl(var(--primary));
 *   --number-input-text: hsl(var(--foreground));
 *   --number-input-icon: hsl(var(--contrast-300));
 *   --number-input-icon-hover: hsl(var(--foreground));
 *   --number-input-background-hover: hsl(var(--contrast-100) / 50%);
 *  }
 * ```
 */
export const NumberInput = React.forwardRef<
  React.ComponentRef<'input'>,
  Omit<React.ComponentPropsWithoutRef<'input'>, 'id'> & {
    label?: string;
    errors?: string[];
    decrementLabel?: string;
    incrementLabel?: string;
  }
>(
  (
    {
      label,
      className,
      required,
      errors,
      decrementLabel,
      incrementLabel,
      disabled = false,
      ...rest
    },
    ref,
  ) => {
    const id = React.useId();

    return (
      <div className={clsx('space-y-2', className)}>
        {label != null && label !== '' && <Label htmlFor={id}>{label}</Label>}
        <div className="inline-flex items-center rounded-lg border">
          <button
            aria-label={decrementLabel}
            className={clsx(
              'group rounded-l-lg p-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--number-input-focus,hsl(var(--primary)))]',
              !disabled &&
                'hover:bg-[var(--number-input-background-hover,hsl(var(--contrast-100)/50%))]',
              disabled && 'cursor-not-allowed opacity-30',
            )}
            disabled={disabled}
            onClick={(e) => {
              e.preventDefault();

              const input = e.currentTarget.parentElement?.querySelector('input');

              input?.stepDown();
              input?.dispatchEvent(new InputEvent('change', { bubbles: true, cancelable: true }));
            }}
          >
            <Minus
              className={clsx(
                'text-[var(--number-input-icon,hsl(var(--contrast-300)))] transition-colors duration-300',
                !disabled &&
                  'group-hover:text-[var(--number-input-icon-hover,hsl(var(--foreground)))]',
              )}
              size={18}
              strokeWidth={1.5}
            />
          </button>
          <input
            {...rest}
            className={clsx(
              'w-8 flex-1 select-none justify-center text-center text-[var(--number-input-text,hsl(var(--foreground)))] [appearance:textfield] focus-visible:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
              disabled && 'cursor-not-allowed opacity-30',
            )}
            disabled={disabled}
            id={id}
            ref={ref}
            type="number"
          />
          <button
            aria-label={incrementLabel}
            className={clsx(
              'group rounded-r-lg p-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--number-input-focus,hsl(var(--primary)))]',
              !disabled &&
                'hover:bg-[var(--number-input-background-hover,hsl(var(--contrast-100)/50%))]',
              disabled && 'cursor-not-allowed opacity-30',
            )}
            disabled={disabled}
            onClick={(e) => {
              e.preventDefault();

              const input = e.currentTarget.parentElement?.querySelector('input');

              input?.stepUp();
              input?.dispatchEvent(new InputEvent('change', { bubbles: true, cancelable: true }));
            }}
          >
            <Plus
              className={clsx(
                'text-[var(--number-input-icon,hsl(var(--contrast-300)))] transition-colors duration-300',
                !disabled &&
                  'group-hover:text-[var(--number-input-icon-hover,hsl(var(--foreground)))]',
              )}
              size={18}
              strokeWidth={1.5}
            />
          </button>
        </div>
        {errors?.map((error) => <FieldError key={error}>{error}</FieldError>)}
      </div>
    );
  },
);

NumberInput.displayName = 'NumberInput';
