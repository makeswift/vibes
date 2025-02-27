'use client';

import { clsx } from 'clsx';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

export interface CounterProps {
  current?: number;
  max?: number;
  decrementAriaLabel?: string;
  incrementAriaLabel?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --counter-focus: hsl(var(--primary));
 *   --counter-font-family: var(--font-family-body);
 *   --counter-background: hsl(var(--background));
 *   --counter-background-hover: hsl(var(--contrast-100)/50%);
 *   --counter-border: hsl(var(--contrast-100));
 *   --counter-text: hsl(var(--foreground));
 *   --counter-icon-hover: hsl(var(--foreground));
 *   --counter-icon: hsl(var(--contrast-300));
 * }
 * ```
 */
export const Counter = function Counter({
  current = 0,
  decrementAriaLabel,
  incrementAriaLabel,
}: CounterProps) {
  const [count, setCount] = useState(current);
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex items-center justify-between rounded-lg border border-[var(--counter-border,hsl(var(--contrast-100)))] bg-[var(--counter-background,hsl(var(--background)))] font-[family-name:var(--counter-font-family,var(--font-family-body))] text-[var(--counter-text,hsl(var(--foreground)))]">
      <button
        aria-label={decrementAriaLabel ?? 'Decrease count'}
        className={clsx(
          'group z-[1] rounded-l-lg p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--counter-focus,hsl(var(--primary)))]',
          count > 0 && 'hover:bg-[var(--counter-background-hover,hsl(var(--contrast-100)/50%))]',
        )}
        disabled={count === 0}
        onClick={decrement}
      >
        <Minus
          className={clsx(
            'text-[var(--counter-icon,hsl(var(--contrast-300)))] transition-colors duration-300',
            count > 0 && 'group-hover:text-[var(--counter-icon-hover,hsl(var(--foreground)))]',
          )}
          size={18}
          strokeWidth={1.5}
        />
      </button>
      <input
        className="w-8 select-none bg-transparent text-center focus-visible:outline-none"
        readOnly
        value={count}
      />
      <button
        aria-label={incrementAriaLabel ?? 'Increase count'}
        className="group z-[1] rounded-r-lg p-3 transition-colors duration-300 hover:bg-[var(--counter-background-hover,hsl(var(--contrast-100)/50%))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--counter-focus,hsl(var(--primary)))]"
        onClick={increment}
      >
        <Plus
          className="text-[var(--counter-icon,hsl(var(--contrast-300)))] transition-colors duration-300 group-hover:text-[var(--counter-icon-hover,hsl(var(--foreground)))]"
          size={18}
          strokeWidth={1.5}
        />
      </button>
    </div>
  );
};
