'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import { clsx } from 'clsx';
import { ChevronDown, ChevronUp } from 'lucide-react';
import * as React from 'react';

import { FieldError } from '@/vibes/soul/form/field-error';
import { Label } from '@/vibes/soul/form/label';

type Props = {
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
 *    --select-trigger-background: hsl(var(--white));
 *    --select-trigger-border: hsl(var(--contrast-100));
 *    --select-trigger-border-hover: hsl(var(--contrast-300));
 *    --select-trigger-border-error: hsl(var(--error));
 *    --select-trigger-text: hsl(var(--foreground));
 *    --select-trigger-focus: hsl(var(--primary));
 *    --select-icon: hsl(var(--foreground));
 *    --select-content-background: hsl(var(--background));
 *    --select-item-background-hover: hsl(var(--contrast-100));
 *    --select-item-background-focus: hsl(var(--contrast-100));
 *    --select-item-text: hsl(var(--contrast-400));
 *    --select-item-text-hover: hsl(var(--foreground));
 *    --select-item-text-focus: hsl(var(--foreground));
 *    --select-item-checked-text-focus: hsl(var(--foreground));
 *  }
 * ```
 */
export function Select({
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
    <div className={className}>
      {label !== undefined && label !== '' && (
        <Label className={clsx(hideLabel && 'sr-only', 'mb-2')} htmlFor={id}>
          {label}
        </Label>
      )}
      <SelectPrimitive.Root {...rest} name={name} value={value}>
        <SelectPrimitive.Trigger
          aria-label={label}
          className={clsx(
            'flex h-fit w-full select-none items-center justify-between gap-3 border bg-[var(--select-trigger-background,hsl(var(--white)))] p-2 px-5 py-3 text-sm font-medium text-[var(--select-trigger-text,hsl(var(--foreground)))] transition-colors hover:border-[var(--select-trigger-border-hover,hsl(var(--contrast-300)))] hover:bg-[var(--select-trigger-background-hover,hsl(var(--contrast-100)))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--select-trigger-focus,hsl(var(--primary)))]',
            variant === 'rectangle' ? 'rounded-lg' : 'rounded-full',
            errors && errors.length > 0
              ? 'border-[var(--select-trigger-border-error,hsl(var(--error)))]'
              : 'border-[var(--select-trigger-border,hsl(var(--contrast-100)))]',
          )}
          data-pending={pending ? true : null}
          id={id}
          onBlur={onBlur}
          onFocus={onFocus}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon asChild>
            <ChevronDown
              className="w-5 text-[var(--select-icon,hsl(var(--foreground)))] transition-transform"
              strokeWidth={1.5}
            />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className="z-50 max-h-80 w-full overflow-y-scroll rounded-xl bg-[var(--select-content-background,hsl(var(--background)))] p-2 shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 @4xl:rounded-3xl @4xl:p-4">
            <SelectPrimitive.ScrollUpButton className="flex w-full cursor-default items-center justify-center py-3">
              <ChevronUp
                className="w-5 text-[var(--select-icon,hsl(var(--foreground)))]"
                strokeWidth={1.5}
              />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport>
              {options.map((option) => (
                <SelectPrimitive.Item
                  className="w-full cursor-default select-none rounded-xl px-3 py-2 text-sm font-medium text-[var(--select-item-text,hsl(var(--contrast-400)))] outline-none transition-colors hover:bg-[var(--select-item-background-hover,hsl(var(--contrast-100)))] hover:text-[var(--select-item-text-hover,hsl(var(--foreground)))] focus-visible:bg-[var(--select-item-background-focus,hsl(var(--contrast-100)))] focus-visible:text-[var(--select-item-text-focus,hsl(var(--foreground)))] data-[state=checked]:text-[var(--select-item-checked-text-focus,hsl(var(--foreground)))] @4xl:text-base"
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
                className="w-5 text-[var(--select-icon,hsl(var(--foreground)))]"
                strokeWidth={1.5}
              />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
      {errors?.map((error) => <FieldError key={error}>{error}</FieldError>)}
    </div>
  );
}
