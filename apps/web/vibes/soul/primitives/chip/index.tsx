import { X } from 'lucide-react';
import { MouseEvent, ReactNode } from 'react';

export interface ChipProps {
  name?: string;
  value?: string;
  children?: ReactNode;
  removeLabel?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --chip-focus: var(--foreground);
 *   --chip-font-family: var(--font-family-body);
 *   --chip-background: var(--contrast-100);
 *   --chip-background-hover: var(--contrast-200);
 *   --chip-text: var(--foreground);
 * }
 * ```
 */
export function Chip({ name, value, children, removeLabel = 'Remove', onClick }: ChipProps) {
  return (
    <span className="flex h-9 items-center gap-1.5 rounded-lg bg-(--chip-background,var(--contrast-100)) py-2 ps-3 pe-2 font-(family-name:--chip-font-family,var(--font-family-body)) text-sm leading-5 font-semibold text-(--chip-text,var(--foreground))">
      {children}
      <button
        className="flex h-5 w-5 items-center justify-center rounded-full hover:bg-(--chip-background-hover,var(--contrast-200)) focus-visible:ring-1 focus-visible:ring-(--button-focus,var(--foreground)) focus-visible:outline-hidden"
        name={name}
        onClick={onClick}
        title={removeLabel}
        value={value}
      >
        <X size={12} />
      </button>
    </span>
  );
}
