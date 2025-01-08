import * as LabelPrimitive from '@radix-ui/react-label';
import { clsx } from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *    --label-text: hsl(var(--contrast-500));
 *  }
 * ```
 */
export function Label({
  className,
  ...rest
}: ComponentPropsWithoutRef<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      {...rest}
      className={clsx(
        'block font-mono text-xs uppercase text-[var(--label-text,hsl(var(--contrast-500)))]',
        className,
      )}
    />
  );
}
