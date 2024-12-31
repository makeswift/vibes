import { clsx } from 'clsx';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --skeleton: hsl(var(--contrast-100));
 * }
 * ```
 */

function SkeletonBox({
  height,
  width,
  rounded = 'none',
}: {
  height: string;
  width?: string;
  rounded?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
}) {
  return (
    <div
      className={clsx(
        'max-w-full bg-[var(--skeleton,hsl(var(--contrast-100)))]',
        {
          none: 'rounded-none',
          sm: 'rounded-sm',
          base: 'rounded',
          md: 'rounded-md',
          lg: 'rounded-lg',
          xl: 'rounded-xl',
          '2xl': 'rounded-2xl',
          '3xl': 'rounded-3xl',
          full: 'rounded-full',
        }[rounded],
      )}
      style={{ height, width }}
    />
  );
}

SkeletonBox.displayName = 'Skeleton.Box';

function SkeletonImage({
  aspectRatio = '5:6',
  height,
  width,
  rounded = 'none',
}: {
  aspectRatio?: '5:6' | '3:4' | '1:1';
  height?: string;
  width?: string;
  rounded?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
}) {
  return (
    <div
      className={clsx(
        'max-w-full bg-[var(--skeleton,hsl(var(--contrast-100)))]',
        {
          '5:6': 'aspect-[5/6]',
          '3:4': 'aspect-[3/4]',
          '1:1': 'aspect-square',
        }[aspectRatio],
        {
          none: 'rounded-none',
          sm: 'rounded-sm',
          base: 'rounded',
          md: 'rounded-md',
          lg: 'rounded-lg',
          xl: 'rounded-xl',
          '2xl': 'rounded-2xl',
          '3xl': 'rounded-3xl',
          full: 'rounded-full',
        }[rounded],
      )}
      style={{ height, width }}
    />
  );
}

SkeletonImage.displayName = 'Skeleton.Image';

function SkeletonText({
  width = '10ch',
  lineHeight = '1lh',
  characterHeight = '1ex',
  rounded = 'none',
}: {
  className?: string;
  width?: string;
  lineHeight?: string;
  characterHeight?: string;
  rounded?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
}) {
  return (
    <div className={clsx('flex items-center')} style={{ height: lineHeight }}>
      <div
        className={clsx(
          'max-w-full bg-[var(--skeleton,hsl(var(--contrast-100)))]',
          {
            none: 'rounded-none',
            sm: 'rounded-sm',
            base: 'rounded',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            '2xl': 'rounded-2xl',
            '3xl': 'rounded-3xl',
            full: 'rounded-full',
          }[rounded],
        )}
        style={{ width, height: characterHeight }}
      />
    </div>
  );
}

SkeletonText.displayName = 'Skeleton.Text';

function SkeletonPending({
  children,
  className,
  pending = true,
}: {
  children: React.ReactNode;
  className?: string;
  pending?: boolean;
}) {
  return (
    <div className={className} data-pending={pending ? '' : undefined} role="status">
      <div
        aria-hidden="true"
        className="motion-safe:group-has-[[data-pending]]/pending:animate-pulse"
      >
        {children}
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

SkeletonPending.displayName = 'Skeleton.Pending';

export {
  SkeletonBox as Box,
  SkeletonImage as Image,
  SkeletonText as Text,
  SkeletonPending as Pending,
};
