import * as Toggle from '@radix-ui/react-toggle';

import { Heart } from './heart';

export interface FavoriteProps {
  checked?: boolean;
  setChecked: (liked: boolean) => void;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --favorite-focus: var(--primary);
 *   --favorite-border: var(--contrast-100);
 *   --favorite-icon: var(--foreground);
 *   --favorite-on-background: var(--contrast-100);
 *   --favorite-off-border: var(--contrast-200);
 * }
 * ```
 */
export function Favorite({ checked = false, setChecked }: FavoriteProps) {
  return (
    <Toggle.Root
      className="group relative flex h-[50px] w-[50px] shrink-0 cursor-pointer items-center justify-center rounded-full border border-(--favorite-border,var(--contrast-100)) text-(--favorite-icon,var(--foreground)) ring-(--favorite-focus,var(--primary)) transition duration-300 focus-within:ring-2 focus-within:outline-hidden data-[state=off]:hover:border-(--favorite-off-border,var(--contrast-200)) data-[state=on]:bg-(--favorite-on-background,var(--contrast-100))"
      onPressedChange={setChecked}
      pressed={checked}
    >
      <Heart filled={checked} />
    </Toggle.Root>
  );
}
