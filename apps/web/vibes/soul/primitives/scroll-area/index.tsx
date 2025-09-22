import { ScrollAreaBar, ScrollAreaRoot, ScrollAreaRootProps } from './components';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --scroll-area-background: var(--contrast-100);
 *   --scroll-area-thumb: var(--contrast-200);
 * }
 * ```
 */

export type ScrollAreaProps = Pick<ScrollAreaRootProps, 'className' | 'children' | 'orientation'>;

export function ScrollArea({ className, children, orientation }: ScrollAreaRootProps) {
  return (
    <ScrollAreaRoot
      className={className}
      orientation={orientation}
      scrollHideDelay={500}
      type="hover"
    >
      {children}
      <ScrollAreaBar />
    </ScrollAreaRoot>
  );
}
