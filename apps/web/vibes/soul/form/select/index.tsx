'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import { clsx } from 'clsx';
import { ChevronDown, ChevronUp } from 'lucide-react';
import * as React from 'react';

import { FieldError } from '@/vibes/soul/form/field-error';
import { Label } from '@/vibes/soul/form/label';

type Props = {
  colorScheme?: 'light' | 'dark';
  id?: string;
  name: string;
  pending?: boolean;
  placeholder?: string;
  label?: string;
  hideLabel?: boolean;
  variant?: 'round' | 'rectangle';
  options: Array<{ label: string; value: string }>;
  className?: string;
  errors?: string[];
  onFocus?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  onOptionMouseEnter?: (value: string) => void;
} & React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>;

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *    --select-light-trigger-background: var(--background);
 *    --select-light-trigger-border: var(--contrast-100);
 *    --select-light-trigger-border-hover: var(--contrast-300);
 *    --select-light-trigger-border-error: var(--error);
 *    --select-light-trigger-text: var(--foreground);
 *    --select-light-trigger-focus: var(--primary);
 *    --select-light-icon: var(--foreground);
 *    --select-light-content-background: var(--background);
 *    --select-light-content-border: color-mix(in oklab, var(--foreground) 10%, transparent);
 *    --select-light-item-background-hover: var(--contrast-100);
 *    --select-light-item-background-focus: var(--contrast-100);
 *    --select-light-item-text: var(--contrast-400);
 *    --select-light-item-text-hover: var(--foreground);
 *    --select-light-item-text-focus: var(--foreground);
 *    --select-light-item-checked-text-focus: var(--foreground);
 *    --select-dark-trigger-background: var(--foreground);
 *    --select-dark-trigger-border: var(--contrast-500);
 *    --select-dark-trigger-border-hover: var(--contrast-300);
 *    --select-dark-trigger-border-error: var(--error);
 *    --select-dark-trigger-text: var(--background);
 *    --select-dark-trigger-focus: var(--primary);
 *    --select-dark-icon: var(--background);
 *    --select-dark-content-background: var(--foreground);
 *    --select-dark-content-border: color-mix(in oklab, var(--background) 10%, transparent);
 *    --select-dark-item-background-hover: var(--contrast-500);
 *    --select-dark-item-background-focus: var(--contrast-500);
 *    --select-dark-item-text: var(--contrast-200);
 *    --select-dark-item-text-hover: var(--background);
 *    --select-dark-item-text-focus: var(--background);
 *    --select-dark-item-checked-text-focus: var(--background);
 *  }
 * ```
 */
export function Select({
  colorScheme = 'light',
  label,
  hideLabel = false,
  name,
  pending = false,
  placeholder = 'Select an item',
  variant = 'rectangle',
  options,
  className,
  errors,
  onFocus,
  onBlur,
  onOptionMouseEnter,
  value,
  ...rest
}: Props) {
  const id = React.useId();

  return (
    <div className={clsx('w-full', className)}>
      {label !== undefined && label !== '' && (
        <Label
          className={clsx(hideLabel && 'sr-only', 'mb-2')}
          colorScheme={colorScheme}
          htmlFor={id}
        >
          {label}
        </Label>
      )}
      <SelectPrimitive.Root {...rest} name={name} value={value}>
        <SelectPrimitive.Trigger
          aria-label={label}
          className={clsx(
            'flex h-fit w-full items-center justify-between gap-3 border p-2 px-5 py-3 text-sm font-medium transition-colors select-none focus-visible:ring-2 focus-visible:outline-hidden',
            variant === 'rectangle' ? 'rounded-lg' : 'rounded-full',
            {
              light:
                'bg-(--select-light-trigger-background,var(--background)) text-(--select-light-trigger-text,var(--foreground)) hover:border-(--select-light-trigger-border-hover,var(--contrast-300)) hover:bg-(--select-light-trigger-background-hover,var(--contrast-100)) focus-visible:ring-(--select-light-trigger-focus,var(--primary))',
              dark: 'bg-(--select-dark-trigger-background,var(--foreground)) text-(--select-dark-trigger-text,var(--background)) hover:border-(--select-dark-trigger-border-hover,var(--contrast-300)) hover:bg-(--select-dark-trigger-background-hover,var(--contrast-500)) focus-visible:ring-(--select-dark-trigger-focus,var(--primary))',
            }[colorScheme],
            {
              light:
                errors && errors.length > 0
                  ? 'border-(--select-light-trigger-border-error,var(--error))'
                  : 'border-(--select-light-trigger-border,var(--contrast-100))',
              dark:
                errors && errors.length > 0
                  ? 'border-(--select-dark-trigger-border-error,var(--error))'
                  : 'border-(--select-dark-trigger-border,var(--contrast-500))',
            }[colorScheme],
          )}
          data-pending={pending ? true : null}
          id={id}
          onBlur={onBlur}
          onFocus={onFocus}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon asChild>
            <ChevronDown
              className={clsx(
                'w-5 transition-transform',
                {
                  light: 'text-(--select-light-icon,var(--foreground))',
                  dark: 'text-(--select-dark-icon,var(--background))',
                }[colorScheme],
              )}
              strokeWidth={1.5}
            />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            className={clsx(
              'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-50 max-h-80 w-full overflow-y-auto rounded-xl p-2 shadow-xl ring-1 @4xl:rounded-3xl @4xl:p-4',
              {
                light:
                  'bg-(--select-light-content-background,var(--background)) ring-(--select-light-content-border,color-mix(in_oklab,var(--foreground)_10%,transparent))',
                dark: 'bg-(--select-dark-content-background,var(--foreground)) ring-(--select-dark-content-border,color-mix(in_oklab,var(--background)_10%,transparent))',
              }[colorScheme],
            )}
          >
            <SelectPrimitive.ScrollUpButton className="flex w-full cursor-default items-center justify-center py-3">
              <ChevronUp
                className={clsx(
                  'w-5',
                  {
                    light: 'text-(--select-light-icon,var(--foreground))',
                    dark: 'text-(--select-dark-icon,var(--background))',
                  }[colorScheme],
                )}
                strokeWidth={1.5}
              />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport>
              {options.map((option) => (
                <SelectPrimitive.Item
                  className={clsx(
                    'w-full cursor-default rounded-lg px-3 py-2 text-sm font-medium outline-hidden transition-colors select-none @4xl:text-base',
                    {
                      light:
                        'text-(--select-light-item-text,var(--contrast-400)) hover:bg-(--select-light-item-background-hover,var(--contrast-100)) hover:text-(--select-light-item-text-hover,var(--foreground)) focus-visible:bg-(--select-light-item-background-focus,var(--contrast-100)) focus-visible:text-(--select-light-item-text-focus,var(--foreground)) data-[state=checked]:text-(--select-light-item-checked-text-focus,var(--foreground))',
                      dark: 'text-(--select-dark-item-text,var(--contrast-200)) hover:bg-(--select-dark-item-background-hover,var(--contrast-500)) hover:text-(--select-dark-item-text-hover,var(--background)) focus-visible:bg-(--select-dark-item-background-focus,var(--contrast-500)) focus-visible:text-(--select-dark-item-text-focus,var(--background)) data-[state=checked]:text-(--select-dark-item-checked-text-focus,var(--background))',
                    }[colorScheme],
                  )}
                  key={option.value}
                  onMouseEnter={() => {
                    onOptionMouseEnter?.(option.value);
                  }}
                  value={option.value}
                >
                  <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton className="flex w-full cursor-default items-center justify-center py-3">
              <ChevronDown
                className={clsx(
                  'w-5',
                  {
                    light: 'text-(--select-icon,var(--foreground))',
                    dark: 'text-(--select-icon,var(--background))',
                  }[colorScheme],
                )}
                strokeWidth={1.5}
              />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
      {errors?.map((error) => (
        <FieldError className="mt-2" key={error}>
          {error}
        </FieldError>
      ))}
    </div>
  );
}
