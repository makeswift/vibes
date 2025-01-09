import { clsx } from 'clsx';
import * as React from 'react';

import { FieldError } from '@/vibes/soul/form/field-error';
import { Label } from '@/vibes/soul/form/label';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *    --textarea-background: hsl(var(--background));
 *    --textarea-text: hsl(var(--foreground));
 *    --textarea-placeholder: hsl(var(--contrast-gray-500));
 *    --textarea-border: hsl(var(--border-contrast-100));
 *    --textarea-border-focus: hsl(var(--foreground));
 *    --textarea-border-error: hsl(var(--error));
 *  }
 * ```
 */
export const Textarea = React.forwardRef<
  React.ComponentRef<'textarea'>,
  React.ComponentPropsWithoutRef<'textarea'> & {
    prepend?: React.ReactNode;
    label?: string;
    errors?: string[];
  }
>(({ label, className, required, errors, ...rest }, ref) => {
  const id = React.useId();

  return (
    <div className={clsx('space-y-2', className)}>
      {label != null && label !== '' && <Label htmlFor={id}>{label}</Label>}
      <textarea
        {...rest}
        className={clsx(
          'w-full rounded-lg border bg-[var(--textarea-background,hsl(var(--background)))] p-3 text-[var(--textarea-text,hsl(var(--foreground)))] placeholder-[var(--textarea-placeholder,hsl(var(--contrast-gray-500)))] transition-colors duration-200 placeholder:font-normal focus:border-[var(--textarea-border-focus,hsl(var(--foreground)))] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          errors && errors.length > 0
            ? 'border-[var(--textarea-border-error,hsl(var(--error)))]'
            : 'border-[var(--textarea-border,hsl(var(--border-contrast-100)))]',
        )}
        id={id}
        ref={ref}
      />
      {errors?.map((error) => <FieldError key={error}>{error}</FieldError>)}
    </div>
  );
});

Textarea.displayName = 'Textarea';
