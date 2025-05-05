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
 *   --counter-focus: var(--primary);
 *   --counter-font-family: var(--font-family-body);
 *   --counter-background: var(--background);
 *   --counter-background-hover: color-mix(in oklab, var(--contrast-100) 50%, transparent);
 *   --counter-border: var(--contrast-100);
 *   --counter-text: var(--foreground);
 *   --counter-icon-hover: var(--foreground);
 *   --counter-icon: var(--contrast-300);
 * }
 * ```
 */
export function Counter({
  current = 0,
  max = 10,
  decrementAriaLabel = 'Decrease count',
  incrementAriaLabel = 'Increase count',
}: CounterProps) {
  const [count, setCount] = useState(current);

  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex items-center justify-between rounded-lg border border-(--counter-border,var(--contrast-100)) bg-(--counter-background,var(--background)) font-(family-name:--counter-font-family,var(--font-family-body)) text-(--counter-text,var(--foreground))">
      <button
        aria-label={decrementAriaLabel}
        className={clsx(
          'group z-[1] rounded-l-lg p-3 focus-visible:ring-2 focus-visible:ring-(--counter-focus,var(--primary)) focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
          count > 0 &&
            'hover:bg-(--counter-background-hover,color-mix(in_oklab,var(--contrast-100)_50%,transparent))',
        )}
        disabled={count === 0}
        onClick={decrement}
      >
        <Minus
          className={clsx(
            'text-(--counter-icon,var(--contrast-300)) transition-colors duration-300',
            count > 0 && 'group-hover:text-(--counter-icon-hover,var(--foreground))',
          )}
          size={18}
          strokeWidth={1.5}
        />
      </button>
      <input
        className="w-8 [appearance:textfield] bg-transparent text-center select-none focus-visible:outline-hidden [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        max={max}
        readOnly
        type="number"
        value={count}
      />
      <button
        aria-label={incrementAriaLabel}
        className="group z-[1] rounded-r-lg p-3 transition-colors duration-300 hover:bg-(--counter-background-hover,color-mix(in_oklab,var(--contrast-100)_50%,transparent)) focus-visible:ring-2 focus-visible:ring-(--counter-focus,var(--primary)) focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
        disabled={count === max}
        onClick={increment}
      >
        <Plus
          className="text-(--counter-icon,var(--contrast-300)) transition-colors duration-300 group-hover:text-(--counter-icon-hover,var(--foreground))"
          size={18}
          strokeWidth={1.5}
        />
      </button>
    </div>
  );
}
