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
 *   --number-input-focus: var(--primary);
 *   --number-input-light-background: var(--background);
 *   --number-input-light-text: var(--foreground);
 *   --number-input-light-icon: var(--contrast-300);
 *   --number-input-light-icon-hover: var(--foreground);
 *   --number-input-light-button-background: var(--background);
 *   --number-input-light-button-background-hover: var(--contrast-100) / 50%;
 *   --number-input-dark-background: var(--background);
 *   --number-input-dark-text: var(--background);
 *   --number-input-dark-icon: var(--contrast-300);
 *   --number-input-dark-icon-hover: var(--background);
 *   --number-input-dark-button-background: var(--foreground);
 *   --number-input-dark-button-background-hover: var(--contrast-500) / 50%;
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
    colorScheme?: 'light' | 'dark';
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
      colorScheme = 'light',
      ...rest
    },
    ref,
  ) => {
    const id = React.useId();

    return (
      <div className={clsx('space-y-2', className)}>
        {label != null && label !== '' && (
          <Label colorScheme={colorScheme} htmlFor={id}>
            {label}
          </Label>
        )}
        <div
          className={clsx(
            'inline-flex items-center rounded-lg border',
            {
              light: 'bg-(--number-input-light-background,var(--background))',
              dark: 'bg-(--number-input-dark-background,var(--foreground))',
            }[colorScheme],
          )}
        >
          <button
            aria-label={decrementLabel}
            className={clsx(
              'group rounded-l-lg p-3.5 focus-visible:ring-2 focus-visible:ring-(--number-input-focus,var(--primary)) focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-30',
              {
                light:
                  'bg-(--number-input-light-button-background,var(--background)) hover:bg-(--number-input-light-button-background-hover,var(--contrast-100)/50%)',
                dark: 'bg-(--number-input-dark-button-background,var(--foreground)) hover:bg-(--number-input-dark-button-background-hover,var(--contrast-500)/50%)',
              }[colorScheme],
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
                'transition-colors duration-300',
                {
                  light:
                    'text-(--number-input-light-icon,var(--contrast-300)) group-hover:text-(--number-input-light-icon-hover,var(--foreground))',
                  dark: 'text-(--number-input-dark-icon,var(--contrast-300)) group-hover:text-(--number-input-dark-icon-hover,var(--background))',
                }[colorScheme],
              )}
              size={18}
              strokeWidth={1.5}
            />
          </button>
          <input
            {...rest}
            className={clsx(
              'w-8 flex-1 [appearance:textfield] justify-center bg-transparent text-center select-none focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-30 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
              {
                light: 'text-(--number-input-light-text,var(--foreground))',
                dark: 'text-(--number-input-dark-text,var(--background))',
              }[colorScheme],
            )}
            disabled={disabled}
            id={id}
            ref={ref}
            type="number"
          />
          <button
            aria-label={incrementLabel}
            className={clsx(
              'group rounded-r-lg p-3.5 focus-visible:ring-2 focus-visible:ring-(--number-input-focus,var(--primary)) focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-30',
              {
                light:
                  'bg-(--number-input-light-button-background,var(--background)) hover:bg-(--number-input-light-button-background-hover,var(--contrast-100)/50%)',
                dark: 'bg-(--number-input-dark-button-background,var(--foreground)) hover:bg-(--number-input-dark-button-background-hover,var(--contrast-500)/50%)',
              }[colorScheme],
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
                'transition-colors duration-300',
                {
                  light:
                    'text-(--number-input-light-icon,var(--contrast-300)) group-hover:text-(--number-input-light-icon-hover,var(--foreground))',
                  dark: 'text-(--number-input-dark-icon,var(--contrast-300)) group-hover:text-(--number-input-dark-icon-hover,var(--background))',
                }[colorScheme],
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
